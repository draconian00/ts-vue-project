import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';

import VueTsSwiper from '@/components/TsSwiper/index';
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false;

// Vue Global 속성 interface 등록
import Calendar from '@/components/Calendar/Index.vue';
import Day from '@/components/Calendar/Day.vue';
// swiper global property
import _Swiper, { SwiperOptions } from 'swiper';

declare module 'vue/types/vue' {
  interface Vue {
    $calendar: Calendar;
    $selectedDay: Day;
    swiper: _Swiper;
    options: SwiperOptions;
    swiperUpdate(): void;
  }
}

Vue.use(VueTsSwiper);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
