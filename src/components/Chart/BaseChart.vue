<script lang="ts">
import Chart,{ 
  ChartOptions,
  ChartData,
  ChartType,
  PluginServiceRegistrationOptions,
} from 'chart.js';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'generate-chart',
})
export default class GenerateChart extends Vue {
  @Prop() width!: number;
  @Prop() height!: number;
  @Prop() cssClasses!: string;
  @Prop() plugins!: PluginServiceRegistrationOptions[];

  @Prop() chartdata!: ChartData;
  @Prop() options!: ChartOptions;

  _chart!: Chart;
  _plugins: PluginServiceRegistrationOptions[] = this.plugins;
  chartType: ChartType = 'bar';
  chartId: string = 'bar-chart';
  styles: object = {};

  $refs!: {
    canvas: HTMLCanvasElement;
  }

  render(createElement:any) {
    return createElement('div', {
      style: this.styles,
      class: this.cssClasses,
    }, [
      createElement('canvas', {
        attrs: {
          id: this.chartId,
          width: this.width,
          height: this.height,
        },
        ref: 'canvas',
      }),
    ]);
  }

  generateLegend() {
    if (this.$data._chart) {
      return this.$data._chart.generateLegend();
    }
  }

  renderChart(data: ChartData, options: ChartOptions) {
    if (this.$data._chart) this.$data._chart.destroy();
    const canvasContext = this.$refs.canvas.getContext('2d');
    if (canvasContext !== null) {
      this.$data._chart = new Chart(
        canvasContext, {
          type: this.chartType,
          data: data,
          options: options,
          plugins: this.plugins,
        }
      );
    }
  }

  addPlugin(plugin: PluginServiceRegistrationOptions) {
    this.$data._plugins.push(plugin);
  }

  // life cycle hooks
  beforeDestroy() {
    if (this.$data._chart) {
      this.$data._chart.destroy();
    }
  }

  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
  updated() {
    this.renderChart(this.chartdata, this.options);
  }
}
</script>
