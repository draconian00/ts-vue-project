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
  public slideClass: string = 'swiper-slide';

  // methods
  public swiperUpdate() {
    if (this.$parent && this.$parent.swiper) {
      this.$parent.swiperUpdate();
    }
  }

  // life cycle hooks
  private ready() {
    this.swiperUpdate();
  }
  private mounted() {
    this.swiperUpdate();
    if (this.$parent && this.$parent.swiperOptions && this.$parent.swiperOptions.slideClass) {
      this.slideClass = this.$parent.swiperOptions.slideClass;
    }
  }
  private updated() {
    this.swiperUpdate();
  }
  private attached() {
    this.swiperUpdate();
  }
}
</script>
