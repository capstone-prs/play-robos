<template>
  <div class="board">
    <img src="/level-board.svg" style="width: 90; height: 90px" />

    <div class="level absolute-center">Level: {{ levNumber }}</div>
    <div class="goal absolute-center">Goal: {{ levGoal }}</div>
    <div class="reward absolute-center">Reward: {{ levRew }}</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LevelBoard',
  props: {
    levelNumber: String,
    levelGoal: String,
    levelReward: String,
  },
  setup(props) {
    return {
      levNumber: props.levelNumber,
      levGoal: props.levelGoal,
      levRew: props.levelReward,
    };
  },
});
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
  font-family: 'futura';
  text-shadow: 1px 1px #1a1a1a;
}

.level {
  z-index: 2;
  position: absolute;
  top: 30%;
  padding-top: 3px;
  font-size: 15px;
}

.goal {
  z-index: 2;
  position: absolute;
  top: 55%;
  padding-top: 2px;
  font-size: 13px;
}

.reward {
  z-index: 2;
  position: absolute;
  padding-top: 2px;
  top: 75%;
  font-size: 13px;
}
</style>
