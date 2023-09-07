<template>
  <div id="app">
    <BlocklyComponent
      id="blockly2"
      :options="options"
      ref="blockly"
    ></BlocklyComponent>
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue';
import BlocklyComponent from '../components/blockly/BlocklyComponent.vue';

export default defineComponent({
  name: 'StudioPage',
  setup() {
    const blockly = ref();
    const options = {
      media: 'media/',
      grid: {
        spacing: 25,
        length: 3,
        colour: '#ccc',
        snap: true,
      },
    };
    return {
      blockly,
      options,
    };
  },
  components: { BlocklyComponent },
});
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html,
body {
  margin: 0;
}

#blockly2 {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
</style>
