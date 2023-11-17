<template>
  <div class="row items-start">
    <div class="col">
      <div class="workspace-container" id="blockly">
        <div class="overlay-container">
          <!-- <div class="q-pa-md row"> -->
          <!-- <div class="col q-pt-none" style="position: absolute; left: 450%">
        <q-fabz
          id="goal-fab-btn"
          v-model="gifBtn"
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
              <img :src="levels[levelNum - 1].gif" style="size: 20px" />
            </q-card>
          </q-fab-action>
        </q-fabz>
      </div> -->

          <!-- </div> -->
          <CheckDialog
            v-model="isDialogOpen"
            :correct="isDialogOpen && isCorrectCode()"
            :onCorrect="
              () => {
                closeCheckDialog();
                write();
              }
            "
          />
          <MenuDialog v-model="showMenuActivity" />
        </div>

        <div
          ref="blocklyContainer"
          class="blockly-container"
          data-cy="blockly-container"
        ></div>
      </div>
    </div>

    <div class="col-3">
      <div class="row">
        <div class="col q-ma-xs">
          <q-btn
            class="fit wrap"
            color="pink"
            glossy
            stack
            size="md"
            icon="undo"
            @click="undo"
            label="undo"
          />
        </div>

        <div class="col q-ma-xs">
          <q-btn
            class="fit wrap"
            color="amber"
            glossy
            stack
            size="md"
            icon="check"
            @click="openCheckDialog"
            data-cy="check-btn"
            label="check"
          />
        </div>
      </div>
      <div class="row">
        <div class="col q-ma-xs">
          <q-btn
            class="fit wrap"
            color="purple"
            stack
            glossy
            size="md"
            icon="help"
            label="help"
          />
        </div>
        <div class="col q-ma-xs">
          <q-btn
            class="fit wrap"
            color="teal"
            stack
            glossy
            size="md"
            icon="menu"
            label="menu"
            @click="openMenuDialog"
          />
        </div>
      </div>
      <div class="row justify-center items-start q-ma-xl">
        <q-badge>TITTLE</q-badge>
      </div>
      <div class="row justify-center q-ma-xl">
        <q-card class="q-pa-sm" style="width: 100px">
          <img :src="levels[levelNum - 1].gif" style="size: 20px" />
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref, onMounted } from 'vue';
import * as Blockly from 'blockly';
import './blocks/stocks';
import './blocks/generator';
import * as Toolbox from './toolbox/typetoolbox';
import CheckDialog from '../CheckDialog.vue';
import { javascriptGenerator } from 'blockly/javascript';
import { useRouter } from 'vue-router';
import {
  bluetoothSerial,
  onDisconnect,
  btListenser,
} from 'src/utils/bluetoothUtils';
import isEqualCodes from 'src/utils/compareCode';
import { TaskStatus } from 'src/types/Status';
import MenuDialog from '../../components/MenuDialog.vue';
import executeCodes from '../../utils/executeCodes';
import { settings_5_7 } from '../games/levels_5_7';
import { settings_8_11 } from '../games/levels_8_11';
import { GeneratorCode } from '../../types/robotParts';
import { startOnboarding } from '../../onboarding/studioOnboarding';
import 'intro.js/introjs.css';

const $q = useQuasar();
const router = useRouter();
const routeParam = router.currentRoute.value.params.param as string;
const isDialogOpen = ref(false);
const splitParams = routeParam.split('_');
const levelNum = parseInt(splitParams[1]); // to be use for check program
const settingNum = parseInt(splitParams[0]);
const ageGroup = splitParams[2];

const showMenuActivity = ref(false);
// const extendBtn = ref(false);
const gifBtn = ref(false);
const taskStatus = ref<TaskStatus>('none');
const progress = ref($q.notify({ group: false }));

const workspace = ref<Blockly.Workspace>();
const blocklyContainer = ref<string | Element>('');

const openCheckDialog = () => {
  isDialogOpen.value = true;
};

const closeCheckDialog = () => {
  isDialogOpen.value = false;
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

const levels =
  ageGroup === '5-7'
    ? settings_5_7[settingNum].levels
    : settings_8_11[settingNum].levels;

const toolbox =
  ageGroup === '5-7'
    ? Toolbox.toolbox_5_7[settingNum]
    : Toolbox.toolbox_8_11[settingNum];

const correctCodes = levels[levelNum - 1].correctCode;

onMounted(() => {
  if (settingNum == 0 && levelNum == 1) {
    startOnboarding();
  }
  workspace.value = Blockly.inject(blocklyContainer.value, {
    // refer to typetoolbox.ts file
    toolbox: toolbox,
    trashcan: true,
    scrollbars: true,
    grid: {
      spacing: 20,
      length: 3,
      colour: '#ccc',
    },
    zoom: {
      startScale: 1.0,
      maxScale: 2,
      minScale: 3,
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

  router.beforeEach(() => {
    if (taskStatus.value === 'started') {
      return false;
    }
  });

  onDisconnect(bluetoothSerial, () => {
    taskStatus.value = 'error';
    notifyError('Bluetooth Device is Disconnected');
  });
});

const startProgressNotify = () => {
  startLoadingUpload();
  taskStatus.value = 'started';
};

const endProgressNotify = () => {
  hideLoadingUpload();
  $q.loading.hide();
  if (taskStatus.value === 'success') {
    $q.notify({
      type: 'positive',
      position: 'top-right',
      message: 'Uploading done!',
      timeout: 1000,
    });
    taskStatus.value = 'none';
    // To-verify: when the execution is successful, it will unlock the next level
    levels[levelNum].completed = true;
  } else if (taskStatus.value === 'error' || taskStatus.value === 'started') {
    $q.notify({
      type: 'negative',
      spinner: false,
      message: 'Upload Failed',
      position: 'top-right',
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

const startLoadingUpload = () => {
  $q.loading.show({
    spinnerColor: 'white',
    backgroundColor: 'black',
    message: 'Executing',
  });
};

const hideLoadingUpload = () => {
  $q.loading.hide();
};

const isCorrectCode = () => {
  if (generator() !== '') {
    const userCodes: GeneratorCode[] = generator()
      .trimEnd()
      .split('\n')
      .map((code) => JSON.parse(code));
    return isEqualCodes(correctCodes, userCodes);
  }

  return false;
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
