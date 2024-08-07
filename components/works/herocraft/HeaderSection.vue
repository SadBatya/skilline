<template comments>
  <div class="pf-header" :style="{backgroundImage: `url(${bgImage})`}">
    <div class="pf-header__header">
      <div class="pf-container">
        <h1 class="pf-header__title">Herocraft</h1>
        <p class="pf-header__description">Переосмысление и редизайн сайта компании-разработчика и издателя компьютерных
          игр Herocraft, добавление мобильной версии для удобства клиентов.</p>
      </div>
    </div>
    <div class="pf-header__about-project">
      <div class="pf-container">
        <div class="pf-header__des-project">
          <div class="pf-header__info">
            <p class="pf-header__subtitle">Клиент</p>
            <div class="pf-header__wrap-logo">
              <img src="@/static/img/portfolio/pf-herocraft/logo.svg" alt="">
            </div>
            <p class="pf-header__description">Ведущий российский издатель и разработчик игр для мобильных и ПК
              платформ, социальных сетей и игровых консолей.</p>
            <!--noindex-->
              <a href="https://www.herocraft.com/" class="portfolio__project-link" target="_blank">
                <span>herocraft.com</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13.5" height="13.5" viewBox="0 0 13.5 13.5">
                  <g transform="translate(0.75 0.75)">
                    <g transform="translate(5.366 0.068)">
                      <path d="M629.828,72.172h4.331V76.5" transform="translate(-627.663 -72.172)"
                            fill="none" stroke="inherit" stroke-miterlimit="10" stroke-width="1.5"/>
                      <line x1="6.497" y2="6.497" fill="none" stroke="inherit" stroke-miterlimit="10"
                            stroke-width="1.5"/>
                    </g>
                    <path d="M623,78.8V84H611V72h5.2" transform="translate(-611 -72)" fill="none"
                          stroke="inherit" stroke-miterlimit="10" stroke-width="1.5"/>
                  </g>
                </svg>
              </a>
            <!--/noindex-->
          </div>
        </div>
        <div class="pf-header__tags">
          <div class="pf-header__info">
            <p class="pf-header__subtitle">теги проекта</p>
            <div class="pf-header__tags-row">
              <div class="pf-header__tag">#Арт-Дирекшн</div>
              <div class="pf-header__tag">#Design</div>
              <div class="pf-header__tag">#Проектирование</div>
              <div class="pf-header__tag">#Frontend</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bgImage from "@/static/img/portfolio/pf-herocraft/main-banner.png"
import MethodScrollToBlock from "~/mixins/MethodScrollToBlock";
export default {
  name: "HeaderSectionHerocraft",
  mixins: [MethodScrollToBlock],
  data() {
    return {
      bgImage
    }
  }
}
</script>

<style scoped>

</style>
