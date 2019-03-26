<template>
  <div class="test-view">
    <swiper ref="testSwiper" >
      <swiper-slide style="background-color:#0070F0; color:#FFF">
        <p>이번 달 지출이 많으시네요.<br>지난달 보다 857,400원 더 쓰셨어요.</p>
        <line-chart :chartdata="testData" :options="testOptions" />
      </swiper-slide>
      <swiper-slide>
        <p>이번 달 지출이 많으시네요.<br>지난달 보다 857,400원 더 쓰셨어요.</p>
        <bar-chart :chartdata="testData" :options="testOptions" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LineChart from '@/components/Chart/LineChart.vue';
import BarChart from '@/components/Chart/BarChart.vue';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  name: 'TestView',
  components: {
    LineChart,
    BarChart,
  },
})
export default class TestView extends Vue {

  private testData: ChartData = {
      labels: ['6월', '7월', '8월', '9월', '10월', '11월'],
      datasets: [{
          // label: '# of Votes',
          data: [3, 4, 2, 3, 3, 11],
          fill: false,
          // backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderColor: 'rgba(255, 255, 255, 1)',
          pointBackgroundColor: 'rgba(255, 255, 255, 0.4)',
          borderWidth: 5,
          lineTension: 0.1,
          pointRadius: 0,
      }]
  };
  private testOptions: ChartOptions = {
    events: ['click'],
    onClick: (e) => {
      console.log('line-chart click', e);
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [{
        display: false,
        ticks: {
          beginAtZero: true,
        },
      }],
      xAxes: [{
        ticks: {
          fontColor: '#FFF',
        },
        gridLines: {
          borderDash: [4],
          color: 'rgba(255, 255, 255, 0.4)',
        },
      }],
    },
  };
}
</script>

<style lang="scss" scoped>
.test-view {
  width: 100%;
  height: 100%;
}
</style>
