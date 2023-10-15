<template>
  <div class="workspace-container">
    <div class="overlay-container">
      <div class="row">
        <div class="col-2 buttons" data-testid="help-btn">
          <ActionButton text-label="U" data-testid="check-btn" @click="write" />
        </div>
        <div class="col-2 buttons" data-testid="help-btn" align="left">
          <UndoButton @click="undo" />
        </div>
        <div class="col-4 check">
          <ActionButton
            text-label="CHECK"
            data-testid="check-btn"
            @click="openUploadDialog"
          />
          <CheckDialog
            v-model="isDialogOpen"
            data-testid="check-dialog"
            :correct="isProgramCorrect"
          />
        </div>
        <div class="col-2 buttons" data-testid="help-btn">
          <HelpButton />
        </div>
        <div class="col-2 buttons" data-testid="menu-btn">
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
          style="position: absolute; right: 0%; top: 130%;" 
          rounded color="primary">
            class="futura"
            persistent
            size="16"
            glossy
            menu-self="top left"
            style="position: absolute; right: 0%; top: 130%"
            rounded
            color="primary"
          >
            <q-dialog seamless position="right" v-model="showDialog">
              <q-card class="q-pa-sm" 
              align="center"
                 style="width: 100px">
                <img :src="determineLevelsToDisplay[levelNum-1].gif" style="size: 20px" />
              </q-card>
            </q-dialog>
          </q-btn-dropdown>
        </div>
      </div>
    </div>

    <div
      ref="blocklyContainer"
      class="blockly-container"
      data-testid="blockly-container"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref, onMounted, computed, Ref } from 'vue';
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
  bluetoothWrite,
  bluetoothSerial,
  bluetoothWriteStart,
  bluetoothWriteEnd,
  onDisconnect,
  btListenser,
} from 'src/utils/bluetoothUtils';
import { TaskStatus } from 'src/types/Status';
import MenuDialog from '../../components/MenuDialog.vue';
import * as Levels from '../../components/games/levelDetails';

const $q = useQuasar();
const route = useRouter().currentRoute;
const routeParam = route.value.params.param as string;
const isDialogOpen = ref(false);
const showDialog = ref(true);
const splitParams = routeParam.split(' ');
const levelNum = parseInt(splitParams[1]); // to be use for check program
const settingNum = parseInt(splitParams[0]);
const ageGroup = splitParams[2];
const correctCode = splitParams[1]; // to-fix: handle as object or sting to object?
const isProgramCorrect = ref(false);
const showMenuActivity = ref(false);

const router = useRouter();

const taskStatus = ref<TaskStatus>('none');

router.beforeEach(() => {
  taskStatus.value = 'exit';
  bluetoothSerial.unsubscribe();
});

const checkProgram = () => {
  correctCode === generator()
    ? (isProgramCorrect.value = true)
    : (isProgramCorrect.value = false);
};
const arrayOfGifs = [
  '/look.svg',
  '/prs-gif.gif',
  '/close-open.gif',
  '/wink-left-right.gif',
  '/blink.gif',
  '/head-left-right.gif',
];
const gifForLevel = arrayOfGifs[levelNum];

const showStatus = (status: Ref<TaskStatus>) =>
  new Promise<void>((resolve) => {
    const notif = $q.notify({
      group: false, // required to be updatable
      timeout: 0,
      spinner: true,
      position: 'bottom-right',
      message: 'Uploading file...',
    });

    const interval = setInterval(() => {
      if (status.value === 'success') {
        notif({
          type: 'positive',
          spinner: false, // we reset the spinner setting so the icon can be displayed
          message: 'Uploading done!',
          timeout: 1000, // we will timeout it in 2.5s
        });
        clearInterval(interval);
        resolve();
      } else if (status.value === 'error') {
        notif({
          type: 'negative',
          spinner: false, // we reset the spinner setting so the icon can be displayed
          message: 'Upload Failed',
          timeout: 1000, // we will timeout it in 2.5s
        });
        clearInterval(interval);
        resolve();
      } else if (status.value === 'exit') {
        notif();
        clearInterval(interval);
        resolve();
      }
    }, 500);
  });

const openUploadDialog = () => {
  checkProgram();
  isDialogOpen.value = true;
};

const openMenuDialog = () => {
  showMenuActivity.value = true;
};

const workspace = ref<Blockly.Workspace>();
const generator = (): string => {
  if (workspace.value) {
    const value = javascriptGenerator.workspaceToCode(workspace.value);
    console.log(value);
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

const blocklyContainer = ref<string | Element>('');

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

  btListenser(
    bluetoothSerial,
    (data: string) => {
      if (data === '(200)\n') {
        taskStatus.value = 'success';
      } else if (data === '(400)\n') {
        taskStatus.value = 'error';
      }
      console.log('reading', data, taskStatus.value, JSON.stringify(data));
    },
    (e) =>
      $q.notify({
        type: 'negative',
        message: e,
      })
  );

  onDisconnect(bluetoothSerial, () => {
    taskStatus.value = 'error';
    $q.notify({
      type: 'negative',
      message: 'Bluetooth Device is Disconnected',
    });
  });
});

const robotState = ref({
  eyes: '0',
  head: '0',
  leftArm: '0',
  rightArm: '0',
  leftLeg: '0',
  rightLeg: '0',
});

const write = async () => {
  robotState.value = {
    eyes: '0',
    head: '0',
    leftArm: '0',
    rightArm: '0',
    leftLeg: '0',
    rightLeg: '0',
  };

  await new Promise((resolve, reject) =>
    bluetoothWriteStart(bluetoothSerial)
      .then(() => {
        taskStatus.value = 'none';
        showStatus(taskStatus);
      })
      .then(() => setTimeout(resolve, 1000))
      .catch(reject)
  ).catch((e) => $q.notify({ type: 'negative', message: e }));

  const codes = generator()
    .trimEnd()
    .split('\n')
    .map((code) => JSON.parse(code));

  for (var code of codes) {
    console.log('execute code:', code, { ...robotState.value, ...code }); //DEBUG
    robotState.value = { ...robotState.value, ...code };

    const { eyes, head, leftArm, rightArm, leftLeg, rightLeg } =
      robotState.value;

    bluetoothWrite(
      bluetoothSerial,
      eyes + head + leftArm + rightArm + leftLeg + rightLeg
    ).catch((e) => $q.notify({ type: 'negative', message: e }));

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  await bluetoothWriteEnd(bluetoothSerial);
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
