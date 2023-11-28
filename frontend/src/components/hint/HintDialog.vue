<template>
  <q-dialog v-model="isHintCardOpen">
    <q-card style="width: 65%; height: 90%">
      <q-card-section class="row items-center card-title">
        <div class="text-h4 futura">Hint</div>

        <q-space />

        <q-btn
          icon="close"
          size="md"
          flat
          v-close-popup
          data-test-id="close-btn"
        />
      </q-card-section>
      <div v-if="mistakeIndex === undefined">CORRECT</div>
      <div v-else>
        <q-card-section
          v-for="(pic, i) in level.gif.slice(0, mistakeIndex + 1)"
          :key="i"
        >
          <HintCardSection
            :is-mistake-block="i === mistakeIndex"
            :hint="level.hint[i]"
            :block-number="i + 1"
            :hint-icon="'img:' + pic"
          ></HintCardSection>
        </q-card-section>

        <q-card-section v-if="mistakeIndex >= correctCode.length">
          <HintCardSection
            :is-mistake-block="true"
            hint="END"
            :block-number="correctCode.length + 1"
            hint-icon="cancel"
          ></HintCardSection>
        </q-card-section>
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

import { GeneratorCode } from 'src/types/robotParts';
import HintCardSection from './HintCardSection.vue';
import { Level } from 'src/types/Levels';

const props = defineProps<{
  level: Level;
  userCode: GeneratorCode[];
}>();

const isHintCardOpen = ref(false);

const { correctCode } = props.level;

const mistakeIndex = computed(() => {
  if (props.userCode.length <= 0) {
    return 0;
  }
  const index = props.userCode.findIndex((code, i) => {
    if (i < correctCode.length) {
      return JSON.stringify(correctCode[i]) !== JSON.stringify(code);
    }
    return true;
  });

  if (index === -1) {
    return correctCode.length === props.userCode.length
      ? undefined
      : props.userCode.length;
  }
  return index;
});
</script>

<style scoped>
.overlay-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* Semi-transparent black overlay */
  z-index: 999;
  /* Make sure the overlay is on top of everything else */
}
</style>
