<template comments>
  <div class="pf-header" :style="{backgroundImage: `url(${bgImage})`}">
    <div class="pf-header__header">
      <div class="pf-container">
        <h1 class="pf-header__title">SWOYS</h1>
        <p class="pf-header__description">Разработали первую в России централизованную технологическую
          платформу призванную объединить специалистов, представителей бизнеса и волонтеров в рамках
          одного пространства.</p>
      </div>
    </div>
    <div class="pf-header__about-project">
      <div class="pf-container">
        <div class="pf-header__des-project">
          <div class="pf-header__info">
            <p class="pf-header__subtitle">Клиент</p>
            <img class="pf-header__logo" src="@/static/img/portfolio/pf-swoys/logo-mini.svg" alt="logo" width="250">
            <p class="pf-header__description">Фонд содействия социальному и духовному благополучию общества</p>
            <!--noindex-->
            <a href="https://swoys.me" class="portfolio__project-link" target="_blank">
              <span>swoys.me</span>
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
          <div class="pf-header__info">
            <p class="pf-header__subtitle">выполненные задачи</p>

            <button class="pf-header__inner-scroll" type="button" @click="scrollToBlock('mainBlock')">
              <span>Провели ряд необходимых маркетинговых и аналитических работ и создали на их основе
                  брендбук клиента.</span>
              <span class="pf-header__wrap-arrow">
                <span class="pf-header__long-arrow"></span>
                <svg xmlns="http://www.w3.org/2000/svg" width="9.331" height="6.343"
                     viewBox="0 0 9.331 6.343">
                  <g id="anchor" transform="translate(0 0.477)" opacity="0.996">
                    <path d="M0,.078V4.663" transform="translate(5.457 -0.078)" fill="none"
                          stroke="inherit" stroke-width="1"></path>
                    <path d="M5.957,0H0" transform="translate(0 0.023)" fill="none" stroke="inherit"
                          stroke-width="1"></path>
                    <path d="M0,0,3.652,3.037,7.085,0" transform="translate(1.914 2.171)"
                          fill="none" stroke="inherit" stroke-width="1"></path>
                  </g>
                </svg>
              </span>
            </button>
            <button class="pf-header__inner-scroll"  type="button" @click="scrollToBlock('speedBlock')">
              <span>Добились высочайшей скорости работы интерфейса и стабильности работы в формате
                  SPA-приложения</span>
              <span class="pf-header__wrap-arrow">
                <span class="pf-header__long-arrow"></span>
                <svg xmlns="http://www.w3.org/2000/svg" width="9.331" height="6.343"
                     viewBox="0 0 9.331 6.343">
                  <g id="anchor" transform="translate(0 0.477)" opacity="0.996">
                    <path d="M0,.078V4.663" transform="translate(5.457 -0.078)" fill="none"
                          stroke="inherit" stroke-width="1"></path>
                    <path d="M5.957,0H0" transform="translate(0 0.023)" fill="none" stroke="inherit"
                          stroke-width="1"></path>
                    <path d="M0,0,3.652,3.037,7.085,0" transform="translate(1.914 2.171)"
                          fill="none" stroke="inherit" stroke-width="1"></path>
                  </g>
                </svg>
              </span>
            </button>
            <button class="pf-header__inner-scroll"  type="button" @click="scrollToBlock('eventsBlock')" >
              <span>Создали конструктор мероприятий, адаптируемый под требуемую целевую аудиторию и роль
                  организатора.</span>
              <span class="pf-header__wrap-arrow">
                <span class="pf-header__long-arrow"></span>
                <svg xmlns="http://www.w3.org/2000/svg" width="9.331" height="6.343"
                     viewBox="0 0 9.331 6.343">
                  <g id="anchor" transform="translate(0 0.477)" opacity="0.996">
                    <path d="M0,.078V4.663" transform="translate(5.457 -0.078)" fill="none"
                          stroke="inherit" stroke-width="1"></path>
                    <path d="M5.957,0H0" transform="translate(0 0.023)" fill="none" stroke="inherit"
                          stroke-width="1"></path>
                    <path d="M0,0,3.652,3.037,7.085,0" transform="translate(1.914 2.171)"
                          fill="none" stroke="inherit" stroke-width="1"></path>
                  </g>
                </svg>
              </span>
            </button>
            <button class="pf-header__inner-scroll" type="button" @click="scrollToBlock('lkBlock')">
              <span>Спроектировали дизайн платформы и личного кабинета пользователей</span>
              <span class="pf-header__wrap-arrow">
                <span class="pf-header__long-arrow"></span>
                <svg xmlns="http://www.w3.org/2000/svg" width="9.331" height="6.343"
                     viewBox="0 0 9.331 6.343">
                  <g id="anchor" transform="translate(0 0.477)" opacity="0.996">
                    <path d="M0,.078V4.663" transform="translate(5.457 -0.078)" fill="none"
                          stroke="inherit" stroke-width="1"></path>
                    <path d="M5.957,0H0" transform="translate(0 0.023)" fill="none" stroke="inherit"
                          stroke-width="1"></path>
                    <path d="M0,0,3.652,3.037,7.085,0" transform="translate(1.914 2.171)"
                          fill="none" stroke="inherit" stroke-width="1"></path>
                  </g>
                </svg>
              </span>
            </button>

            <button class="pf-header__inner-scroll"  type="button" @click="scrollToBlock('totalBlock')">
              <span class="pf-header__subtitle">итоговые показатели проекта</span>
              <span class="pf-header__wrap-arrow">
                <span class="pf-header__long-arrow"></span>
                <svg xmlns="http://www.w3.org/2000/svg" width="9.331" height="6.343"
                     viewBox="0 0 9.331 6.343">
                  <g id="anchor" transform="translate(0 0.477)" opacity="0.996">
                    <path d="M0,.078V4.663" transform="translate(5.457 -0.078)" fill="none"
                          stroke="inherit" stroke-width="1"></path>
                    <path d="M5.957,0H0" transform="translate(0 0.023)" fill="none" stroke="inherit"
                          stroke-width="1"></path>
                    <path d="M0,0,3.652,3.037,7.085,0" transform="translate(1.914 2.171)"
                          fill="none" stroke="inherit" stroke-width="1"></path>
                  </g>
                </svg>
              </span>

            </button>
          </div>

        </div>
        <div class="pf-header__tags">
          <div class="pf-header__info">
            <p class="pf-header__subtitle">стек технологий</p>
            <div class="pf-header__tags-row">
              <div class="pf-header__tag">#Nuxt</div>
              <div class="pf-header__tag">#Vue</div>
              <div class="pf-header__tag">#HTML</div>
              <div class="pf-header__tag">#SCSS</div>
              <div class="pf-header__tag">#Python</div>
              <div class="pf-header__tag">#Django</div>
            </div>
          </div>
          <div class="pf-header__info">
            <p class="pf-header__subtitle">теги проекта</p>
            <div class="pf-header__tags-row">
              <div class="pf-header__tag">#продажа</div>
              <div class="pf-header__tag">#Арт-Дирекшн</div>
              <div class="pf-header__tag">#брендирование</div>
              <div class="pf-header__tag">#Design</div>
              <div class="pf-header__tag">#Проектирование</div>
              <div class="pf-header__tag">#Frontend</div>
              <div class="pf-header__tag">#Backend</div>
              <div class="pf-header__tag">#SPA</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bgImage from "@/static/img/portfolio/pf-swoys/main-banner.png"
import MethodScrollToBlock from "~/mixins/MethodScrollToBlock";

export default {
  name: "HeaderSectionSwoys",
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
