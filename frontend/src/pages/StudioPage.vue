<template>
  <div id="app">
    <BlocklyComponent
      id="blockly2"
      :options="options"
      ref="foo"
    ></BlocklyComponent>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BlocklyComponent from '../components/blockly/BlocklyComponent.vue';

const foo = ref();
const options = {
  media: 'media/',
  grid: {
    spacing: 25,
    length: 3,
    colour: '#ccc',
    snap: true,
  },
};
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
