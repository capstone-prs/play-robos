<template>
  <div>
    <q-card flat style="height: 320px; width: 250px;" class="transparent">
      <img :src="url">

      <q-card-actions align="center">
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
