<template>
  <SectionWithBlocks :title="title" :count-slots="3" class-mod="">
    <template #block1>
      <SectionWithSlot
        :title="titleMainPage"
        tag-title="h3"
        class-mod="pf-container-small"
      >
        <template #description>
          <p class="portfolio__description">Обладает интуитивно понятным интерфейсом и предоставляет весь необходимый
            пользователю функционал: просматривать и создавать мероприятия, добавлять в избранное, а также определять
            уровень достижений волонтера.</p>
        </template>
        <template #default>
          <div class="lk__block-wrapper">
            <div class="lk__img-wrapper menu-img">
              <img src="@/static/img/portfolio/pf-swoys/lk-profile-menu.png" alt="" class="lk__img">
            </div>
            <div class="lk__img-wrapper main-img">
              <img src="@/static/img/portfolio/pf-swoys/lk-profile-main.png" alt="" class="lk__img">
            </div>
          </div>
        </template>
      </SectionWithSlot>
    </template>
    <template #block2>
      <DesktopAndMobilePageWithScroll
        :title="titleProfile"
        :description="descriptionProfile"
        :img-main="ProfileImgMain"
        :img-mobile="ProfileImgMobile"
        class-mod="pf-container-small"
        tag-title="h3"
      />
    </template>
    <template #block3>
      <DesktopAndMobilePage>
        <template #mainBlock>
          <div class="lk__private-parameters">
            <div class="lk__private private">
              <div class="lk__text-wrapper ">
                <p class="lk__name-desc">Приватность</p>
                <p class="lk__desc">Настройте видимость своих данных — скройте личные данные по своему желанию.</p>
              </div>
              <div class="lk__img-wrapper">
                <img src="@/static/img/portfolio/pf-swoys/lk-private.png" class="lk-private__img" alt="Показывает виды приватности">
              </div>
            </div>
            <div class="lk__parameters parameters">
              <div class="lk__text-wrapper">
                <p class="lk__name-desc">Параметры входа</p>
                <p class="lk__desc">Простая и удобная синхронизация Ваших аккаунтов и смена пароля.</p>
              </div>
              <div class="lk__img-wrapper">
                <img src="@/static/img/portfolio/pf-swoys/lk-parameters.png" class="lk-private__img" alt="показывает параметры входа">
              </div>
            </div>
          </div>
        </template>
      </DesktopAndMobilePage>

    </template>
  </SectionWithBlocks>
</template>

<script>
import SectionWithBlocks from "~/components/works/base/SectionWithBlocks";
import SectionWithSlot from "~/components/works/base/SectionWithSlot";
import DesktopAndMobilePageWithScroll from "~/components/works/base/DesktopAndMobilePageWithScroll";
import DesktopAndMobilePage from "~/components/works/base/DesktopAndMobilePage";

import ProfileImgMain from "~/static/img/portfolio/pf-swoys/lk-profile-page.png";
import ProfileImgMobile from "~/static/img/portfolio/pf-swoys/lk-profile-mobile.png";

export default {
  name: "PersonalCabinetSection",
  components: {DesktopAndMobilePage, DesktopAndMobilePageWithScroll, SectionWithSlot, SectionWithBlocks},
  data() {
    return {
      title: "Личный кабинет",
      titleMainPage: "Разводная страница",
      titleProfile: "Профиль",
      descriptionProfile: "Структурировали всю необходимую информацию о пользователе в личном профиле",
      ProfileImgMain,
      ProfileImgMobile
    }
  }
}
</script>

<style scoped>

</style>
