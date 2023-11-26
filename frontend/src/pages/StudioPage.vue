<template>
  <div id="app">
    <BlocklyComponent
      id="blockly2"
      :options="options"
      ref="blockly"
    ></BlocklyComponent>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BlocklyComponent from '../components/blockly/BlocklyComponent.vue';
import {
  backgroundMusicStudio,
  backgroundMusicHome
} from '../../src/utils/SoundUtils';

const blockly = ref();
const options = {
  media: 'media/',
  grid: {
    spacing: 25,
    length: 3,
    colour: '#ccc',
    snap: true
  }
};
if (backgroundMusicHome.playing() == true) {
  backgroundMusicHome.stop();
  backgroundMusicStudio.play();
}
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
