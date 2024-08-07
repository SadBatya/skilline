<template>
  <div class="logo__box-left">
    <div class="logo__btn-wrapper">
      <button
        class="logo__tab-btn"
        type="button"
        :class="{_active: activeBlock === 'word'}"
        @click.prevent="activeBlock = 'word'">Обозначения слова</button>
      <button
        class="logo__tab-btn"
        type="button"
        :class="activeBlock === 'space'"
        @click.prevent="activeBlock = 'space'">Правило пространства</button>
    </div>
    <div class="logo__content-logo">
      <div v-show="activeBlock === 'word'" class="logo__wrap-image">
        <img src="@/assets/img/brandbook/logo.svg" alt="logo">
      </div>
      <div v-show="activeBlock === 'space'" class="logo__wrap-image">
        <img src="@/assets/img/brandbook/logo2x.svg" alt="">
        <img src="@/assets/img/brandbook/logoSmall2x.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrandBookLogoBox",
  data() {
    return {
      activeBlock: 'word'
    }
  },
}
</script>

<style scoped>

</style>
