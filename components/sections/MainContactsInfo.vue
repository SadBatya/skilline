<template>
  <div class="header-contacts">
    <div class="container">
      <div class="header-contacts__wrap">
        <div v-if="slogan" class="header-contacts__signature">
          <p >{{slogan}}</p>
        </div>
<!--        <div v-if="phone || email" class="header-contacts__connection">-->
<!--          <a v-if="phone"  :href="`tel:${phone}`">{{phone}}</a>-->
<!--          <a v-if="email" :href="`mailto:${email}`">{{email}}</a>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainContactsInfo",
  async fetch() {
    await this.$store.dispatch('main/getMainData');
  },
  computed: {
    // phone() {
    //   return this.$store.state.main.main?.phone || '';
    // },
    // email() {
    //   return this.$store.state.main.main?.email || '';
    // },
    slogan() {
      return this.$store.state.main.main?.description || 'Aнализируем. Проектируем. Создаём.';

      // return slogan
      //   .split('.')
      //   .map(word => word.trimStart() + '.')
      //   .filter(word => word.trim() !== '.');
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/components/header-contacts.scss";
</style>
