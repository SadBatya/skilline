<template>
  <DesktopAndMobilePage
    :title="title"
    :imgMain="imgMain"
    id="mainBlock"
  >
    <template #description>
      <p class="portfolio__description">Концепция, которая сочетает в себе функциональность, современность
        и узнаваемость бренда компании. Разработали блочную структуру сайта, которая позволяет гибко
        управлять контентом на страницах без искажения при изменение информации.</p>
    </template>
    <template #rightBlock>
      <div class="portfolio__wrap-text-project">

        <div class="portfolio__text-project _line" :style="{position: 'absolute', top: '2%'}">
          <div class="portfolio__text-project-container">
            <p class="portfolio__subtitle">Хедер (header)</p>
            <p class="portfolio__des-page">Структурировали информацию о компании, сделав ее доступнее
              для клиентов.</p>
          </div>
        </div>


        <div class="portfolio__text-project _line" :style="{position: 'absolute', top: '15%'}">
          <div class="portfolio__text-project-container">
            <p class="portfolio__subtitle ">Услуги</p>
            <p class="portfolio__des-page">Дизайн, акцентирующий внимание на основных услугах,
              предлагаемых клиентом, не отвлекая пользователей от решения своих задач.</p>
          </div>
        </div>
        <div id="illustrationBlock" class="portfolio__text-project _line" :style="{position: 'absolute', top: '30%'}">
          <div class="portfolio__text-project-container">
            <p class="portfolio__subtitle">Иллюстрации</p>
            <p class="portfolio__des-page">Уникальные иллюстрации для каждой услуги были разработаны
              специально в данной концепции, и обеспечивают легкость восприятия для пользователей.</p>
          </div>
        </div>
        <div class="portfolio__text-project _line" :style="{position: 'absolute', top: '40%'}">
          <div class="portfolio__text-project-container">

            <p class="portfolio__subtitle">Обоснованные решения</p>
            <p class="portfolio__des-page">С помощью правильных акцентов дизайна помогаем
              ориентироваться среди большого массива информации, облегчая процесс выбора услуг.</p>
          </div>
        </div>
        <div class="portfolio__text-project _line" :style="{position: 'absolute', top: '55%'}">
          <div class="portfolio__text-project-container">
            <p class="portfolio__subtitle">Дополнительные опции</p>
            <p class="portfolio__des-page">Реализовали в форме отдельного блока информацию с набором
              дополнительных услуг, обеспечив полное представление деятельности компании</p>
          </div>
        </div>
        <div class="portfolio__text-project _line" :style="{position: 'absolute', top: '65%'}">
          <div class="portfolio__text-project-container">
            <p class="portfolio__subtitle ">Аналитика</p>
            <p class="portfolio__des-page">Добавили интерактивную карту с отображением информации по
              аналитике рынка обработки больших данных (Big Data). </p>
            <p class="portfolio__des-page">Блок краткой аналитики демонстрирующий лидирующее положение
              клиента на рынке.</p>
          </div>
        </div>
      </div>
    </template>
  </DesktopAndMobilePage>

</template>

<script>
import imgDesktop from "@/static/img/portfolio/pf-ofd/page-main.png";
import DesktopAndMobilePage from "~/components/works/base/DesktopAndMobilePage";

export default {
  name: "MainPageSectionOFD",
  components: {DesktopAndMobilePage},
  data() {
    return {
      title: "Главная страница",
      imgMain: imgDesktop,
    }
  },
}
</script>

<style scoped>

</style>
