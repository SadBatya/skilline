<template>
 <SectionWithTabs :title="title" :tabs="tabs" :active-tabs-value="activeTab" @setActiveTab="setTab">
   <template #description1>
     <p class="portfolio__desc">Реализовали возможность для пользователей платформы организовывать различные мероприятия, рассчитанные на самые разные аудитории</p>
   </template>
   <template #description2>
     <p class="portfolio__desc">Разработанная платформа содержит компоненты, позволяющие пользователям не только
       оценивать мероприятие с помощью системы рейтинга, но и оставлять ценные отзывы, а также
       предоставлять подробные отчеты о прошедшем событии.</p>
   </template>
   <template #block1>
     <div v-show="activeTab === 1" class="portfolio__content-tab content-event">
       <div class="content-tab__img-wrapper event-1">
         <img src="@/static/img/portfolio/pf-swoys/card-event-mobile-1.png" alt="" class="content-tab__img">
       </div>
       <div class="content-tab__img-wrapper event-2">
         <img src="@/static/img/portfolio/pf-swoys/card-event-member-1.png" alt="" class="content-tab__img">
       </div>
       <div class="content-tab__img-wrapper event-3">
         <img src="@/static/img/portfolio/pf-swoys/card-event-coordinate-1.png" alt="" class="content-tab__img">
       </div>
       <div class="content-tab__img-wrapper event-4">
         <img src="@/static/img/portfolio/pf-swoys/card-event-page-1.jpg" alt="" class="content-tab__img">
       </div>
       <div class="content-tab__img-wrapper event-5">
         <img src="@/static/img/portfolio/pf-swoys/card-event-volonter-1.png" alt="" class="content-tab__img">
       </div>
     </div>
   </template>
    <template #block2>
      <div v-show="activeTab === 2" class="portfolio__content-tab content-feedback">
        <div class="content-tab__img-wrapper feedback-1">
          <img src="@/static/img/portfolio/pf-swoys/card-event-mobile-2.jpg" alt="" class="mobile-display__img">
        </div>
        <div class="content-tab__img-wrapper feedback-2">
          <img src="@/static/img/portfolio/pf-swoys/card-event-member-2.png" alt="" class="content-tab__img">
        </div>
        <div class="content-tab__img-wrapper feedback-3 ">
          <img src="@/static/img/portfolio/pf-swoys/card-event-page-2.jpg" alt="" class="content-tab__img">
        </div>
      </div>
    </template>
 </SectionWithTabs>
</template>

<script>
import SectionWithTabs from "~/components/works/base/SectionWithTabs";
export default {
  name: "EventsSectionSwoys",
  components: {SectionWithTabs},
  data() {
    return {
      title: "Карточки мероприятия",
      tabs: [
        {
          id: 1,
          name: "Мероприятие предстоит",
        },
        {
          id: 2,
          name: "Завершённое мероприятие",
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
