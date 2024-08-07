// plugins/jsonld.js
import Vue from 'vue';
import NuxtJsonld from 'nuxt-jsonld';

Vue.use(NuxtJsonld);


// for nuxt-bridge
// export default defineNuxtPlugin(nuxtApp => {
//   if (typeof NuxtJsonld.default !== 'undefined')  {
//     nuxtApp.vueApp.use(NuxtJsonld.default)
//   }
// })
