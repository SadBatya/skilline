<template comments>
  <div class="pf-header" :style="`background-image: url(${bgImage});`">
    <div class="pf-container">
      <div class="pf-header__header">
        <h1 class="pf-header__title">СНТ Клуб</h1>
        <p class="pf-header__description">Сервис, который поможет садоводам и председателям СНТ избавиться от
          рутинных задач и сфокусироваться на обустройстве комфортного проживания всех членов товарищества.
        </p>
      </div>
      <div class="pf-header__about-project">
        <div class="pf-container">
          <div class="pf-header__des-project">
            <div class="pf-header__info">
              <p class="pf-header__subtitle">Клиент</p>
              <p class="pf-header__description">ООО “СНТклуб”</p>
              <!--noindex-->
                <a href="https://www.sntclub.ru/" class="portfolio__project-link" target="_blank">
                  <span>sntclub.ru</span>
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
              <span>Разработали привлекательную и интуитивно понятную дизайн-систему для улучшения
                  пользовательского опыта</span>
                <span class="pf-header__wrap-arrow">
                <span class="pf-header__long-arrow"></span>
                <svg xmlns="http://www.w3.org/2000/svg" width="9.331" height="6.343"
                     viewBox="0 0 9.331 6.343">
                  <g transform="translate(0 0.477)" opacity="0.996">
                    <path d="M0,.078V4.663" transform="translate(5.457 -0.078)" fill="none"
                          stroke="inherit" stroke-width="1"/>
                    <path d="M5.957,0H0" transform="translate(0 0.023)" fill="none" stroke="inherit"
                          stroke-width="1"/>
                    <path d="M0,0,3.652,3.037,7.085,0" transform="translate(1.914 2.171)"
                          fill="none" stroke="inherit" stroke-width="1"/>
                  </g>
                </svg>
              </span>
              </button>
              <button class="pf-header__inner-scroll" type="button" @click="scrollToBlock('paymentBlock')">
                <span>Создали интерфейс для ввода показаний и отслеживания истории оплаты.</span>
                <span class="pf-header__wrap-arrow">
                <span class="pf-header__long-arrow"></span>
                <svg xmlns="http://www.w3.org/2000/svg" width="9.331" height="6.343"
                     viewBox="0 0 9.331 6.343">
                  <g id="anchor" transform="translate(0 0.477)" opacity="0.996">
                    <path d="M0,.078V4.663" transform="translate(5.457 -0.078)" fill="none"
                          stroke="inherit" stroke-width="1"/>
                    <path d="M5.957,0H0" transform="translate(0 0.023)" fill="none" stroke="inherit"
                          stroke-width="1"/>
                    <path d="M0,0,3.652,3.037,7.085,0" transform="translate(1.914 2.171)"
                          fill="none" stroke="inherit" stroke-width="1"/>
                  </g>
                </svg>
              </span>
              </button>
              <button class="pf-header__inner-scroll" type="button" @click="scrollToBlock('bdBlock')">
                <span>Интегрировали базу данных для хранения информации о всех участниках клуба</span>
                <span class="pf-header__wrap-arrow">
                <span class="pf-header__long-arrow"></span>
                <svg xmlns="http://www.w3.org/2000/svg" width="9.331" height="6.343"
                     viewBox="0 0 9.331 6.343">
                  <g id="anchor" transform="translate(0 0.477)" opacity="0.996">
                    <path d="M0,.078V4.663" transform="translate(5.457 -0.078)" fill="none"
                          stroke="inherit" stroke-width="1"/>
                    <path d="M5.957,0H0" transform="translate(0 0.023)" fill="none" stroke="inherit"
                          stroke-width="1"/>
                    <path d="M0,0,3.652,3.037,7.085,0" transform="translate(1.914 2.171)"
                          fill="none" stroke="inherit" stroke-width="1"/>
                  </g>
                </svg>
              </span>
              </button>
              <button class="pf-header__inner-scroll" type="button" @click="scrollToBlock('chatBlock')">
              <span>Реализовали функционал системы коммуникаций для более оперативного решения
                  вопросов</span>
                <span class="pf-header__wrap-arrow">
                <span class="pf-header__long-arrow"></span>
                <svg xmlns="http://www.w3.org/2000/svg" width="9.331" height="6.343"
                     viewBox="0 0 9.331 6.343">
                  <g id="anchor" transform="translate(0 0.477)" opacity="0.996">
                    <path d="M0,.078V4.663" transform="translate(5.457 -0.078)" fill="none"
                          stroke="inherit" stroke-width="1"/>
                    <path d="M5.957,0H0" transform="translate(0 0.023)" fill="none" stroke="inherit"
                          stroke-width="1"/>
                    <path d="M0,0,3.652,3.037,7.085,0" transform="translate(1.914 2.171)"
                          fill="none" stroke="inherit" stroke-width="1"/>
                  </g>
                </svg>
              </span>
              </button>
              <button class="pf-header__inner-scroll" type="button" @click="scrollToBlock('totalBlock')">
                <span class="pf-header__subtitle">итоговые показатели проекта.</span>
                <span class="pf-header__wrap-arrow">
                <span class="pf-header__long-arrow"></span>
                <svg xmlns="http://www.w3.org/2000/svg" width="9.331" height="6.343"
                     viewBox="0 0 9.331 6.343">
                  <g id="anchor" transform="translate(0 0.477)" opacity="0.996">
                    <path d="M0,.078V4.663" transform="translate(5.457 -0.078)" fill="none"
                          stroke="inherit" stroke-width="1"/>
                    <path d="M5.957,0H0" transform="translate(0 0.023)" fill="none" stroke="inherit"
                          stroke-width="1"/>
                    <path d="M0,0,3.652,3.037,7.085,0" transform="translate(1.914 2.171)"
                          fill="none" stroke="inherit" stroke-width="1"/>
                  </g>
                </svg>
              </span>
              </button>
            </div>
          </div>
          <div class="pf-header__tags">
            <div class="pf-header__info">
              <p class="pf-header__subtitle">теги проекта</p>
              <div class="pf-header__tags-row">
                <div class="pf-header__tag">#продажа</div>
                <div class="pf-header__tag">#арт-дирекшен</div>
                <div class="pf-header__tag">#Design</div>
                <div class="pf-header__tag">#проектирование</div>
                <div class="pf-header__tag">#backend</div>
                <div class="pf-header__tag">#frontend</div>
                <div class="pf-header__tag">#техническая поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bgImage from "@/static/img/portfolio/pf-snt/main-bg-1.png"
import MethodScrollToBlock from "~/mixins/MethodScrollToBlock";

export default {
  name: "HeaderSectionSnt",
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
