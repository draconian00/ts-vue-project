<template>
  <div class="month" @click="$emit('click', $event)">
    <week v-for="(obj, i) in monthData.weeks" :key="i" :weekData="obj" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { IDay, IWeek, IMonth } from './calendarInterfaces';
import Week from './Week.vue';

@Component({
  name: 'Month',
  components: {
    Week,
  },
})
export default class Month extends Vue {
  @Prop(Object) public monthData!: IMonth;
}
</script>

<style lang="scss" scoped>
.month {
  width: 100%;
  height: 100%;
}
</style>
