<template>
  <div class="test-view">
    <swiper ref="testSwiper" >
      <swiper-slide>
        <p>1</p>
      </swiper-slide>
      <swiper-slide>
        <p>2</p>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'TestView',
})
export default class TestView extends Vue {}
</script>

<style lang="scss" scoped>
.test-view {
  width: 100%;
  height: 100%;
}
</style>
