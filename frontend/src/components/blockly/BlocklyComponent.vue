<template>
  <div class="workspace-container">
    <div class="overlay-container">
      <div class="row">
        <div class="col-4 buttons" data-testid="help-btn" @click="showCode">
          <ActionButton
            text-label="UNDO"
            color="pink-3"
            text-color="white"
            @click="undo"
          />
        </div>
        <div class="col-4 check">
          <ActionButton
            text-label="CHECK"
            data-testid="check-btn"
            @click="openUploadDialog"
          />
          <CheckDialog v-model="isDialogOpen" data-testid="check-dialog" />
        </div>

        <div class="col-2 buttons" data-testid="help-btn" @click="showCode">
          <HelpButton />
        </div>
        <div class="col-2 buttons" data-testid="menu-btn">
          <MenuButton />
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
import { ref, onMounted } from 'vue';
import * as Blockly from 'blockly';
import './blocks/stocks';
import './blocks/generator';

import { level1 } from './toolbox/toolbox';
import MenuButton from '../buttons/MenuButton.vue';
import HelpButton from '../buttons/HelpButton.vue';
import ActionButton from '../buttons/ActionButton.vue';
import CheckDialog from '../CheckDialog.vue';
import { javascriptGenerator } from 'blockly/javascript';

const isDialogOpen = ref(false);
const openUploadDialog = () => {
  isDialogOpen.value = true;
};

let generator: any = '';
let undo: any = '';

const blocklyContainer = ref<string | Element>('');
onMounted(() => {
  let workspace = Blockly.inject(blocklyContainer.value, {
    // refer to toolbox.js file, we can define more levels from there,
    // future handling may be passing the level number as props to this component
    toolbox: level1,
    trashcan: true,
    grid: {
      spacing: 20,
      length: 3,
      colour: '#ccc',
    },
    zoom: {
      startScale: 1.3,
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

  generator = () => {
    return javascriptGenerator.workspaceToCode(workspace as Blockly.Workspace);
  };
  workspace.addChangeListener(generator);
  undo = () => {
    workspace.undo(false);
  };
});

const showCode = () => {
  console.log(generator());
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
