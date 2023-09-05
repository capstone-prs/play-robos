<template>
  <div>
      <img src="/level-board.svg" style="width: 80; height: 80px;" >
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LevelBoard',
  props: {
    levelNumber: String,
    levelGoal: String,
    levelReward: String
  },
  setup(props) {
    return {
      levNumber: props.levelNumber,
      levGoal: props.levelGoal,
      levRew: props.levelReward
    }
  }
})
</script>

<style>
@font-face {
  font-family: futura;
  src: url('/fonts/FuturaLT.woff');
}

.futura {
  font-family: 'futura';
  color: yellow;
}

.board {
  z-index: 1;
  position: relative;
}

.details {
  z-index: 2;
}

</style>
