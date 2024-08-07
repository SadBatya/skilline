<template>
  <div v-if="list && list.length" class="our-advantages">
    <div class="container">
      <div v-if="title || subTitle" class="our-advantages__wrap-title" :class="{'_no-title': !title}">
        <h2 v-if="title" class="our-advantages__title title">{{ title }}</h2>
        <p v-if="subTitle" class="our-advantages__subtitle" v-html="subTitle" />
      </div>
      <ul class="our-advantages__wrapper-cards">
        <li v-for="item in list" :key="item.id" class="our-advantages__card">
          <div v-if="item.image" class="our-advantages__wrap-img">
            <img :src="item.image" alt="">
          </div>
          <h3 v-if="item.title" class="our-advantages__name-project">{{item.title}}</h3>
          <p v-if="item.description" class="our-advantages__description">{{item.description}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {advantagesModel} from "~/models/services";

export default {
  name: "AdvantagesSection",
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
  computed: {
    list() {
      return advantagesModel(this.elements);
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/components/our-advantages.scss";
</style>
