<template>
  <div class="workspace-container">
    <div class="overlay-container">
      <div class="row" style="position: relative; left: 360%">
        <q-fab
          v-model="fab1"
          color="amber"
          icon="keyboard_arrow_left"
          direction="left"
          glossy
          persistent
        >
          <q-fab-action persistent flat style="padding: 0%">
            <ActionButton text-label="U" data-cy="check-btn" @click="write" />
            <UndoButton @click="undo" />
            <ActionButton
              text-label="CHECK"
              data-cy="check-btn"
              @click="openUploadDialog"
            />
            <HelpButton />
            <CheckDialog
              v-model="isDialogOpen"
              data-cy="check-dialog"
              :correct="isProgramCorrect"
            />
            <MenuButton @click="openMenuDialog" />
            <MenuDialog v-model="showMenuActivity" />
          </q-fab-action>
        </q-fab>
        <!-- <div class="col-2 buttons q-pl-md" data-cy="menu-btn">
          <MenuButton @click="openMenuDialog" />
          <MenuDialog v-model="showMenuActivity" />
        </div> -->
      </div>
      <div class="row">
        <div class="col q-pt-sm" style="position: absolute ;left: 280%;">
          <q-fab
            v-model="fab2"
            class="futura"
            color="purple"
            icon="keyboard_arrow_down"
            direction="down"
            glossy
            persistent
            label="GOAL"
          >
            <q-fab-action padding="0" flat>
              <q-card class="q-pa-sm" align="center" style="width: 100px">
                <img
                  :src="determineLevelGifsToDisplay[levelNum - 1].gif"
                  style="size: 20px"
                />
              </q-card>
            </q-fab-action>
          </q-fab>

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
import { ref, onMounted } from 'vue';
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
  btListenser
} from 'src/utils/bluetoothUtils';
import { TaskStatus } from 'src/types/Status';
import MenuDialog from '../../components/MenuDialog.vue';
import executeCodes from '../../utils/executeCodes';
import { settings_5_7 } from '../games/levels_5_7';
import { settings_8_11 } from '../games/levels_8_11';

const $q = useQuasar();
const router = useRouter();
const routeParam = router.currentRoute.value.params.param as string;
const isDialogOpen = ref(false);
const splitParams = routeParam.split('_');
const levelNum = parseInt(splitParams[1]); // to be use for check program
const settingNum = parseInt(splitParams[0]);
const ageGroup = splitParams[2];
const isProgramCorrect = ref(false);
const showMenuActivity = ref(false);
const fab1 = ref(false);
const fab2 = ref(false);
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
    message: e
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

const determineLevelGifsToDisplay =
  ageGroup === '5-7'
    ? settings_5_7[settingNum].levels
    : settings_8_11[settingNum].levels;

const toolbox =
  ageGroup === '5-7'
    ? Toolbox.toolbox_5_7[settingNum]
    : Toolbox.toolbox_8_11[settingNum];

onMounted(() => {
  workspace.value = Blockly.inject(blocklyContainer.value, {
    // refer to typetoolbox.ts file
    toolbox: toolbox,
    trashcan: true,
    scrollbars: true,
    grid: {
      spacing: 20,
      length: 3,
      colour: '#ccc'
    },
    zoom: {
      startScale: 1.0,
      maxScale: 3,
      minScale: 0.3,
      scaleSpeed: 0.3
    },
    theme: {
      name: 'custom',
      componentStyles: {
        workspaceBackgroundColour: '#FFFFFF',
        flyoutBackgroundColour: '#D0D0D0',
        flyoutOpacity: 0.7
      }
    }
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
  showLoading();
  taskStatus.value = 'started';
  progress.value();
  progress.value = $q.notify({
    group: false, // required to be updatable
    timeout: 0,
    spinner: true,
    position: 'bottom-right',
    message: 'Uploading file...'
  });
};

const endProgressNotify = () => {
  $q.loading.hide();
  if (taskStatus.value === 'success') {
    progress.value({
      type: 'positive',
      spinner: false,
      message: 'Uploading done!',
      timeout: 1000
    });
    taskStatus.value = 'none';
  } else if (taskStatus.value === 'error' || taskStatus.value === 'started') {
    progress.value({
      type: 'negative',
      spinner: false,
      message: 'Upload Failed',
      timeout: 1500
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

const showLoading = () => {
  $q.loading.show({
    spinnerColor: 'white',
    backgroundColor: 'black',
    message: 'Preparing your studio'
  });
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


</style>
