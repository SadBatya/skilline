<template>
  <div class="portfolio-card__wrap-block" @mouseenter="showTooltip = true" @mouseleave="showTooltip = showTooltipParent || false">
    <div class="portfolio-card__icon-blocked">
      <svg class="portfolio-card__img" xmlns="http://www.w3.org/2000/svg" width="11.908"
           height="16" viewBox="0 0 11.908 16">
        <g transform="translate(1.574)">
          <path
            d="M304.2,608.735a.683.683,0,0,1-.683-.683v-3.627a2.668,2.668,0,0,0-2.665-2.665h-.7a2.668,2.668,0,0,0-2.665,2.665v3.627a.683.683,0,1,1-1.367,0v-3.627a4.036,4.036,0,0,1,4.032-4.031h.7a4.036,4.036,0,0,1,4.032,4.031v3.627A.683.683,0,0,1,304.2,608.735Z"
            transform="translate(-296.118 -600.393)" fill="inherit"/>
        </g>
        <path d="M2,0H9.908a2,2,0,0,1,2,2V8.356a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z"
              transform="translate(0 5.645)" fill="inherit"/>
      </svg>
      <span v-if="isNda" class="portfolio-card__block-text">nda</span>
      <span v-else class="portfolio-card__block-text">time</span>
    </div>
    <template v-if="showTooltip">
      <div v-if="isNda"  class="portfolio-card__tooltip">
        <p class="portfolio-card__tooltip-text">Эта работа <span
          class="works__bold-text">закрыта</span> из общего просмотра по договору NDA</p>
        <a class="portfolio-card__tooltip-btn" @click.prevent.stop="openModalNda">
          <span class="portfolio-card__tooltip-description">Запросить расширенное портфолио</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="6.591" height="11.061"
               viewBox="0 0 6.591 11.061">
            <path d="M20,20.331l5-5-5-5" transform="translate(-19.47 -9.801)" fill="none"
                  stroke="inherit" stroke-miterlimit="10" stroke-width="1.5"/>
          </svg>
        </a>
      </div>
      <div v-else class="portfolio-card__tooltip">
        <p class="portfolio-card__tooltip-text">Эта работа <span class="works__bold-text">скоро</span> будет доступна</p>
      </div>
    </template>

  </div>
</template>

<script>
import bodyLock from "~/mixins/bodyLock";

export default {
  name: "WorkTooltipLocked",
  props: {
    isNda: {
      type: Boolean,
      default: false
    },
    work: Object,
    showTooltipParent: {
      type: Boolean,
      default: false
    }
  },
  mixins: [bodyLock],
  data() {
    return {
      showTooltip: false,
    }
  },
  watch: {
    showTooltipParent(val) {
      this.showTooltip = val;
    },
  },
  mounted() {
    this.showTooltip = this.showTooltipParent;
  },
  methods: {
    openModalNda() {
      this.toggleLockBody(true);
      this.$store.commit('modals/setWorkChoice', this.work);
      this.$store.commit('modals/setShowModalNda', true);
      if (this.$yandexMetrika) {
        this.$yandexMetrika.reachGoal('click_form');
      }
    }
  }
}
</script>
