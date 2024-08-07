<template>
 <SectionWithTabs :title="title" :tabs="tabs" :active-tabs-value="activeTab" @setActiveTab="setTab">
   <template #header>
     <div class="portfolio__additional-big-banner">
       <img src="@/static/img/portfolio/pf-swoys/logo-big.svg" alt="" class="lk__img">
     </div>
   </template>
   <template #description1>
     <p class="portfolio__desc">По желанию заказчика была разработана специализированная система заполнения
       данных о мероприятии.</p>
   </template>
   <template #description2>
     <p class="portfolio__desc">Выбор за организатором — найти
       ответственных волонтеров бывает непросто. Поэтому мы создали
       подробные формы для указания критериев подбора волонтеров.</p>
   </template>
   <template #block1>
     <div  v-show="activeTab === 1"  class="portfolio__content-tab _two-column" >
       <div class="content-tab__img-wrapper">
         <img src="@/static/img/portfolio/pf-swoys/creating-main-data.png" alt="" class="content-tab__img">
       </div>
       <div class="content-tab__img-wrapper">
         <img src="@/static/img/portfolio/pf-swoys/creating-geolocation.png" alt="" class="content-tab__img">
       </div>
     </div>
   </template>
    <template #block2>
      <div v-show="activeTab === 2" class="portfolio__content-tab _two-column">
          <div class="content-tab__img-wrappr">
            <img src="@/static/img/portfolio/pf-swoys/creating-volonters.png" alt="" class="content-tab__img">
          </div>
          <div class="content-tab__img-wrapper">
            <img src="@/static/img/portfolio/pf-swoys/creating-education.jpg" alt="" class="content-tab__img">
          </div>
      </div>
    </template>
 </SectionWithTabs>
</template>

<script>
import SectionWithTabs from "~/components/works/base/SectionWithTabs";
export default {
  name: "CreateEventsSectionSwoys",
  components: {SectionWithTabs},
  data() {
    return {
      title: "Создать мероприятие",
      tabs: [
        {
          id: 1,
          name: "Основные данные",
        },
        {
          id: 2,
          name: "Требования к волонтёрам",
        },
      ],
      activeTab: 1
    }
  },
  methods: {
    setTab(id) {
      this.activeTab = id;
    }
  }
}
</script>

<style scoped>

</style>
