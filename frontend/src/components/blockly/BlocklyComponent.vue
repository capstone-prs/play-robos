<template>
  <div class="workspace-container">
    <div class="overlay-container">
      <div class="row">
        <div class="col-2 buttons" data-cy="help-btn">
          <ActionButton text-label="U" data-cy="check-btn" @click="write" />
        </div>
        <div class="col-2 buttons" data-cy="help-btn" align="left">
          <UndoButton @click="undo" />
        </div>
        <div class="col-4 check">
          <ActionButton
            text-label="CHECK"
            data-cy="check-btn"
            @click="openUploadDialog"
          />
          <CheckDialog
            v-model="isDialogOpen"
            data-cy="check-dialog"
            :correct="isProgramCorrect"
          />
        </div>
        <div class="col-2 buttons" data-cy="help-btn">
          <HelpButton />
        </div>
        <div class="col-2 buttons" data-cy="menu-btn">
          <MenuButton @click="openMenuDialog" />
          <MenuDialog v-model="showMenuActivity" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <q-btn-dropdown
            class="futura"
            size="16"
            persistent
            glossy
            menu-self="top left"
            style="position: absolute; right: 0%; top: 130%"
            rounded
            color="primary"
          >
            <q-dialog seamless position="right" v-model="showDialog">
              <q-card class="q-pa-sm" align="center" style="width: 100px">
                <img
                  :src="determineLevelsToDisplay[levelNum - 1].gif"
                  style="size: 20px"
                />
              </q-card>
            </q-dialog>
          </q-btn-dropdown>
        </div>
      </div>
    </div>

    <div
      ref="blocklyContainer"
      class="blockly-container"
      data-cy="blockly-container"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref, onMounted, computed } from 'vue';
import * as Blockly from 'blockly';
import './blocks/stocks';
import './blocks/generator';

import * as Toolbox from './toolbox/typetoolbox';
import MenuButton from '../buttons/MenuButton.vue';
import HelpButton from '../buttons/HelpButton.vue';
import ActionButton from '../buttons/ActionButton.vue';
import CheckDialog from '../CheckDialog.vue';
import { javascriptGenerator } from 'blockly/javascript';
import UndoButton from '../buttons/UndoButton.vue';
import { useRouter } from 'vue-router';
import {
  bluetoothSerial,
  onDisconnect,
  btListenser,
} from 'src/utils/bluetoothUtils';
import { TaskStatus } from 'src/types/Status';
import MenuDialog from '../../components/MenuDialog.vue';
import * as Levels from '../../components/games/levelDetails';
import executeCodes from '../../utils/executeCodes';
import { settings_5_7 } from '../games/levels_5_7';
import { settings_8_11 } from '../games/levels_8_11';

const $q = useQuasar();
const route = useRouter().currentRoute;
const routeParam = route.value.params.param as string;
const isDialogOpen = ref(false);
const showDialog = ref(true);
const splitParams = routeParam.split('_');
const levelNum = parseInt(splitParams[1]); // to be use for check program
const settingNum = parseInt(splitParams[0]);
const ageGroup = splitParams[2];
const isProgramCorrect = ref(false);
const showMenuActivity = ref(false);

const router = useRouter();

const taskStatus = ref<TaskStatus>('none');
const progress = ref($q.notify({ group: false }));

const workspace = ref<Blockly.Workspace>();
const blocklyContainer = ref<string | Element>('');

router.beforeEach(() => {
  if (taskStatus.value === 'started') {
    return false;
  }
});

const checkProgram = () => {
  // insert check program code
};

const openUploadDialog = () => {
  checkProgram();
  isDialogOpen.value = true;
};

const openMenuDialog = () => {
  showMenuActivity.value = true;
};

const notifyError = (e: string) =>
  $q.notify({
    type: 'negative',
    message: e,
  });

const generator = (): string => {
  if (workspace.value) {
    const value = javascriptGenerator.workspaceToCode(workspace.value);
    return value;
  }
  throw new Error('Error at blocks generator');
};
const undo = () => {
  if (workspace.value) {
    workspace.value.undo(false);
  }
};

const determineLevelsToDisplay = computed(() => {
  return ageGroup === '5-7'
    ? Levels.levels_5_7[settingNum].Levels
    : Levels.levels_8_11[settingNum].Levels;
});

const toolbox = computed(() => {
  return ageGroup === '5-7'
    ? Toolbox.toolbox_5_7[settingNum]
    : Toolbox.toolbox_8_11[settingNum];
});

onMounted(() => {
  workspace.value = Blockly.inject(blocklyContainer.value, {
    // refer to toolbox.js file, we can define more levels from there,
    // future handling may be passing the level number as props to this component
    toolbox: toolbox.value,
    trashcan: true,
    grid: {
      spacing: 20,
      length: 3,
      colour: '#ccc',
    },
    zoom: {
      startScale: 1.0,
      maxScale: 3,
      minScale: 0.3,
      scaleSpeed: 0.3,
    },
    theme: {
      name: 'custom',
      componentStyles: {
        workspaceBackgroundColour: '#FFFFFF',
        flyoutBackgroundColour: '#D0D0D0',
        flyoutOpacity: 0.7,
      },
    },
  });

  workspace.value.addChangeListener(generator);

  progress.value();
  taskStatus.value = 'none';

  btListenser(
    bluetoothSerial,
    (data: string) => {
      if (data === '(200)\n') {
        taskStatus.value = 'success';
      } else if (data === '(400)\n') {
        taskStatus.value = 'error';
      }
    },
    notifyError
  );

  onDisconnect(bluetoothSerial, () => {
    taskStatus.value = 'error';
    notifyError('Bluetooth Device is Disconnected');
  });
});

const startProgressNotify = () => {
  taskStatus.value = 'started';
  progress.value();
  progress.value = $q.notify({
    group: false, // required to be updatable
    timeout: 0,
    spinner: true,
    position: 'bottom-right',
    message: 'Uploading file...',
  });
};

const endProgressNotify = () => {
  if (taskStatus.value === 'success') {
    progress.value({
      type: 'positive',
      spinner: false,
      message: 'Uploading done!',
      timeout: 1000,
    });
    taskStatus.value = 'none';
  } else if (taskStatus.value === 'error' || taskStatus.value === 'started') {
    progress.value({
      type: 'negative',
      spinner: false,
      message: 'Upload Failed',
      timeout: 1500,
    });
    taskStatus.value = 'none';
  }
};

const write = () => {
  executeCodes(
    bluetoothSerial,
    generator()
      .trimEnd()
      .split('\n')
      .map((code) => JSON.parse(code)),
    startProgressNotify,
    endProgressNotify,
    notifyError
  );
};
</script>

<style>
.workspace-container {
  position: relative;
  height: 100vh;
}

.blockly-container {
  height: 100%;
  z-index: 1;
}

.overlay-container {
  position: absolute;
  z-index: 2;
  padding-top: 5px;
  left: 60%;
}

.buttons {
  padding: 8px;
}

.check {
  padding: 5px;
}
</style>
../games/writeToRobot
