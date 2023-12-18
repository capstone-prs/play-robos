import lottie from 'lottie-web';
import { Ref } from 'vue';

export const lottieBackgroundLoader = (src: object, container: Ref) => {
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
