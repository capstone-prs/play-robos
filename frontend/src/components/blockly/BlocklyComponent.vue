<template>
  <div class="row items-start">
    <div class="col">
      <div class="workspace-container" id="blockly">
        <div class="overlay-container">
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
          <CoinsDialog
            v-model="showReward"
            :coins="levels[levelNum - 1].reward"
          />
        </div>
        <div
          ref="blocklyContainer"
          class="blockly-container"
          data-cy="blockly-container"
        ></div>
      </div>
    </div>

    <div class="col-3 q-px-md">
      <div class="row q-mt-sm">
        <div class="col q-ma-xs">
          <q-btn
            class="fit wrap"
            color="purple"
            stack
            glossy
            size="sm"
            icon="help"
            label="help"
            @click="startStudioOnboarding"
          />
        </div>
        <div class="col q-ma-xs">
          <q-btn
            class="fit wrap"
            color="teal"
            stack
            glossy
            size="sm"
            icon="menu"
            label="menu"
            id="menu-btn"
            @click="openMenuDialog"
          />
        </div>
      </div>
      <div class="row">
        <q-btn
          class="fit wrap q-ma-xs"
          color="pink"
          glossy
          stack
          size="sm"
          icon="undo"
          @click="undo"
          label="undo"
        />
      </div>
      <div class="row q-ma-sm">
        <div class="col">
          <div class="row justify-center q-mb-xs">
            <q-badge class="hitchcut"
              >Level: {{ levels[levelNum - 1].levelNum }}</q-badge
            >
          </div>
          <div class="row justify-center" style="overflow-x: auto">
            <div
              class="hitchcut q-px-xs text-primary"
              style="
                border-style: solid;
                border-radius: 5px;
                border-color: #0273d4;
                border-width: 1px;
                overflow: auto;
                white-space: nowrap;
              "
            >
              {{ levels[levelNum - 1].goalTitle }}
            </div>
            <!-- <q-badge outline color="primary" class="hitchcut">
              {{ levels[levelNum - 1].goalTitle }}
            </q-badge> -->
          </div>
        </div>
      </div>
      <div class="row justify-center q-ma-md">
        <ImageViewer :pics="levels[levelNum - 1].gif" id="goal" />
        <q-badge color="secondary" outline>{{ Date.now() }}</q-badge>
      </div>

      <div class="row q-mt-md">
        <q-btn
          class="fit wrap q-ma-xs"
          color="amber"
          glossy
          stack
          size="sm"
          icon="upload"
          @click="openCheckDialog"
          data-cy="check-btn"
          label="upload"
        />
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
import ImageViewer from '../buttons/ImageViewer.vue';
import {
  bluetoothSerial,
  onDisconnect,
  btListenser,
} from 'src/utils/bluetoothUtils';
import isEqualCodes from 'src/utils/compareCode';
import { TaskStatus } from 'src/types/Status';
import MenuDialog from '../../components/MenuDialog.vue';
import executeCodes from '../../utils/executeCodes';
import { settings_easy } from '../games/levels-easy';
import { settings_hard } from '../games/levels-hard';
import { GeneratorCode } from '../../types/robotParts';
import { startStudioOnboarding } from '../../onboarding/studioOnboarding';
import '../../css/style.css';
import 'intro.js/introjs.css';
import {
  addLocalActivityProgress,
  initializeLocalActivityProgress,
  solveAttemptScore,
  solveDurationScore,
} from '../../utils/activityProgress';
import { ActivityProgress, Difficulty } from '../../types/Progress';

import CoinsDialog from '../CoinsDialog.vue';
import '../../css/style.css';
import 'intro.js/introjs.css';
import errorSnd from '../../assets/sounds/errorSnd.mp3';
import success from '../../assets/sounds/success-notify.mp3';
import victory from '../../assets/sounds/victory-effect.mp3';
import { soundEffect } from '../../utils/SoundUtils';
const $q = useQuasar();
const router = useRouter();
const routeParam = router.currentRoute.value.params.param as string;
const isDialogOpen = ref(false);
const splitParams = routeParam.split('_');
const levelNum = parseInt(splitParams[1]); // to be use for check program
const settingNum = parseInt(splitParams[0]);
const ageGroup = splitParams[2];
const showReward = ref(false);
const showMenuActivity = ref(false);
const taskStatus = ref<TaskStatus>('none');
const progress = ref($q.notify({ group: false }));
const workspace = ref<Blockly.Workspace>();
const blocklyContainer = ref<string | Element>('');
const coinsStorage = ref($q.localStorage.getItem('coin_storage'));

const openCheckDialog = () => {
  isDialogOpen.value = true;
};
const openCoinsDialog = () => {
  soundEffect(victory);
  showReward.value = true;
};

const closeCheckDialog = () => {
  isDialogOpen.value = false;
};

const openMenuDialog = () => {
  soundEffect();
  showMenuActivity.value = true;
};

const notifyError = (e: string) => {
  soundEffect(errorSnd);
  $q.notify({
    type: 'negative',
    message: e,
  });
};

const generator = (): string => {
  if (workspace.value) {
    const value = javascriptGenerator.workspaceToCode(workspace.value);
    return value;
  }
  throw new Error('Error at blocks generator');
};
const undo = () => {
  soundEffect();
  if (workspace.value) {
    workspace.value.undo(false);
  }
};

const levels =
  ageGroup === 'easy'
    ? settings_easy[settingNum].levels
    : settings_hard[settingNum].levels;

const toolbox =
  ageGroup === 'easy'
    ? Toolbox.toolbox_easy[settingNum]
    : Toolbox.toolbox_hard[settingNum];

const correctCodes = levels[levelNum - 1].correctCode;

onMounted(() => {
  if (settingNum == 0 && levelNum == 1) {
    startStudioOnboarding();
    initializeLocalActivityProgress();
  }

  // const dataToUpdate: ActivityProgress = {
  //   activity: {
  //     setting: settingNum,
  //     id: levelNum,
  //     difficulty: ageGroup as Difficulty,
  //   },
  //   duration: 50,
  //   attempt: 1,
  //   decomposition: 100,
  //   pattern: 100,
  //   completed: true,
  // };

  // addLocalActivityProgress(dataToUpdate);

  // console.log(localStorage.getItem('localData'));

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
    soundEffect(success);
    $q.notify({
      type: 'positive',
      position: 'top-right',
      message: 'Uploading done!',
      timeout: 1000,
    });
    setTimeout(() => {
      openCoinsDialog;
    }, 2000);
    //code for UI COINS
    taskStatus.value = 'none';
    // To-verify: when the execution is successful, it will unlock the next level
    levels[levelNum].completed = true;

    const dataToUpdate: ActivityProgress = {
      activity: {
        setting: settingNum,
        id: levelNum,
        difficulty: ageGroup as Difficulty,
      },
      duration: solveDurationScore(300),
      attempt: solveAttemptScore(1),
      decomposition: 100,
      pattern: 100,
      completed: true,
    };

    addLocalActivityProgress(dataToUpdate);
    if (levels[levelNum]?.completed != true) {
      $q.localStorage.set(
        'coin_storage',
        Number(coinsStorage.value) + levels[levelNum - 1].reward
      );
    }
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
@font-face {
  font-family: hitchcut;
  src: url('/fonts/Hitchcut-Regular.woff');
}

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
.my-card {
  width: 75%;
  max-width: 200px;
  position: relative;
}

.hitchcut {
  font-family: 'hitchcut';
  font-size: small;
}
</style>
../games/levels-easy ../games/levels-hard
