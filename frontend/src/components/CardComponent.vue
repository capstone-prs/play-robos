<template>
  <div>
    <q-card
      flat
      style="height: 170px; width: 150px"
      class="transparent q-mt-lg"
    >
      <img :src="url" />
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardComponent',
  props: {
    imageUrl: String,
  },
  components: {},
  setup(props) {
    return {
      url: props.imageUrl,
    };
  },
});
</script>
