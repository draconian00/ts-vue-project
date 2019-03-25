<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import BaseChart from './BaseChart.vue';
import { ChartType } from 'chart.js';

@Component({
  name: 'line-chart',
})
export default class LineChart extends BaseChart {
  @Prop() width!: number;
  @Prop() height!: number;

  chartId: string = 'line-chart';
  chartType: ChartType = 'line';
  styles: object = {
    width: this.width ? `${this.width}px` : 'auto',
    height: this.height ? `${this.height}px` : 'auto',
  }
}
</script>

<style lang="scss" scoped>
#line-chart {
  // width: 300px !important;
}
</style>
