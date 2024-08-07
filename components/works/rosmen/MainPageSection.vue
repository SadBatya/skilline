<template>
  <div class="pf-intelport__container-gradient">
    <DesktopAndMobilePage

      :title="main.title"
      :description="main.description"
      :imgMain="main.imgMain"
    >
      <template #description>
        <p class="portfolio__description">{{ main.description }}</p>
      </template>
      <template #rightBlock>
        <div class="portfolio__wrap-text-project">
          <div class="portfolio__text-project _line" :style="{position: 'absolute', top: '5%'}" id="headerBlock">
            <div class="portfolio__text-project-container">
              <p class="portfolio__subtitle ">Хедер (header)</p>
              <p class="portfolio__des-page">Адаптировали структуру сервиса под сайт-визитку. Новый баннер
                лучше подчеркивает идею компании и сохраняет фирменные оформление за счет проработанной иллюстрации.</p>
            </div>
          </div>
          <div class="portfolio__text-project _line" :style="{position: 'absolute', top: '35%'}" id="serviceBlock">
            <div class="portfolio__text-project-container">

              <p class="portfolio__subtitle ">Раздел услуг</p>
              <p class="portfolio__des-page">Использовали стиль неоморфизм, чтобы создать эффект глубины и
                сделать интерфейс более привлекательным. Это добавляет ощущение
                пространства, помогает пользователям быстрее и легче
                ориентироваться в разделе.</p>
            </div>
          </div>
          <div class="portfolio__text-project _line" :style="{position: 'absolute', top: '55%'}">
            <div class="portfolio__text-project-container">

              <p class="portfolio__subtitle ">Лицензии</p>
              <p class="portfolio__des-page">Удобный доступ ко всем сертификатам в вертикальном слайдере с
                якороным меню для эффективного поиска нужных документов.</p>
            </div>
          </div>
        </div>
      </template>
    </DesktopAndMobilePage>
  </div>
</template>

<script>
import imgDesktop from "@/static/img/portfolio/pf-rosmen/page-1.png";
import DesktopAndMobilePage from "~/components/works/base/DesktopAndMobilePage";

export default {
  name: "MainPageSectionRosmen",
  components: {DesktopAndMobilePage},
  data() {
    return {
      main: {
        title: "Главная страница",
        description: "Сайт для отслеживания будущих IPO и стоимости акций, финансовых показателей компаний, а также анализ конкурентов и аналитика отраслей.",
        imgMain: imgDesktop,
      },
    }
  },
}
</script>

<style scoped>

</style>
