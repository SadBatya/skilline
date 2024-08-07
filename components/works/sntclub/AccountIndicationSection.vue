<template>
  <SectionWithSlot :title="title" class-mod="pf-container-small" style="overflow: hidden">
    <template #description>
      <p class="portfolio__description">Мы разработали простую, но удобную систему для передачи
        показаний коммунальным службам.</p>
    </template>
    <template>
      <div class="pf-snt__cards _dop-indent"
           ref="sliderCards"
           @click="changeSlide"
           @mouseenter="mouseEnter"
           @mouseleave="mouseLeave">
            <div class="card first-card" data-index="0">
              <img class="card__img" src="@/static/img/portfolio/pf-snt/indicators/1.png" alt="показывает интерфейс страницы">
            </div>
            <div class="card center-card" data-index="1">
              <img class="card__img" src="@/static/img/portfolio/pf-snt/indicators/2.png"  alt="показывает интерфейс страницы">
            </div>
            <div class="card last-card" data-index="2">
              <img class="card__img" src="@/static/img/portfolio/pf-snt/indicators/3.png"  alt="показывает интерфейс страницы">
            </div>
      </div>
    </template>
  </SectionWithSlot>
</template>

<script>
import SectionWithSlot from "~/components/works/base/SectionWithSlot";

export default {
  name: "AccountIndicationSectionSnt",
  components: {SectionWithSlot},
  data() {
    return {
      title: "Учёт показаний",
      classes: ['last-card', 'center-card','first-card'],
      index: 0,
      slider: null,
      timerClick: null,
      autoplay: true,
      autoplayTime: 2000,
      intervalSlideChange: null
    }
  },
  watch: {
    index(value) {
      if (this.slider ) {
        const elements = this.slider.querySelectorAll('.card');

        elements.forEach((item, i) => {
          const indexItem = Number(item.dataset.index);
          const curIndex = (indexItem + value) % 3;
          item.classList.add(this.classes[curIndex]);
          this.classes.forEach(el => {
            if (el !== this.classes[curIndex]) {
              item.classList.remove(el);
            }
          });
        });
      }
    },
    autoplay() {
      this.autoplayInit();
    },
    windowWidth() {
      this.setHeightSlider();
    }
  },
  mounted() {
    this.$nextTick().then(() => {
      this.slider = this.$refs.sliderCards;
      this.slider.classList.add('animation');

      this.setHeightSlider();
      this.autoplayInit();
    });
  },
  methods: {
    setHeightSlider() {
      const cards = this.slider.querySelectorAll('.card');
      let height = 0;
      cards.forEach( (item, i) => {
        height = Math.max(item.clientHeight, height);
      })
      this.slider.style.height = (height + height * 0.3) + 'px';
    },
    changeSlide() {
      const currentTime = Date.now();
      if (this.timerClick && currentTime - this.timerClick  < 500 ) {
        return;
      }

      this.timerClick = currentTime;

      if (this.index  === 0) {
        this.index = 2;
        return;
      }

      this.index--;
    },
    autoplayInit() {
      clearInterval(this.intervalSlideChange);
      if(!this.autoplay) {
        return;
      }

      this.intervalSlideChange = setInterval(() => {
        this.changeSlide();
      }, this.autoplayTime)
    },
    mouseEnter() {
      this.autoplay = false;
    },
    mouseLeave() {
      this.autoplay = true;
    }
  }
}
</script>

<style scoped>

</style>
