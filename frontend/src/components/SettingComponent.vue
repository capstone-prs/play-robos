<template>
  <div>
    <q-carousel
      swipeable
      animated
      navigation
      v-model="slide"
      infinite
      class="transparent"
    >
      <q-carousel-slide :name="1">
        <CardComponent imageUrl="/setting1.svg" />
      </q-carousel-slide>

      <q-carousel-slide :name="3">
        <CardComponent imageUrl="/setting3.svg" />
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import CardComponent from './CardComponent.vue';

export default defineComponent({
  name: 'SettingComponent',
  props: {
    imageUrl: String,
  },
  setup(props) {
    return {
      image: props.imageUrl,
      slide: ref(1),
    };
  },
  components: { CardComponent },
});
</script>
