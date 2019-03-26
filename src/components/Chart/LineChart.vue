<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import BaseChart from './BaseChart.vue';
import { ChartType } from 'chart.js';

@Component({
  name: 'line-chart',
})
export default class LineChart extends BaseChart {
  @Prop() public width!: number;
  @Prop() public height!: number;

  public chartId: string = 'line-chart';
  public chartType: ChartType = 'line';
  public styles: object = {
    width: this.width ? `${this.width}px` : 'auto',
    height: this.height ? `${this.height}px` : 'auto',
  };
}
</script>

<style lang="scss" scoped>
// #line-chart {
// }
</style>
