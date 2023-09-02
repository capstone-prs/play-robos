<template>
  <div ref="blocklyContainer"></div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import Blockly from 'blockly';
import './blocks/stocks';

export default defineComponent({
  name: 'BlocklyComponent',
  setup() {
    const blocklyContainer = ref<string | Element>('');

    onMounted(() => {
      Blockly.inject(blocklyContainer.value, {
        // can be tried to export as another file or add logic to the toolbox to render needed toolbox per level
        toolbox: `<xml>
            <block width="200" type="wink"></block>
            <block type="blink"></block>
            <block type="eye_roll"></block>
        </xml>`,
        trashcan: true,
        grid:
        {
          spacing: 20,
          length: 3,
          colour: '#ccc',
          snap: true
        },
         zoom: {
          // controls: true,
          // wheel: true,
          startScale: 1.5, // Adjust to your desired scale factor
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2,
        },
        // theme: {
        //   name: 'custom',
        //   'blockStyles': {
        //     'list_blocks': {
        //       'colourPrimary': '#4a148c',
        //       'colourSecondary': '#AD7BE9',
        //       'colourTertiary': '#CDB6E9'
        //     }
        //   },
        //   'categoryStyles': {
        //     'list_category': {
        //       'colour': '#4a148c'
        //     }
        //   },
        //   'componentStyles': {
        //     'workspaceBackgroundColour': '#1e1e1e'
        //   },
        // }
      });
    });

    return {
      blocklyContainer,
    };
  },
});
</script>

<style>
.blocklyToolboxCategory {
  background-color: rgb(210, 255, 255);
}
</style>

