<template>
  <div v-if="valueMetrics && valueMetrics.length" class="metric">
    <MetricElementCompany v-for="metric in valueMetrics" :key="metric.id"  :metric="metric" />
  </div>
</template>

<script>
import MetricElementCompany from "~/components/elements/MetricElementCompany";
import {apiUrlWS} from "~/constant/common";

export default {
  name: "MetricsCompany",
  components: {MetricElementCompany},
  props: {
    metrics: Array,
  },
  data() {
    return {
      valueMetrics: this.metrics || [],
      connection: null
    }
  },
  mounted() {
    this.$nextTick().then(() => {
      const codeWS = ['mouse', 'keyboard']
      const isWS = this.metrics.find(el => {
        return codeWS.includes(el.code);
      });

      try {
        if (isWS) {
          this.connection = new WebSocket(apiUrlWS);

          this.connection.onmessage = this.getMessageWS;
        }
      } catch (e) {
        console.log(e);
      }

    });

  },
  methods: {
    getMessageWS(event) {
      try {
        if (event.data) {
          const data = JSON.parse(event.data);
          this.setNewNumberMetrics(data);
        }
      } catch (e) {
        console.log(e);
      }
    },
    setNewNumberMetrics(data) {
      this.valueMetrics = [...this.valueMetrics].map(el => {
        const newEl = Object.assign({}, el);
        if (data[el.code]) {
          newEl.count = Object.assign({}, data[el.code]);
        }
        return newEl;
      });
    }
  },
  destroyed() {
    if (this.connection) {
      this.connection.close();
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/_variables.scss";
  @import "@/assets/scss/style/components/metric.scss";
</style>
