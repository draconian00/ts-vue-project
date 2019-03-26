<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import BaseChart from './BaseChart.vue';
import { ChartType } from 'chart.js';

@Component({
  name: 'bar-chart',
})
export default class BarChart extends BaseChart {
  @Prop() public width!: number;
  @Prop() public height!: number;

  public chartId: string = 'bar-chart';
  public chartType: ChartType = 'bar';
  public styles: object = {
    width: this.width ? `${this.width}px` : 'auto',
    height: this.width ? `${this.height}px` : 'auto',
  }
}
</script>

<style>

</style>
