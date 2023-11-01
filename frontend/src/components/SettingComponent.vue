<template>
  <div>
    <q-carousel swipeable arrows animated v-model="slide" class="transparent">
      <q-carousel-slide
        v-for="(imageUrl, index) in props.imageUrls"
        :key="index"
        :name="index"
        class="column no-wrap"
      >
        <div
          class="row items-center q-gutter-md q-col-gutter no-wrap"
          align="center"
        >
          <CardComponentVue
            :imageUrl="imageUrl"
            :setting-name="$props.settingNames[index]"
            class="col-4"
            style="width: 600px"
          />
        </div>

        <q-card-actions class="q-mt-md" align="center">
          <ActionButtonVue
            id="enter-setting-btn"
            text-label="Enter"
            @click="navigateToActivities"
          />
        </q-card-actions>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup lang="ts">
import CardComponentVue from './CardComponent.vue';
import ActionButtonVue from './buttons/ActionButton.vue';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useQuasar } from 'quasar';
import introJS from 'intro.js';
import 'intro.js/introjs.css';
import settingConfig from '../onboarding/intro.json';
import { Options } from 'intro.js/src/option';

const $q = useQuasar();
const slide = ref(1);
const router = useRouter();
const intro = introJS();

const startOnboarding = () => {
  intro.setOptions(settingConfig as Partial<Options>);
  intro.goToStep(8);
};

onMounted(() => {
  if (sessionStorage.getItem('hasCompletedOnboarding') == 'true') {
    startOnboarding();
  }
});

const props = defineProps<{
  imageUrls: Array<string>;
  ageGroup: string;
  settingNames: Array<string>;
}>();

const showLoading = () => {
  $q.loading.show({
    spinnerColor: 'white',
    backgroundColor: 'black',
    message: 'Loading...',
  });

  setTimeout(() => {
    $q.loading.hide();
  }, 2000);
};

// send age group and active setting via route parameter
const navigateToActivities = () => {
  showLoading();
  return router.push({
    name: 'activity',
    params: { param: (props.ageGroup + ' ' + slide.value) as string },
  });
};
</script>

<style>
.active-card {
  transform: scale(1.2);
  transition: transform 0.3s;
}

.custom-carousel {
  position: relative;
}

.custom-arrows-end {
  position: absolute;
  top: 0; /* Adjust as needed */
  left: 0; /* Adjust as needed for left placement */
  right: 0; /* Adjust as needed for right placement */
}

.custom-arrows-below {
  display: flex;
  justify-content: center; /* Center horizontally */
  margin-top: 10px; /* Adjust as needed */
}
</style>
