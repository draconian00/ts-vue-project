import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';

Vue.config.productionTip = false;

// Vue Global 속성 interface 등록
import Calendar from '@/components/Calendar/Index.vue';
import Day from '@/components/Calendar/Day.vue';

declare module 'vue/types/vue' {
  interface Vue {
    $calendar: Calendar;
    $selectedDay: Day;
  }
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
