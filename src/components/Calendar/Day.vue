<template>
  <div class="day" :class="{weekend: day.isWeekend, 'last-month': day.isLastMonth, 'next-month': day.isNextMonth}" @click="_select">
    <div class="date-box" :class="{ selected: isSelected }">
      <span class="date" v-html="day.date.getDate()"></span>
      <span v-if="day.memorialDay" class="memorial-day" v-html="day.memorialDay"></span>
      <span v-if="day.money" class="money" v-html="day.money"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { IDay } from './calendarInterfaces';

@Component({
  name: 'Day',
})
export default class Day extends Vue {
  // props
  @Prop() public day!: IDay;

  // data
  public isSelected: boolean = false;

  // methods
  private _select() {
    if (this.day.isLastMonth || this.day.isNextMonth) {
      return;
    }
    this.$selectedDay.isSelected = false;
    this.isSelected = true;
    Vue.prototype.$selectedDay = this;
  }

  // life cycles
  private mounted() {
    const beginOfToday = new Date();
    beginOfToday.setHours(0, 0, 0, 0);
    const endOfToday = new Date();
    endOfToday.setHours(23, 59, 59, 999);

    if (this.day.date >= beginOfToday && this.day.date <= endOfToday) {
      this.isSelected = true;
      Vue.prototype.$selectedDay = this;
    }
  }
}
</script>

<style lang="scss" scoped>
.day {
  display: inline-flex;
  position: relative;
  min-width: 30px;
  min-height: 70px;
  &.weekend {
    .date {
      color: #ADADAD;
    }
  }
   &.last-month, &.next-month {
     .date {
       color: #EEEEEE !important;
     }
   }

  .date-box {
    padding: 5px 2px;
    width: 100%;
    display: flex;
    flex-direction: column;
    &.selected {
      border: 1px solid #0070F0;
      .date {
        color: #0070F0;
      }
    }
  }
  
  .date {
    color: #000;
    font-size: 15px;
    margin-bottom: 4px;
  }

  .money {
    font-size: 9px;
    color: #666666;
  }

  .memorial-day {
    font-size: 7px;
    color: red;
  }
}
</style>
