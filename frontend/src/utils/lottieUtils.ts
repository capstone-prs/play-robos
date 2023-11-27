import lottie from 'lottie-web';
import { Ref } from 'vue';

export const lottieBackgroundLoader = (src: any, container: Ref<any>) => {
  lottie.loadAnimation({
    container: container.value,
    loop: true,
    autoplay: true,
    renderer: 'svg',
    animationData: src,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  });
};
