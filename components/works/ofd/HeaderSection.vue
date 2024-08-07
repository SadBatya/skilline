<template comments>
  <div class="pf-header" :style="{backgroundImage: `url(${bgImage})`}">
    <div class="pf-header__header">
      <div class="pf-container">

        <h1 class="pf-header__title">Платформа ОФД</h1>
        <p class="pf-header__description">Концепция дизайна корпоративного сайта крупнейшего оператора
          фискальных данных, электронного документооборота и отчетности в России, которая отражает сущность и
          ценности компании, ее положение на рынке и уникальные возможности.</p>
      </div>
    </div>
    <div class="pf-header__about-project">
      <div class="pf-container">

        <div class="pf-header__des-project">
          <div class="pf-header__info">
            <p class="pf-header__subtitle">Клиент</p>
            <div class="pf-header__wrap-logo">
              <img src="@/static/img/portfolio/pf-ofd/logo.svg" width="150" alt="ОФД">
            </div>
            <p class="pf-header__description">ООО «Эвотор ОФД» — аккредитованная организация, осуществляющая
              деятельность в области информационных технологий. </p>
            <!--noindex-->
              <a href="https://platformaofd.ru/" class="portfolio__project-link" target="_blank">
                <span>platformaofd.ru</span>
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
              <div class="pf-header__tag">#Design</div>
              <div class="pf-header__tag">#Концепция</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bgImage from "@/static/img/portfolio/pf-ofd/main-banner.png"
import MethodScrollToBlock from "~/mixins/MethodScrollToBlock";

export default {
  name: "HeaderSectionOfd",
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
