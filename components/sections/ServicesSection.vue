<template>
  <section v-if="(services && services.length) || $fetchState.pending" class="service-cards">
    <div class="container">
      <component :is="tagTitle" class="service-cards__title title">{{ title }}</component>
      <div class="service-cards__wrap">
        <div v-if="showDescriptionBlock" class="service-cards__wrap-title" >
          <div class="service-cards__wrap-description">
            <p>{{ description }}</p>
          </div>
          <div v-if="isButtonShowAll" class="service-cards__wrap-btn" >
            <LinkButtonIcon
              :path="urlServices"
              class-mod="left-icon"
              text-button="Перейти в раздел"
              mode="dark"
              :svg-obj="{name: 'icon-arrow-left', width: '7px', height: '14px'}"
            />
          </div>
        </div>
        <div class="service-cards__cards">
          <div
            v-for="item in services"
            :key="item.id"
            class="service-cards__service-card service-block">
            <NuxtLink
              :to="getPathDetail(item.code)"
              class="service-block__service-card-link"
              :class="{'_white-bg': item.isWhite}"
            >
              <ServicePattern :item="item"/>
              <div class="service-block__card-info">
                <component :is="tagTitleItems" class="service-block__title-card">{{ item.title }}</component>
                <p class="service-block__description-card">{{ item.description }}</p>
                <div class="service-block__btn-more">
                  <span class="service-block__btn-text">Подробнее</span>
                  <div class="service-block__wrap-btn">
                    <span class="service-block__line-arrow"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.062 4.601">
                      <g transform="translate(0.479 0.577)">
                        <path d="M0,0,3.652,3.037,7.085,0" fill="none" stroke="inherit" stroke-width="1.5"/>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
          <template v-if="$fetchState.pending">
            <ServiceCardSkeleton v-for="i in 6" :key="`skelet-service${i}`" />
          </template>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import {ROUTS_PATH} from "~/constant/routs";
import {API_URLS} from "~/constant/apiUrls";
import {servicesModel} from "~/models/services";
import LinkButtonIcon from "~/components/common/LinkButtonIcon";
import ServicePattern from "~/components/elements/ServicePattern";
import ServiceCardSkeleton from "~/components/skeletons/ServiceCardSkeleton";

export default {
  name: "ServicesSection",
  components: {ServiceCardSkeleton, ServicePattern, LinkButtonIcon},
  props: {
    isButtonShowAll: {
      type: Boolean,
      default: true
    },
    tagTitle: {
      type: String,
      default: 'p'
    },
    tagTitleItems: {
      type: String,
      default: 'p'
    }
  },
  data() {
    return {
      title: 'Услуги',
      description: 'Проектируем архитектуру и разрабатываем технические задания для реализации проектов, учитываем потребности бизнеса при создании дизайна.',
      services: [],
      urlServices: ROUTS_PATH.services.list,
      isShowPattern: false,
      showDescriptionBlock: false,
    }
  },
  async fetch() {
    await this.$axios.get(API_URLS.services.list)
      .then(response => {
        const servicesList = servicesModel(response?.data?.data);
        this.services = servicesList.list || [];
      })
      .catch(e => {
        this.services = [];
      })
  },
  computed: {
    isCanvas() {
      return this.services.find(item => item.canvas) || false;
    }
  },
  methods: {
    getPathDetail(code) {
      return ROUTS_PATH.services.detail(code);
    }
  }
}
</script>


<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/components/service-cards.scss";
@import "@/assets/scss/style/components/service-blocks.scss";
</style>

