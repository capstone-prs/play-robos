<template>
  <div class="horizontal-scroll-container">
    <div class="centering-wrapper">
      <q-virtual-scroll
        :items="imageUrls"
        virtual-scroll-horizontal
        v-slot="{ item, index }"
      >
        <CardComponentVue
          :active="index === activeSetting ? true : false"
          :imageUrl="item"
          :setting-name="$props.settingNames[index]"
          :key="index"
          :accessible="$props.accessibility[index]"
          class="q-ma-lg"
          :class="index === activeSetting ? 'active-setting' : ''"
          @click="accessibility[index] ? navigateToActivities(index) : ''"
        />
      </q-virtual-scroll>
    </div>
  </div>

  <q-card-actions align="center">
    <ActionButtonVue
      id="enter-setting-btn"
      text-label="ENTER"
      class="absolute-center"
      style="margin-top: 130px"
      @click="navigateToActivities(activeSetting)"
    />
  </q-card-actions>
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
const router = useRouter();
const intro = introJS();

// TODO: TO change when progress is accessible
const activeSetting = ref(0);
const startOnboarding = () => {
  intro.setOptions(settingConfig as Partial<Options>);
  intro.goToStep(8);
};

onMounted(() => {
  if (sessionStorage.getItem('hasCompletedOnboarding') == 'true') {
    startOnboarding();
  }

  const activeLocalSetting = localStorage.getItem('activeSetting');
  const storedActiveLocalSetting = activeLocalSetting
    ? parseInt(activeLocalSetting)
    : 0;

  activeSetting.value = storedActiveLocalSetting;
});

const props = defineProps<{
  imageUrls: Array<string>;
  ageGroup: string;
  settingNames: Array<string>;
  accessibility: Array<boolean>;
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
const navigateToActivities = (settingNum: number) => {
  showLoading();
  return router.push({
    name: 'activity',
    params: { param: (props.ageGroup + ' ' + settingNum) as string },
  });
};
</script>

<style>
.q-scroll-area::-webkit-scrollbar {
  width: 0 !important; /* Width of the scrollbar */
}
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

.horizontal-scroll-container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
}

.centering-wrapper {
  max-width: 100%; /* Adjust the maximum width as needed */
}

.active-setting {
  animation: SettingLabelAnimation 3s ease 0s infinite alternate forwards;
}

@keyframes SettingLabelAnimation {
  0% {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
}
</style>
