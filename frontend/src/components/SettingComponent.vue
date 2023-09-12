<template>
  <div>
    <q-carousel swipeable animated v-model="slide" infinite class="transparent">
      <q-carousel-slide :name="1" class="column no-wrap">
        <div
          class="row items-center q-gutter-md q-col-gutter no-wrap"
          align="center"
        >
          <CardComponentVue
            v-for="(imageUrl, index) in props.imageUrls"
            :key="index"
            :imageUrl="imageUrl"
            :class="{ 'active-card': index === slide }"
            class="col-4"
            style="width: 200px"
          />
        </div>
        <q-card-actions class="q-mt-md" align="center">
          <ActionButtonVue text-label="Play" />
        </q-card-actions>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup lang="ts">
import CardComponentVue from './CardComponent.vue';
import ActionButtonVue from './buttons/ActionButton.vue';
import { ref } from 'vue';

const props = defineProps<{
  imageUrls: Array<string>;
}>();

const slide = ref(1);
</script>

<style>
.active-card {
  transform: scale(1.2);
  transition: transform 0.3s;
}
</style>
