<template>
  <div>
    <q-carousel swipeable animated v-model="slide" infinite class="transparent">
      <q-carousel-slide :name="1" class="column no-wrap">
        <div
          class="row items-center q-gutter-md q-col-gutter no-wrap"
          align="center"
        >
          <CardComponent
            v-for="(imageUrl, index) in imageUrls"
            :key="index"
            :imageUrl="imageUrl"
            :class="{ 'active-card': index === slide }"
            class="col-4"
            style="width: 200px"
          />
        </div>
        <q-card-actions class="q-mt-md" align="center">
          <ActionButton text-label="Play" />
        </q-card-actions>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import CardComponent from './CardComponent.vue';
import ActionButton from './buttons/ActionButton.vue';

export default defineComponent({
  name: 'SettingComponent',
  props: {
    imageUrl: String,
  },
  setup() {
    // to change when card component is fixed to handle touchscreen swipe
    const imageUrls = ['/setting1.svg', '/setting3.svg', '/setting1.svg'];
    const slide = ref(1);

    return {
      imageUrls,
      slide,
    };
  },
  components: { CardComponent, ActionButton },
});
</script>

<style>
.active-card {
  transform: scale(1.2);
  transition: transform 0.3s;
}
</style>
