<template comments>
  <header class="header" :class="{ 'open': showMenu }">
    <div class="container header__container">
      <nav class="header__nav">
        <div class="header__nav-wrapper">
          <div class="header__inner">
            <NuxtLink  :to="mainPath" class="header__logo" aria-label="Skillline">
              <NuxtImg v-if="logo" :src="logo" alt="logotype Skillline" placeholder />
              <NuxtImg  v-else src="/img/white-logo.svg" alt="logotype Skillline" placeholder loading="lazy"/>
            </NuxtLink>

            <ul class="header__nav-list">
              <li v-for="link in navLinks" :key="link.id" class="header__list-item">
                <NuxtLink
                          :to="link.path"
                          class="header__item-link"
                >{{ link.title }}</NuxtLink>
              </li>

              <li class="header__list-item _popup-menu">
                <NuxtLink :to="aboutLinks[0].path" class="header__item-link">О нас
                  <svg class="header__item-img" xmlns="http://www.w3.org/2000/svg" width="8.062"
                       height="4.601" viewBox="0 0 8.062 4.601">
                    <g transform="translate(0.479 0.577)">
                      <path d="M0,0,3.652,3.037,7.085,0" fill="none" stroke="inherit"
                            stroke-width="1.5" />
                    </g>
                  </svg>
                </NuxtLink>
                <ul class="header__drop-down-list">
                  <li v-for="link in aboutLinks" :key="link.id" class="header__drop-down-item">
                    <NuxtLink
                      :to="link.path"
                      custom
                      v-slot="{ href,  navigate, }"
                    >
                      <a :href="href"   class="header__drop-down-link" @click.stop="navigate">{{ link.title }}</a>
                     </NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="header__wrap-btn">
            <template v-if="email">
              <a :href="`mailto:${email}`" class=" button button-green _no-btn">
                <span class="button-green__text">{{ email }}</span>
              </a>
              <span class="header__line-btn"></span>
            </template>
            <ButtonIcon text-button="Оставить запрос" :svg-obj="{name: 'icon-hand-right'}" mode="green" :handler-click="openFeedbackModal" />
            <span class="header__line-btn"></span>
            <!--noindex-->
            <a href="https://lk.skillline.ru/"  class="button-green _no-btn" target="_blank">
              <SvgIcon class="button-light__img" name="icon-entrance-cabinet" />
              <span class="button-light__text">Личный кабинет</span>
            </a>
            <!--/noindex-->
          </div>

          <div class="burger">
            <button class="burger__btn" @click="toggleMobileMenu" aria-label="меню">
              <NuxtImg v-if="!showMenu" src="@/assets/img/svg-sprite/burger.svg" alt="Icon menu" placeholder />
              <NuxtImg v-else src="@/assets/img/svg-sprite/cross.svg" alt="Icon close menu" placeholder />
            </button>
          </div>
        </div>

        <div class="burger__content" :class="{ 'open-burger': showMenu }">
          <ul class="burger__list">
            <li v-for="link in navLinks" :key="`mobile-${link.id}`" class="burger__item">
              <NuxtLink
                :to="link.path"
                class="burger__link"
              >{{ link.title }}</NuxtLink>
            </li>
            <li v-for="link in aboutLinks" :key="`mobile-${link.id}`" class="burger__item">
              <NuxtLink
                :to="link.path"
                custom
                v-slot="{ href,  navigate, }"
              >
                <a :href="href" class="burger__link" @click.stop="navigate">{{ link.title }}</a>
              </NuxtLink>
            </li>
          </ul>
          <div class="burger__column">
            <div class="burger__wrap-btn">
              <ButtonIcon text-button="Оставить запрос" :svg-obj="{name: 'icon-hand-right'}" mode="dark"  :handler-click="openFeedbackModal" />
              <!--noindex-->
              <a href="https://lk.skillline.ru/" class="button-dark" target="_blank">
                <SvgIcon class="button-dark__img" name="icon-entrance-cabinet" />
                <span class="button-dark__text">Личный кабинет</span>
              </a>
              <!--/noindex-->
            </div>
            <div v-if="address || phone || email" class="our-contacts">
              <address v-if="address" class="our-contacts__address">{{address}}</address>
              <div v-if="phone || email" class="our-contacts__footer">
                <a v-if="phone" class="our-contacts__phone" :href="`tel:${phone}`">{{ phone }}</a>
                <a v-if="email" class="our-contacts__mail" :href="`mailto:${email}`">{{email}}</a>
              </div>
            </div>
            <div class="pre-footer__wrap-bitrix">
              <div class="pre-footer__signature">
                <span>©Skillline,2023.</span>
                <p class="pre-footer__wrap-signature">
                  <span >Анализируем.</span>
                  <span >Проектируем.</span>
                  <span >Создаём.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { ROUTS_PATH } from "~/constant/routs";
import ButtonIcon from "~/components/common/ButtonIcon";
import bodyLock from "~/mixins/bodyLock";
import { NAV_MAIN, NAV_ABOUT } from "~/constant/navigation";

export default {
  name: "HeaderMain",
  components: {ButtonIcon},
  mixins: [bodyLock],
  data() {
    return {
      mainPath: ROUTS_PATH.main,
      navLinks: NAV_MAIN,
      aboutLinks: NAV_ABOUT,
      showMenu: false,
    }
  },
  watch: {
    windowWidth() {
      if (!this.isMobileWindow && this.showMenu) {
        this.showMenu = false;
        this.toggleMobileMenu(false);
      }
    },
    '$route'() {
      this.toggleMobileMenu(false);
    }
  },
  computed: {
    address() {
      return this.$store.state.main.main?.address || '';
    },
    phone() {
      return this.$store.state.main.main?.phone || '';
    },
    email() {
      return this.$store.state.main.main?.email || '';
    },
    logo() {
      return this.$store.state.main.main?.logo || null;
    }
  },
  methods: {
    toggleMobileMenu(flag) {
      if (typeof flag === 'boolean'){
        this.showMenu = flag;
        this.toggleLockBody(this.showMenu);
        return;
      }

      this.showMenu = !this.showMenu;
      this.toggleLockBody(this.showMenu);
    },
    openFeedbackModal(e) {
      e.preventDefault();
      e.stopPropagation();
      if (this.showMenu) {
        this.showMenu = false;
      }

      this.$store.commit('modals/setShowModalFeedback', true);
      this.toggleLockBody(true);
      if (this.$yandexMetrika) {
        this.$yandexMetrika.reachGoal('click_form');
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/components/header.scss";
</style>
