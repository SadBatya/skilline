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
      <template #mainBlock>
        <img class="img-gradient" src="@/static/img/portfolio/pf-intelport/gradient.png" alt="">
      </template>
      <template #rightBlock>
        <div class="portfolio__wrap-text-project">
          <div class="portfolio__text-project _line" :style="{position: 'absolute', top: '2%'}" id="headerBlock">
            <div class="portfolio__text-project-container">
              <p class="portfolio__subtitle ">Хедер (header)</p>
              <p class="portfolio__des-page">Адаптировали структуру сервиса под сайт-визитку. Новый баннер
                лучше подчеркивает идею компании и сохраняет фирменные оформление за счет проработанной иллюстрации.</p>
            </div>
          </div>
          <div class="portfolio__text-project _line" :style="{position: 'absolute', top: '16%'}" id="serviceBlock">
            <div class="portfolio__text-project-container">

              <p class="portfolio__subtitle ">Раздел услуг</p>
              <p class="portfolio__des-page">Использовали стиль неоморфизм, чтобы создать эффект глубины и
                сделать интерфейс более привлекательным. Это добавляет ощущение
                пространства, помогает пользователям быстрее и легче
                ориентироваться в разделе.</p>
            </div>
          </div>
          <div class="portfolio__text-project _line" :style="{position: 'absolute', top: '50%'}">
            <div class="portfolio__text-project-container">

              <p class="portfolio__subtitle ">Лицензии</p>
              <p class="portfolio__des-page">Удобный доступ ко всем сертификатам в вертикальном слайдере с
                якороным меню для эффективного поиска нужных документов.</p>
            </div>
          </div>
          <div class="portfolio__text-project _line" :style="{position: 'absolute', top: '80%'}" id="feedbackBlock">
            <div class="portfolio__text-project-container">

              <p class="portfolio__subtitle ">Карточка контактов</p>
              <p class="portfolio__des-page">Новая концепция отличается четкой информационной структурой и
                элегантным внешним видом. Улучшено удобство восприятия за счет минималистичности дизайна.</p>
            </div>
          </div>
        </div>
      </template>
    </DesktopAndMobilePage>
    <DesktopAndMobilePage

      :title="contacts.title"
      :description="contacts.description"
      :imgMain="contacts.imgMain"
      id="supportBlock"
    >
      <template #description>
        <p class="portfolio__description">Сбалансированное сочетание чистых линий и колоночной
          системы, которые создают приятное визуальное впечатление.</p>
      </template>
      <template #mainBlock>
        <img class="img-gradient" src="@/static/img/portfolio/pf-intelport/gradient.png" alt="">
      </template>
      <template #rightBlock>
        <div class="portfolio__wrap-text-project">
          <div class="portfolio__text-project _line" :style="{position: 'absolute', top: '5%'}">
            <div class="portfolio__text-project-container">
              <div class="portfolio__text-project-container">
                <p class="portfolio__des-page ">Реализовали акцентный блок с контактами компании в
                  модной стилистике цифровизации, перекликающейся с оформлением главной страницы.</p>
              </div>
            </div>

          </div>
          <div class="portfolio__text-project _line" :style="{position: 'absolute', top: '25%'}">
            <div class="portfolio__text-project-container">
              <p class="portfolio__des-page ">Блок технической поддержки в обновленном дизайне
                имеет элегантную структуру, обеспечивает возможность быстрого обращения клиентов
                в компанию, и выдержан в единой стилистике.</p>
            </div>
          </div>
          <div class="portfolio__text-project _line" :style="{position: 'absolute', top: '50%'}">
            <div class="portfolio__text-project-container">
              <p class="portfolio__des-page ">Карточка реквизитов компании представляет всю
                необходимую информацию в лаконичной двухколоночной форме.</p>
            </div>
          </div>
        </div>
      </template>
    </DesktopAndMobilePage>

    <img class="gradient" src="@/static/img/portfolio/pf-intelport/gradient2.png">
  </div>

</template>

<script>
import imgDesktop from "@/static/img/portfolio/pf-intelport/page-main.jpg";
import imgDesktopContacts from "@/static/img/portfolio/pf-intelport/page-contacts.jpg"
import DesktopAndMobilePage from "~/components/works/base/DesktopAndMobilePage";

export default {
  name: "MainPageSection",
  components: {DesktopAndMobilePage},
  data() {
    return {
      main: {
        title: "Главная страница",
        description: "Визуально и технически устарела, не соответствовала имиджу компании телеком сегмента, что и захотел изменить заказчик. Наш прототип дизайна включает в себя визуальное оформление и структуру сайта. Мы выбрали современный и запоминающийся стиль, удачно подчеркивающий направленность компании.",
        imgMain: imgDesktop,

      },
      contacts: {
        title: "Контакты",
        imgMain: imgDesktopContacts,

      }
    }
  },
}
</script>

<style scoped>

</style>
