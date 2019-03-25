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
    <line-chart :chartdata="testData" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LineChart from '@/components/Chart/LineChart.vue';
import { ChartData } from 'chart.js';

@Component({
  name: 'TestView',
  components: {
    LineChart,
  },
})
export default class TestView extends Vue {

  testData: ChartData = {
    labels: ['6월', '7월', '8월', '9월', '10월'],   // Array<string | string[]>;
    datasets: [
      {
        showLine: true,
        fill: false,
        label: 'label',
        data: [1200000, 1500000, 1300000, 1400000, 1700000],
        lineTension: 0,
      }
    ],
  }

}
</script>

<style lang="scss" scoped>
.test-view {
  width: 100%;
  height: 100%;
}
</style>
