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
          :accessible="index <= latestAccessibleSetting ? true : false"
          class="q-ma-lg"
          :class="index === activeSetting ? 'active-setting' : ''"
          @click="
            (index <= latestAccessibleSetting ? true : false)
              ? navigateToActivities(index)
              : ''
          "
        />
        {{ determineSettingIndication(index) }}
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

const props = defineProps<{
  imageUrls: Array<string>;
  ageGroup: string;
  settingNames: Array<string>;
  accessibility: Array<boolean>;
}>();

const $q = useQuasar();
const router = useRouter();
const intro = introJS();
const currentSett = ref(0);

// TODO: TO change when progress is accessible
const activeSetting = ref(0);
const latestAccessibleSetting = ref(0);
const startOnboarding = () => {
  intro.setOptions(settingConfig as Partial<Options>);
  intro.goToStep(8);
};

onMounted(() => {
  if (sessionStorage.getItem('hasCompletedOnboarding') == 'true') {
    startOnboarding();
  }
});

const determineSettingIndication = (index: number) => {
  currentSett.value = index;
  if (props.ageGroup === 'easy') {
    const activeLocalSetting = localStorage.getItem('activeSetting');
    const storedActiveLocalSetting = activeLocalSetting
      ? parseInt(activeLocalSetting)
      : 0;
    storedActiveLocalSetting > index
      ? (activeSetting.value = storedActiveLocalSetting)
      : (activeSetting.value = activeSetting.value);
    // activeSetting.value = storedActiveLocalSetting;

    const latestLocalAccessibleSetting = localStorage.getItem('activeSetting');
    const storedLatestAccessibleSetting = latestLocalAccessibleSetting
      ? parseInt(latestLocalAccessibleSetting)
      : 0;

    storedLatestAccessibleSetting > index
      ? (latestAccessibleSetting.value = storedLatestAccessibleSetting)
      : (latestAccessibleSetting.value = latestAccessibleSetting.value);
    // latestAccessibleSetting.value = storedLatestAccessibleSetting;
  } else {
    const activeLocalSetting = localStorage.getItem('activeSettingHard');
    const storedActiveLocalSetting = activeLocalSetting
      ? parseInt(activeLocalSetting)
      : 0;
    storedActiveLocalSetting > index
      ? (activeSetting.value = storedActiveLocalSetting)
      : (activeSetting.value = activeSetting.value);
    // activeSetting.value = storedActiveLocalSetting;

    const latestLocalAccessibleSetting =
      localStorage.getItem('activeSettingHard');
    const storedLatestAccessibleSetting = latestLocalAccessibleSetting
      ? parseInt(latestLocalAccessibleSetting)
      : 0;

    storedLatestAccessibleSetting > index
      ? (latestAccessibleSetting.value = storedLatestAccessibleSetting)
      : (latestAccessibleSetting.value = latestAccessibleSetting.value);

    // latestAccessibleSetting.value = storedLatestAccessibleSetting;
  }
};

const showLoading = () => {
  $q.loading.show({
    spinnerColor: 'white',
    backgroundColor: 'black',
    message: 'Loading...',
  });

  setTimeout(() => {
    $q.loading.hide();
  }, 500);
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
  animation: SettingLabelAnimation 6s ease 0s infinite alternate forwards;
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
