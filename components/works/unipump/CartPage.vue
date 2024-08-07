<template>
  <div class="portfolio__cart-main">
    <div class="pf-container">
      <div class="portfolio__box-title">
        <p class="portfolio__title-page">Корзина</p>
        <div class="portfolio__tabs-wrapper">
          <div class="portfolio__tabs-container">
            <span
              class="portfolio__tab-btn"
              :class="{ '_active': activeTab === 0 }"
              @click="setActiveTab(0)"
            >Розница</span>
            <span class="portfolio__tab-btn"
            :class="{ '_active': activeTab === 1 }"
            @click="setActiveTab(1)"
            >Оптовая</span>
            <span ref="tabLine" class="portfolio__tab-line"></span>
          </div>
        </div>
        <p class="portfolio__description">Реализована возможность переключения между соглашениями с
          автоматическим применением соответствующих условий к товарам в корзине.</p>
        <br>
        <p class="portfolio__description">В случае, если выбранные товары находятся на разных складах, то
          корзина делится на разные заказы по складам. <br> Добавили функцию отслеживания курса
          своей/интересующей валют по отношению к рублю.
        </p>
      </div>
      <div class="portfolio__tabs-content-wrapper tabs-container">
        <div v-show="activeTab === 0" class="portfolio__content-tab content-retail _active mobile-container">
          <div class="content-tab__img-wrapper retail-cart-1 mobile-box">
            <img src="/img/portfolio/pf-unipump/cart-retail-banner.png" alt="" class="content-tab__img">
          </div>
          <div class="content-tab__img-wrapper content-retail-img mobile__show">
            <img src="/img/portfolio/pf-unipump/cart-retail-mobile-1.jpg" alt="" class="mobile-display__img">
          </div>
          <div class="content-tab__img-wrapper mobile__show">
            <img src="/img/portfolio/pf-unipump/cart-retail-mobile-2.jpg" alt="" class="mobile-display__img">
          </div>
          <div class="content-tab__img-wrapper mobile-display hidden">
            <img src="/img/portfolio/pf-unipump/cart-retail-mobile-3.jpg" alt="" class="mobile-display__img">
          </div>
        </div>
        <DesktopAndMobilePageWithScroll
          v-show="activeTab === 1"
          class-mod="content-wholesale"
          img-main="/img/portfolio/pf-unipump/cart-wholesale-banner.jpg"
          img-mobile="/img/portfolio/pf-unipump/cart-wholesale-mobile-1.jpg"
        ></DesktopAndMobilePageWithScroll>
      </div>
    </div>
  </div>
</template>

<script>
import DesktopAndMobilePageWithScroll from "~/components/works/base/DesktopAndMobilePageWithScroll.vue";

export default {
  name: "CartPage",
  components: {DesktopAndMobilePageWithScroll},
  data() {
    return {
      activeTab: 0,
    }
  },
  watch: {
    activeTab() {
      this.setPositionLine();
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.setPositionLine();
    })
  },
  methods: {

    setPositionLine() {
      const lineTemplate = this.$refs.tabLine;
      if (lineTemplate) {
        const parent = lineTemplate.parentNode;
        const tabs = parent.querySelectorAll('.portfolio__tab-btn');
        const activeTab = tabs[this.activeTab];
        const width = activeTab.offsetWidth;
        const left = activeTab.offsetLeft;

        lineTemplate.style.width = `${width}px`;
        lineTemplate.style.transform = `translateX(${left}px)`;
      }
    },
    setActiveTab(id) {
      this.activeTab = id;
    }
  }
}
</script>

