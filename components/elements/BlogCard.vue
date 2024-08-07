<template>
  <div :class="`${classMain}__card ${classMod}`">
    <NuxtLink :to="urlDetail(item)" class="blog__card-link">
      <div :class="`${classMain}__wrap-img`">
        <img v-if="item.image" :src="item.image" alt="">
      </div>
      <p :class="`${classMain}__description`">{{item.title}}</p>
      <div class="service-block__btn-more">
        <span class="service-block__btn-text">Подробнее</span>
        <div class="service-block__wrap-btn">
          <span class="service-block__line-arrow"></span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.062 4.601">
            <g transform="translate(0.479 0.577)">
              <path d="M0,0,3.652,3.037,7.085,0" fill="none" stroke="inherit" stroke-width="1.5" />
            </g>
          </svg>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
import {ROUTS_PATH} from "~/constant/routs";

export default {
  name: "BlogCard",
  props: {
    classMod: {
      type: String,
      default: ''
    },
    item: {
      type: Object,
      required: true
    },
    classMain: {
      type: String,
      default: 'blog-page'
    }
  },
  methods: {
    urlDetail(item) {
      if (item.code) {
        return ROUTS_PATH.blog.detail(item.code);
      }

      return {path: ROUTS_PATH.blog.detailId(item.id), query: {isId: "Y"}};
    }
  }
}
</script>

<style scoped>

</style>
