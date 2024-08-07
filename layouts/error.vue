<template>
  <div class="error-page">
    <div class="container">
      <div v-if="error && error.statusCode === 404" class="error-page__content">
        <h1  class="error-page__title">404</h1>
        <p class="error-page__subtitle">{{ error404 }}</p>
        <NuxtLink class="button-light _no-max" :to="homePath">
          <svg class="button-light__img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               width="34.835" height="24" viewBox="0 0 34.835 24">
            <defs>
              <clipPath>
                <rect width="24" height="34.835" fill="none" stroke="inherit" stroke-width="1.5" />
              </clipPath>
            </defs>
            <g transform="translate(0)">
              <g transform="translate(34.835) rotate(90)">
                <g clip-path="url(#clip-path)">
                  <path
                    d="M9.723,3.3A2.261,2.261,0,0,0,7.662,1a2.178,2.178,0,0,0-2.3,2.175V20.594l-.01-2.177a4.975,4.975,0,0,0-3.4-4.719.728.728,0,0,0-.958.69v6.835a7.979,7.979,0,0,0,1.113,4.064l2.859,4.833a2.389,2.389,0,0,1,.335,1.221v2.315H19.862V30.975a1.478,1.478,0,0,1,.109-.557l2.1-5.169a10.174,10.174,0,0,0,.749-3.831V14.224a2.261,2.261,0,0,0-2.061-2.3A2.178,2.178,0,0,0,18.467,14.1l-.011,1.461V12.769a2.261,2.261,0,0,0-2.061-2.3,2.178,2.178,0,0,0-2.3,2.175l-.011,2.916V11.313a2.26,2.26,0,0,0-2.061-2.3A2.177,2.177,0,0,0,9.734,11.19l-.011,4.357V3.3Z"
                    transform="translate(0.089 0.089)" fill="none" stroke="inherit" stroke-miterlimit="10"
                    stroke-width="1.5" />
                </g>
              </g>
            </g>
          </svg>
          <span class="button-light__text">Перейти на главную</span>
        </NuxtLink>
      </div>
      <div v-else class="error-page__content">
        <h1  class="error-page__title">{{ error.statusCode }}</h1>
        <NuxtLink  class="button-light _no-max" :to="homePath">
          <SvgIcon name="icon-hand-right" class="button-light__img" width="34" height="24" />
          <span class="button-light__text">Перейти на главную</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>

import {ROUTS_PATH} from "~/constant/routs";

export default {
  props: {
    error: {
      type: [Error, Object],
      default: () => ({})
    }
  },
  data() {
    return {
      errorDefault: 'Что то пошло не так...',
      error404: 'Страница не найдена',
      homeLink: 'Главная',
      homePath: ROUTS_PATH.main,
    }
  },
}
</script>


<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/components/404.scss";
</style>
