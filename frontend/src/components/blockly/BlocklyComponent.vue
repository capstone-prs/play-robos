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
          <MenuButton />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <q-dialog seamless position="right" v-model="showDialog">
            <q-card class="q-pa-sm" align="center" style="width: 100px">
              <img src="/prs-gif.gif" style="size: 20px" />
            </q-card>
          </q-dialog>
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
import { bluetoothWrite, bluetoothSerial } from 'src/utils/bluetoothUtils';

const route = useRouter().currentRoute;
const routeParam = route.value.params.param as string;
const isDialogOpen = ref(false);
const showDialog = ref(true);
const splitParams = routeParam.split('/');
const levelNum = parseInt(splitParams[1]); // to be use for check program
const settingNum = parseInt(splitParams[0]);
const ageGroup = splitParams[2];
const correctCode = splitParams[1]; // to-fix: handle as object or sting to object?
const isProgramCorrect = ref(false);

const checkProgram = () => {
  correctCode === generator()
    ? (isProgramCorrect.value = true)
    : (isProgramCorrect.value = false);
};

const openUploadDialog = () => {
  checkProgram();
  isDialogOpen.value = true;
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
  bluetoothWrite(bluetoothSerial, '000000');
  const codes = generator()
    .trimEnd()
    .split('\n')
    .map((code) => JSON.parse(code));
  console.log('codes:', codes);

  for (var code of codes) {
    console.log('execute code:', code, { ...robotState.value, ...code });
    robotState.value = { ...robotState.value, ...code };
    console.log('current State', robotState.value);

    const { eyes, head, leftArm, rightArm, leftLeg, rightLeg } =
      robotState.value;
    bluetoothWrite(
      bluetoothSerial,
      eyes + head + leftArm + rightArm + leftLeg + rightLeg
    );
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
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
