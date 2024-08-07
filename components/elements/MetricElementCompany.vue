<template>
  <div class="metric__card">
    <div v-if="numberFormatted && numberFormatted.symbol" class="metric__wrap-quantity">
      <div class="metric__inner">
        <p class="metric__quantity">{{numberFormatted.value}}</p>
        <span class="metric__value">{{numberFormatted.symbol}}</span>
      </div>
      <p class="metric__number">{{ count }}</p>
    </div>
    <p v-else-if="count" class="metric__quantity">{{ count }}</p>
    <p v-if="metric.title" class="metric__signature">{{metric.title}}</p>
    <p  v-if="metric.description" class="metric__description">{{metric.description}}</p>
  </div>
</template>

<script>
import {nFormatter} from "~/constant/common";

export default {
  name: "MetricElementCompany",
  props: {
    metric: Object
  },
  computed: {
    count() {
      return this.metric?.count?.int || "";
    },
    numberFormatted() {
      return nFormatter(this.count)
    }
  },
}
</script>

<style scoped>

</style>
