<template>
  <div class="about-company-section">
    <div class="container">
      <MetricsCompany v-if="statistic && statistic.length"  :metrics="statistic" />
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import MetricsCompany from "~/components/elements/MetricsCompany";
import bgImage from '@/assets/img/evg.png'
export default {
  name: "AboutCompanySection",
  components: {MetricsCompany},
  props: {
    countMetrics: Number,
  },
  data() {
    return {
      bgImage,
      showDirectorBlock: false
    }
  },
  async fetch() {
    await this.fetchAboutUs();
  },
  computed: {
    statistic() {
      const statistic = this.$store.state.aboutUs.statistic;
      if (this.countMetrics  && this.countMetrics > 0) {
        return statistic.slice(0, this.countMetrics);
      }
      return statistic || [];
    },
  },
  methods: {
    ...mapActions({
      fetchAboutUs: 'aboutUs/fetchAboutUs',
    }),
  }

}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/components/skillline.scss";
@import "@/assets/scss/style/components/card-statistic.scss";
@import "@/assets/scss/style/components/about-us.scss";
</style>
