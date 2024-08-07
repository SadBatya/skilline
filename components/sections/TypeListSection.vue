<template>
  <div v-if="elements && elements.length" class="type-projects">
    <div class="container">
      <div class="type-projects__header-text">
        <p v-if="title" class="type-projects__title title">{{ title }}</p>
        <p v-if="subTitle" class="type-projects__subtitle">{{subTitle}}</p>
      </div>

      <div class="type-projects__wrapper-cards">
        <div v-for="(item, index) in list" :key="item.id" class="type-projects__card-project">
          <div class="type-projects__number">{{ getNumber(index) }}</div>
          <div v-if="item.title" class="type-projects__wrapper-title">
            <h3 class="type-projects__name-project">{{item.title}}</h3>
          </div>
          <p v-if="item.description" class="type-projects__description" :class="{'_gray': !!item.title}" v-html="item.description"></p>
        </div>
        <div class="type-projects__feedback">
          <p class="type-projects__feedback-description">Остались вопросы? Напишите нам в свободной форме, и менеджер обязательно перезвонит, чтобы разобраться в вашей ситуации</p>
          <button class="button-dark left-icon" @click.stop.prevent="openFeedbackModal">
            <svg class="button-light__img" xmlns="http://www.w3.org/2000/svg" width="5" height="10" viewBox="0 0 6.591 11.061" style="width:5px !important; height:10px !important;">
              <path d="M20,20.331l5-5-5-5" transform="translate(-19.47 -9.801)" fill="none" stroke="inherit" stroke-miterlimit="10" stroke-width="1.5"></path>
            </svg>

            <span class="button-dark__text">Заполнить форму</span>
          </button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {serviceTypeListModel} from "~/models/services";
import bodyLock from "~/mixins/bodyLock";

export default {
  name: "TypeListSection",
  props: {
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    elements: {
      type: Array,
      default: () => []
    }
  },
  mixins: [bodyLock],
  computed: {
    list() {
      return serviceTypeListModel(this.elements);
    }
  },
  methods: {
    getNumber(index) {
      return String(index+1).padStart(2, "0");
    },
    openFeedbackModal() {
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
@import "@/assets/scss/style/components/type-project.scss";
</style>
