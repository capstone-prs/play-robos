<template>
  <div>
    <q-btn round>
      <q-icon :name="icon" size="50px" @click="click" />
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { soundEffect } from '../../utils/SoundUtils';

defineProps({
    icon:{
      type:String,
      required:true
    }
})

// })
// const router = useRouter();
const click = () => {
  soundEffect();
  // return router.push('/home');
};
</script>
