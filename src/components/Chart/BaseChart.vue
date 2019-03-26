<script lang="ts">
import Chart, {
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
  @Prop() public width!: number;
  @Prop() public height!: number;
  @Prop() public cssClasses!: string;
  @Prop() public plugins!: PluginServiceRegistrationOptions[];

  @Prop() public chartdata!: ChartData;
  @Prop() public options!: ChartOptions;

  public _chart!: Chart;
  public _plugins: PluginServiceRegistrationOptions[] = this.plugins;
  public chartType: ChartType = 'bar';
  public chartId: string = 'bar-chart';
  public styles: object = {};

  public $refs!: {
    canvas: HTMLCanvasElement;
  };

  public render(createElement: any) {
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

  public generateLegend() {
    if (this.$data._chart) {
      return this.$data._chart.generateLegend();
    }
  }

  public renderChart(data: ChartData, options: ChartOptions) {
    if (this.$data._chart) { this.$data._chart.destroy(); }
    const canvasContext = this.$refs.canvas.getContext('2d');
    if (canvasContext !== null) {
      this.$data._chart = new Chart(
        canvasContext, {
          type: this.chartType,
          data,
          options,
          plugins: this.plugins,
        },
      );
    }
  }

  public addPlugin(plugin: PluginServiceRegistrationOptions) {
    this.$data._plugins.push(plugin);
  }

  // life cycle hooks
  private beforeDestroy() {
    if (this.$data._chart) {
      this.$data._chart.destroy();
    }
  }

  private mounted() {
    this.renderChart(this.chartdata, this.options);
  }
  private updated() {
    this.renderChart(this.chartdata, this.options);
  }
}
</script>
