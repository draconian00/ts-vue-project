<template>
  <div :class="slideClass">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'swiper-slide',
})
export default class SwiperSlide extends Vue {
  // data
  slideClass: string = 'swiper-slide';

  // methods
  update() {
    if (this.$parent && this.$parent.swiper) {
      this.$parent.swiperUpdate()
    }
  }

  ready() {
    this.swiperUpdate()
  };
  mounted() {
    this.swiperUpdate()
    if (this.$parent && this.$parent.options && this.$parent.options.slideClass) {
      this.slideClass = this.$parent.options.slideClass
    }
  };
  updated() {
    this.swiperUpdate()
  };
  attached() {
    this.swiperUpdate()
  };
  
}
</script>
