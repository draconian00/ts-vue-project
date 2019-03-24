<template>
  <div class="calendar">
    <div class="day-header-row">
      <div class="day-header" v-for="(obj, i) in dayHeader" :key="i" :style="`color:${obj.color}`">
        {{ obj.day }}
      </div>
    </div>
    <month :monthData="testMonth" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IDayHeader, IMonth, IWeek, IDay } from './calendarInterfaces';
import Month from './Month.vue';

@Component({
  name: 'Calendar',
  components: {
    Month,
  },
})
export default class Calendar extends Vue {
  // data
  public dayHeader: IDayHeader[] = [
    { day: '일',  color: '#ADADAD'},
    { day: '월',  color: '#000000'},
    { day: '화',  color: '#000000'},
    { day: '수',  color: '#000000'},
    { day: '목',  color: '#000000'},
    { day: '금',  color: '#000000'},
    { day: '토',  color: '#ADADAD'},
  ];

  // api 로 부터 받을 월별 데이터
  protected testMonth: IMonth = {
    weeks: [
      {
        days: [
          { date: new Date('2018-2-24'), isWeekend: true, isLastMonth: true },
          { date: new Date('2018-2-25'), isLastMonth: true },
          { date: new Date('2019-2-26'), isLastMonth: true },
          { date: new Date('2019-2-27'), isLastMonth: true },
          { date: new Date('2019-2-28'), isLastMonth: true },
          { date: new Date('2019-3-1'), money: '56,000' },
          { date: new Date('2019-3-2'), isWeekend: true },
        ],
      }, {
        days: [
          { date: new Date('2018-3-3'), isWeekend: true },
          { date: new Date('2018-3-4') },
          { date: new Date('2019-3-5') },
          { date: new Date('2019-3-6') },
          { date: new Date('2019-3-7') },
          { date: new Date('2019-3-8') },
          { date: new Date('2019-3-9'), isWeekend: true },
        ],
      }, {
        days: [
          { date: new Date('2018-3-10'), isWeekend: true },
          { date: new Date('2018-3-11') },
          { date: new Date('2019-3-12') },
          { date: new Date('2019-3-13') },
          { date: new Date('2019-3-14') },
          { date: new Date('2019-3-15') },
          { date: new Date('2019-3-16'), isWeekend: true },
        ],
      }, {
        days: [
          { date: new Date('2018-3-17'), isWeekend: true, money: '72,060' },
          { date: new Date('2018-3-18') },
          { date: new Date('2019-3-19') },
          { date: new Date('2019-3-20') },
          { date: new Date('2019-3-21') },
          { date: new Date('2019-3-22') },
          { date: new Date('2019-3-23'), isWeekend: true },
        ],
      }, {
        days: [
          { date: new Date('2018-3-24'), isWeekend: true },
          { date: new Date('2018-3-25'), memorialDay: '결제예정<br>1,200,400', money: '84,020' },
          { date: new Date('2019-3-26') },
          { date: new Date('2019-3-27') },
          { date: new Date('2019-3-28') },
          { date: new Date('2019-3-29') },
          { date: new Date('2019-3-30'), isWeekend: true },
        ],
      }, {
        days: [
          { date: new Date('2018-3-31'), isWeekend: true },
          { date: new Date('2018-4-1'), isNextMonth: true },
          { date: new Date('2019-4-2'), isNextMonth: true },
          { date: new Date('2019-4-3'), isNextMonth: true },
          { date: new Date('2019-4-4'), isNextMonth: true },
          { date: new Date('2019-4-5'), isNextMonth: true },
          { date: new Date('2019-4-6'), isWeekend: true, isNextMonth: true },
        ],
      },
    ],
  };

  // life cycle
  private mounted() {
    Vue.prototype.$calendar = this;
  }
}
</script>

<style lang="scss" scoped>
.calendar {
  width: 100%;
  .day-header-row {
    display: relative;
    width: 100%;
    margin-bottom: 12px;
    .day-header {
      display: inline-flex;
      width: calc(100% / 7);
    }
  }
}
</style>
