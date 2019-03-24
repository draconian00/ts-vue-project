<template>
  <div class="week">
    <day v-for="(obj, i) in weekData.days" :key="i" :day="obj" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { IWeek, IDay } from './calendarInterfaces';
import Day from './Day.vue';

@Component({
  name: 'Week',
  components: {
    Day,
  },
})
export default class Week extends Vue {
  @Prop() public weekData!: IWeek;
}
</script>

<style lang="scss" scoped>
.day {
  width: calc(100% / 7);
}
</style>
