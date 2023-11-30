<template>
  <div class="row items-start">
    <div class="col">
      <div class="workspace-container" id="blockly">
        <div class="overlay-container">
          <CheckDialog
            v-model="isDialogOpen.check"
            :correct="isEqualCodes(correctCodes, blocklyGenerator())"
            :onCorrect="
              () => {
                setDialog('menu', false);
                write();
              }
            "
          />
          <HintDialog
            v-model="isDialogOpen.hint"
            :user-code="blocklyGenerator()"
            :level="thisLevel"
          />
          <MenuDialog v-model="isDialogOpen.menu" />
          <CoinsDialog
            v-model="isDialogOpen.coins"
            :coins="thisLevel.reward"
            :setting-number="settingNum"
            :level-number="levelNum"
            :difficulty="ageGroup"
            :max-level="
              ageGroup === 'easy'
                ? settings_easy[settingNum].levels.length - 1
                : settings_hard[settingNum].levels.length - 1
            "
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
          <StudioSideBarButton
            icon="help"
            label="help"
            color="purple"
            @click="startStudioOnboarding"
          />
        </div>
        <div class="col q-ma-xs">
          <StudioSideBarButton
            icon="menu"
            label="menu"
            color="teal"
            id="menu-btn"
            @click="() => setDialog('menu')"
          />
        </div>
      </div>
      <div class="row">
        <div class="col q-ma-xs">
          <StudioSideBarButton
            color="pink"
            icon="undo"
            label="undo"
            @click="undo"
          />
        </div>
        <div class="col q-ma-xs">
          <StudioSideBarButton
            color="cyan"
            icon="emoji_objects"
            label="hint"
            @click="() => setDialog('hint')"
          />
        </div>
      </div>
      <div class="row q-ma-sm">
        <div class="col">
          <div class="row justify-center q-mb-xs">
            <q-badge class="hitchcut">Level: {{ levelNum }}</q-badge>
          </div>
          <div class="row justify-center" style="overflow-x: auto">
            <div class="hitchcut q-px-xs text-primary outlined-badge">
              {{ thisLevel.goalTitle }}
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-center q-my-md">
        <StopwatchComponent :initial-time="initialTime" ref="stopwatch" />
      </div>
      <div class="row justify-center q-ma-md">
        <ImageViewer :pics="thisLevel.gif" id="goal" />
      </div>

      <div class="row q-mt-md q-pa-xs">
        <StudioSideBarButton
          color="amber"
          icon="upload"
          @click="() => setDialog('check')"
          data-cy="check-btn"
          label="upload"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref, onMounted, computed, watch, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { inject, Workspace } from 'blockly';
import * as Toolbox from './toolbox/typetoolbox';
import './blocks/stocks';
import './blocks/generator';
// Components
import CheckDialog from '../CheckDialog.vue';
import ImageViewer from '../buttons/ImageViewer.vue';
import HintDialog from '../hint/HintDialog.vue';
import MenuDialog from '../../components/MenuDialog.vue';
import CoinsDialog from '../CoinsDialog.vue';
import StudioSideBarButton from '../buttons/StudioSideBarButton.vue';
import StopwatchComponent from '../StopwatchComponent.vue';
// Utils
import {
  bluetoothSerial,
  onDisconnect,
  btListenser,
} from 'src/utils/bluetoothUtils';
import isEqualCodes from 'src/utils/compareCode';
import executeCodes from '../../utils/executeCodes';
import {
  addLocalActivityProgress,
  initializeLocalActivityProgress,
  solveAttemptScore,
  solveDurationScore,
} from '../../utils/activityProgress';
import { startStudioOnboarding } from '../../onboarding/studioOnboarding';
import { settings_easy } from '../games/levels-easy';
import { settings_hard } from '../games/levels-hard';
import generator from '../../utils/blockly';
// Types
import { ActivityProgress, Difficulty, LocalData } from '../../types/Progress';
import { TaskStatus } from '../../types/Status';
import { Dialog } from '../../types/BlocklyDialogs';

// Sounds
import { soundEffect } from '../../utils/SoundUtils';
import errorSnd from '../../assets/sounds/errorSnd.mp3';
import success from '../../assets/sounds/success-notify.mp3';
import victory from '../../assets/sounds/victory-effect.mp3';
import '../../css/style.css';
import 'intro.js/introjs.css';

const $q = useQuasar();
const router = useRouter();

const isDialogOpen = ref({
  check: false,
  hint: false,
  menu: false,
  coins: false,
});

const taskStatus = ref<TaskStatus>('none');
const disconnectListener = ref<ReturnType<typeof onDisconnect>>();

const workspace = ref<Workspace>();
const blocklyContainer = ref<string | Element>('');
const stopwatch = ref<InstanceType<typeof StopwatchComponent> | null>(null);
const initialTime = ref(0); // TODO: To be stored in user progress NOTE that only updates when timer is stopped @jenny

const coinsStorage = computed(
  () => $q.localStorage.getItem('coin_storage') || 0
);

const routeParam = router.currentRoute.value.params.param as string;
const splitParams = routeParam.split('_');

const levelNum = parseInt(splitParams[1]); // to be use for check program
const settingNum = parseInt(splitParams[0]);
const ageGroup = splitParams[2];

const stopTime = () => {
  if (stopwatch.value) {
    initialTime.value = stopwatch.value.totalTime;

    stopwatch.value.stop();
  }
};

const startTime = () => stopwatch.value?.start();

watch(isDialogOpen.value, () => {
  const { menu, check } = isDialogOpen.value;

  if (menu || check) {
    stopTime();
  } else if (!stopwatch.value?.isStarting) {
    startTime();
  }
});

const setDialog = (key: Dialog, open = true) => {
  soundEffect();

  isDialogOpen.value[key] = open;
};

const notifyError = (e: string) => {
  soundEffect(errorSnd);
  $q.notify({
    type: 'negative',
    message: e,
  });
};

const blocklyGenerator = () => generator(workspace.value);

const undo = () => {
  soundEffect();
  if (workspace.value) {
    workspace.value.undo(false);
  }
};

const completedLevels = () => {
  const storedDataString = localStorage.getItem('localData');
  const storedUserData: LocalData = storedDataString
    ? JSON.parse(storedDataString)
    : null;

  return storedUserData.activityProgress;
};

const levels =
  ageGroup === 'easy'
    ? settings_easy[settingNum].levels
    : settings_hard[settingNum].levels;

const toolbox =
  ageGroup === 'easy'
    ? Toolbox.toolbox_easy[settingNum]
    : Toolbox.toolbox_hard[settingNum];

const thisLevel = levels[levelNum - 1];
const correctCodes = thisLevel.correctCode;

const coinsComputed = () => {
  const dataToUpdate: ActivityProgress = {
    activity: {
      setting: settingNum,
      id: levelNum,
      difficulty: ageGroup as Difficulty,
    },
    duration: solveDurationScore(stopwatch.value?.totalTime ?? 0),
    attempt: solveAttemptScore(1),
    decomposition: 100,
    pattern: 100,
    completed: true,
  };

  soundEffect(victory); //FIXME: doubled sound
  setDialog('coins');
  const condition = completedLevels().find(
    (level) =>
      level.activity.difficulty === ageGroup &&
      level.activity.setting === settingNum &&
      level.activity.id === levelNum
  );
  console.log(condition);
  console.log(levelNum);
  if (condition == undefined) {
    addLocalActivityProgress(dataToUpdate);

    localStorage.setItem(
      'coin_storage',
      (Number(coinsStorage.value) + thisLevel.reward).toString()
    );
  }
};

onMounted(() => {
  if (settingNum == 0 && levelNum == 1) {
    startStudioOnboarding();
    initializeLocalActivityProgress();
  }

  workspace.value = inject(blocklyContainer.value, {
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

  // workspace.value.addChangeListener(blocklyGenerator); // FIXME: DEAD CODE?
  // progress.value(); // FIXME: DEAD CODE?
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

  disconnectListener.value = onDisconnect(bluetoothSerial, () => {
    taskStatus.value = 'error';
    notifyError('Bluetooth Device is Disconnected');
  });
});

onUnmounted(() => {
  clearInterval(disconnectListener.value);
});

const startProgressNotify = () => {
  startLoadingUpload();
  taskStatus.value = 'started';
};

const endProgressNotify = () => {
  hideLoadingUpload();
  $q.loading.hide();

  if (taskStatus.value === 'success') {
    coinsComputed();
    soundEffect(success);
    $q.notify({
      type: 'positive',
      message: 'Uploading done!',
      timeout: 1000,
    });

    //FIXME: doubled sound
    //code for UI COINS
    taskStatus.value = 'none';
    // To-verify: when the execution is successful, it will unlock the next level
  } else if (taskStatus.value === 'error' || taskStatus.value === 'started') {
    $q.notify({
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
    blocklyGenerator(),
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

.outlined-badge {
  border-style: solid;
  border-radius: 5px;
  border-color: #0273d4;
  border-width: 1px;
  overflow: auto;
  white-space: nowrap;
}
</style>
