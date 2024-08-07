<template>
  <div class="pf-container">
    <div class="portfolio__catalog-products catalog-products">
      <div class="portfolio__box-title">
        <h2 class="portfolio__title-page">Каталог товаров</h2>
        <p class="portfolio__description">Отображение всех категорий и подкатегорий каталога. Первой категорией
          демонстрируются насосы.</p>
        <br>
        <p class="portfolio__description">Ключевые объекты на экране — карточки товаров, с незаметным
          слайдером-превью, работающим по наведению курсора на изображение.</p>
      </div>
      <div class="catalog-products__content-wrapper">
        <div class="catalog-products__tabs-main js-init-tabs ">  <!--mobile-container -->
          <ul class="portfolio__list-main">
            <li class="portfolio__list-item">Умный поиск с расширенной фильтрацией</li>
            <li class="portfolio__list-item">2 вида представления каталога: карточный и табличный</li>
            <li class="portfolio__list-item">Настраиваемый порядок отображения блоков</li>
            <li class="portfolio__list-item">Настраиваемый адаптивный алгоритм пошагового подбора товара
            </li>
          </ul>
          <div class="catalog-products__container">
            <div class="portfolio__tabs-wrapper">
              <div class="portfolio__tabs-container">
                 <span
                   class="portfolio__tab-btn"
                   :class="{ '_active': activeTab === 0 }"
                   @click="setActiveTab(0)"
                 >Каталог</span>
                <span
                  class="portfolio__tab-btn"
                  :class="{ '_active': activeTab === 1 }"
                  @click="setActiveTab(1)"
                >Карточки</span>
                <span
                  class="portfolio__tab-btn"
                  :class="{ '_active': activeTab === 2 }"
                  @click="setActiveTab(2)"
                >Таблица</span>
                <span ref="tabLine" class="portfolio__tab-line"></span>
              </div>

            </div>
            <div class="catalog-products__tabs-content tabs-container">
              <div v-show="activeTab === 0" class="portfolio__content-tab">
                <div class="portfolio__img-wrapper">
                  <img src="/img/portfolio/pf-unipump/catalog-tab-1.png" alt="" class="portfolio__img-main">
                </div>
                <div class="portfolio__mobile-wrapper">
                  <img src="/img/portfolio/pf-unipump/catalog-tab-mobile-1.jpg" alt=""
                       class="portfolio__img-mobile mobile__show">
                  <img src="/img/portfolio/pf-unipump/catalog-tab-mobile-2.jpg" alt=""
                       class="portfolio__img-mobile mobile__show">
                </div>
              </div>
              <div v-show="activeTab === 1" class="portfolio__content-tab">
                <div class="portfolio__img-wrapper">
                  <img src="/img/portfolio/pf-unipump/catalog-tab-2.png" alt="" class="portfolio__img-main">
                </div>
                <div class="portfolio__mobile-wrapper">
                  <img src="/img/portfolio/pf-unipump/catalog-tab-mobile-3.jpg" alt=""
                       class="portfolio__img-mobile mobile__show">
                  <img src="/img/portfolio/pf-unipump/catalog-tab-mobile-4.jpg" alt=""
                       class="portfolio__img-mobile mobile__show">
                </div>
              </div>
              <div v-show="activeTab === 2" class="portfolio__content-tab">
                <div class="portfolio__img-wrapper">
                  <img src="/img/portfolio/pf-unipump/catalog-tab-3.jpg" alt="" class="portfolio__img-main">
                </div>
                <div class="portfolio__mobile-wrapper">
                  <img src="/img/portfolio/pf-unipump/catalog-tab-mobile-5.jpg" alt=""
                       class="portfolio__img-mobile mobile__show">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="catalog-products__clever-filter">
          <div class="portfolio__box-title">
            <h3 class="portfolio__title-filter">Умный фильтр</h3>
            <p class="portfolio__description">На лету применяет все указываемые пользователем критерии отбора сразу по
              факту выбора, с достаточно большим набором характеристик.</p>
          </div>

          <div class="portfolio__img-wrapper">
            <img src="/img/portfolio/pf-unipump/catalog-smart-filter.jpg" alt="" class="portfolio__img-main">
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "CatalogPage",
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
