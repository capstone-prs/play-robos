<template>
  <div>
    <q-card flat style="height: 200px; width: 180px;" class="transparent q-mt-lg">
      <img :src="url">

      <q-card-actions class="q-mt-md" align="center">
        <ActionButton text-label="Play" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import ActionButton from './buttons/ActionButton.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardComponent',
  props: {
    imageUrl: String,
  },
  components: { ActionButton },
  setup(props) {
    return {
      url: props.imageUrl,
    }
  }
})
</script>
