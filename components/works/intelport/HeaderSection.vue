<template comments>
  <div class="pf-header" :style="{backgroundImage: `url(${bgImage})`}">
    <div class="pf-header__header">
      <div class="pf-container">

        <h1 class="pf-header__title">ИНТЕЛПОРТ</h1>
        <p class="pf-header__description">Визуальная концепция сайта компании оператора связи, в основу которой
          лег неоморфизм, дополненный графическими элементами в виде векторной графики. Общее стилевое решение
          строится на информационных блоках, свободном пространстве, и тонких линиях. Подход отражает
          технологичность и современность клиента.</p>
      </div>
    </div>
    <div class="pf-header__about-project">
      <div class="pf-container">

        <div class="pf-header__des-project">
          <div class="pf-header__info">
            <p class="pf-header__subtitle">Клиент</p>
            <div class="pf-header__wrap-logo">
              <img src="@/static/img/portfolio/pf-intelport/logo.svg" width="250" alt="">
            </div>
            <p class="pf-header__description">Оператор связи, специализирующийся на предоставлении широкого
              ряда инфокоммуникационных услуг в сегменте крупных корпоративных клиентов на рынках Москвы и
              Санкт-Петербурга.</p>
            <!--noindex-->
              <a href="https://intel-port.ru/" class="portfolio__project-link" target="_blank">
                <span>intel-port.ru</span>
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
              <div class="pf-header__tag">#Продакшен</div>
              <div class="pf-header__tag">#Прототипирование</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bgImage from "@/static/img/portfolio/pf-intelport/header.png"
import MethodScrollToBlock from "~/mixins/MethodScrollToBlock";

export default {
  name: "HeaderSection",
  mixins: [MethodScrollToBlock],
  data() {
    return {
      bgImage
    }
  },
}
</script>

<style scoped>

</style>
