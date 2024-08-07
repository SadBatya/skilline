<template comments>
  <div class="pf-header" :style="{backgroundImage: bgImage ? `url(${bgImage})` : null}">
    <div class="pf-header__header" :style="{backgroundImage: bgImageSecond ? `url(${bgImageSecond})` : null}">
      <div class="pf-container">
        <h1 v-if="title" class="pf-header__title">{{ title }}</h1>
        <p v-if="info.description" class="pf-header__description">{{info.description}}</p>
      </div>
    </div>
    <div v-if="isBottomBlock" class="pf-header__about-project">
      <div class="pf-container">
        <div class="pf-header__des-project">
          <div v-if="isLeftBottomBlock" class="pf-header__info">
            <p class="pf-header__subtitle">Клиент</p>
            <div v-if="info.logo" class="pf-header__wrap-logo">
              <img :src="info.logo" alt="Логотип компании">
            </div>
            <p v-if="info.secondDescription" class="pf-header__description">{{info.secondDescription}}</p>
            <template v-if="info.urls && info.urls.length">
              <template v-for="url in info.urls">
                <!--noindex-->
                <a v-if="url.path" :key="url.path" :href="url.path" class="portfolio__project-link" target="_blank">
                  <span>{{url.title || title}}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="13.5" height="13.5" viewBox="0 0 13.5 13.5">
                    <g transform="translate(0.75 0.75)">
                      <g transform="translate(5.366 0.068)">
                        <path d="M629.828,72.172h4.331V76.5" transform="translate(-627.663 -72.172)"
                              fill="none" stroke="inherit" stroke-miterlimit="10" stroke-width="1.5"/>
                        <line x1="6.497" y2="6.497" fill="none" stroke="inherit" stroke-miterlimit="10"
                              stroke-width="1.5"/>
                      </g>
                      <path d="M623,78.8V84H611V72h5.2" transform="translate(-611 -72)" fill="none"
                            stroke="inherit" stroke-miterlimit="10" stroke-width="1.5"/>
                    </g>
                  </svg>
                </a>
                <!--/noindex-->
              </template>
            </template>
          </div>
          <slot name="task"></slot>
        </div>
        <div v-if="info.stack.length || info.tags.length" class="pf-header__tags">
          <div v-if="info.stack.length" class="pf-header__info">
            <p class="pf-header__subtitle">стек технологий</p>
            <div class="pf-header__tags-row">
              <div v-for="(stack, i) in info.stack" :key="i"  class="pf-header__tag" >{{stack}}</div>
            </div>
          </div>
          <div v-if="info.tags.length" class="pf-header__info">
            <p class="pf-header__subtitle">теги проекта</p>
            <div class="pf-header__tags-row">
              <div v-for="(tag, i) in info.tags" :key="i"  class="pf-header__tag" >{{tag}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderSection",
  props: {
    info: {
      type: Object,
      default: () => ({})
    },
    title: {
      type: String,
      default: '',
    },
    bgImage: {
      type: String,
      default: ''
    },
    bgImageSecond: {
      type: String,
       default: ''
    }
  },
  computed: {
    isBottomBlock() {
      const { secondDescription, logo, tags, stack, site } = this.info;
      return secondDescription || logo || tags?.length || stack?.length || site?.path || this.$slots.task;
    },
    isLeftBottomBlock() {
      const { secondDescription, logo, site } = this.info;
      return secondDescription || logo || site?.path || this.$slots.task;
    }
  }
}
</script>

<style scoped>

</style>
