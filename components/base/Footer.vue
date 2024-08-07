<template comments>
  <div class="container">
    <footer class="footer">
      <div class="footer__inner-box">
        <div class="footer__nav-links">
          <div class="footer__column">
            <p class="footer__title">О НАС</p>
            <ul class="footer__list">
              <li v-for="link in navigation" :key="link.id" class="footer__item">
                <NuxtLink
                  :to="link.path"
                  custom
                  v-slot="{ href,  navigate, }"
                >
                  <a :href="href" class="footer__link" @click.stop="navigate">{{ link.title }}</a>
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div v-if="services && services.length" class="footer__column">
            <p class="footer__title">УСЛУГИ</p>
            <ul class="footer__list">
              <NuxtLink
                :to="getUrlService(service.code)"
                class="footer__item"
                tag="li"
                v-for="service in services"
                :key="service.id"
              >
                <a class="footer__link">{{service.title}}</a>
              </NuxtLink>
            </ul>
          </div>
          <div v-if="documents && documents.length" class="footer__column">
              <p class="footer__title">Документы</p>
              <ul class="footer__list">
                <li v-for="doc in documents" :key="doc.id" class="footer__item">
                  <a :href="doc.path" class="footer__link" target="_blank">{{doc.title}}</a>
                </li>
              </ul>
          </div>
          <div class="footer__column _clients">
<!--            <p class="footer__title">КЛИЕНТАМ</p>-->
            <div class="footer__wrap">
              <!--noindex-->
              <a href="https://lk.skillline.ru/" class="button-dark" target="_blank" >
                <SvgIcon  name="icon-entrance-cabinet" class="button-dark__img"/>
                <span class="button-dark__text">Личный кабинет</span>
              </a>
              <!--/noindex-->
            </div>
            <div v-if="socials && socials.length" class="footer__wrap-bottom">
              <ul class="pre-footer__wrapper-networks">
                <li v-for="social in socials"
                    :key="social.id"
                    class="pre-footer__social-networks">
                  <!--noindex-->
                  <a :href="social.url" class="pre-footer__btn-net" :aria-label="'our page in: ' + social.title" rel="nofollow" >
                    <span
                      class="pre-footer__social-icon"
                      v-html="social.svg"
                      :style="`--color-icon-hover: ${social.color}`"></span>
                    <span>{{ social.title }}</span>
                  </a>
                  <!--/noindex-->

                </li>
              </ul>
            </div>
          </div>
       </div>
      </div>
      <div class="footer__bottom">
        <div v-if="copyright || (slogan && slogan.length)" class="pre-footer__signature">
          <span v-if="copyright">{{copyright}}</span>
          <p v-if="slogan && slogan.length" class="pre-footer__wrap-signature">
            <span v-for="(word, index) in slogan" :key="index">{{word}}</span>
          </p>
        </div>
        <div class="footer__bottom-right">
          <div class="footer__partner">
            <!--noindex-->
              <a href="https://arda.digital/" target="_blank" rel="nofollow">
                <NuxtImg src="/img/arda.svg" alt="logo ARDA" placeholder loading="lazy" width="64" height="24"/>
              </a>
            <!--/noindex-->
          </div>
          <div class="footer__partner">
              <NuxtImg src="/img/bitrix.svg" alt="logo Bitrix" placeholder loading="lazy" width="124" height="24"/>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { NAV_FOOTER } from "~/constant/navigation";
import {ROUTS_PATH} from "~/constant/routs";

export default {
  name: "FooterMain",
  data() {
    return {
      navigation: NAV_FOOTER,
      showMenu: false,
    }
  },
  async fetch() {
    await this.$store.dispatch('main/getMainData');
  },
  computed: {
    services() {
      return  this.$store.state.main.main.services || [];
    },
    copyright() {
      return this.$store.state.main.main?.copyright || "";
    },
    slogan() {
      const slogan  = this.$store.state.main.main?.description || 'Aнализируем. Проектируем. Создаём.';

      return slogan
        .split('.')
        .map(word => word.trimStart() + '.')
        .filter(word => word.trim() !== '.');
    },
    documents() {
      return [
        {
          id: 1,
          path: '/documents/6d6c2d11b1ced22ab4c2eee9a68b1c74b08edc70.pdf',
          title: 'Политика конфиденциальности'
        },
        {
          id: 2,
          path: '/documents/8ab27a0e0724e9a5d5d6a19ccf0cb3008843630e.pdf',
          title: 'Пользовательское соглашение'
        },
        {
          id: 3,
          path: '/documents/b97e589290f4b5a517d16db51246b4d648751a0b.pdf',
          title: 'Аккредитованы Минцифрой'
        },

        {
          id: 4,
          path: '/documents/d7d69b4f8d8c0c5e24d565870bd3c121f118edbb.pdf',
          title: 'Свидетельство о защите знака компании'
        },
      ]
      // return this.$store.state.main.main?.documents || [];
    },
    socials() {
      return this.$store.state.main.main?.socials || [];
    }
  },
  methods: {
    getUrlService(id) {
      return ROUTS_PATH.services.detail(id);
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/components/pre-footer.scss";
@import "@/assets/scss/style/components/footer.scss";
</style>
