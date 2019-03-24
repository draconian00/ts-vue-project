import _Swiper, { SwiperOptions } from 'swiper';
import SlideComponent from './slide.vue';
import SwiperComponent from './swiper.vue';

import Vue from 'vue';

const Swiper = _Swiper;
const swiper = SwiperComponent;
const swiperSlide = SlideComponent;
const install = (vue: Vue, globalOptions?: SwiperOptions) => {
  // if (globalOptions) {
  //   SwiperComponent.props.globalOptions.default = () => globalOptions;
  // }
  Vue.component(SwiperComponent.name, SwiperComponent);
  Vue.component(SlideComponent.name, SlideComponent);
}
const VueTsSwiper = { Swiper, swiper, swiperSlide, install };

export default VueTsSwiper;
export { Swiper, swiper, swiperSlide, install };
