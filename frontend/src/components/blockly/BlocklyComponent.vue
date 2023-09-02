<template>
  <div ref="blocklyContainer"></div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import Blockly from 'blockly';
import './blocks/stocks'
import { level1 } from './toolbox/toolbox'

export default defineComponent({
  name: 'BlocklyComponent',
  setup() {
    const blocklyContainer = ref<string | Element>('');

    onMounted(() => {
      Blockly.inject(blocklyContainer.value, {
        // refer to toolbox.js file, we can define more levels from there,
        // future handling may be passing the level number as props to this component
        toolbox: level1,
        trashcan: true,
        grid:
        {
          spacing: 20,
          length: 3,
          colour: '#ccc',
          snap: true
        },
         zoom: {
          startScale: 1.5,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2,
        },
        theme: {
          name: 'custom',
          'componentStyles': {
            'workspaceBackgroundColour': '#FFFFFF',
            'flyoutBackgroundColour': '#D0D0D0',
            'flyoutOpacity': 0.7,
          },
        }
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

