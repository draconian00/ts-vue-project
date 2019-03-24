<template>
  <div class="test-view">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'TestView',
})
export default class TestView extends Vue {}
</script>

<style lang="scss" scoped>
.test-view {
  width: 100%;
  height: 100%;
}
</style>
