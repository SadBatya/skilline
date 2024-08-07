<template>
  <div class="clients">
    <div class="container">
      <p class="clients__title title">{{title}}</p>
      <ul class="clients__list">
        <li class="clients__item" v-for="client in clients" :key="client.id" >
          <div class="clients__card">
            <NuxtImg
              :src="client.logo"
              :alt="client.title"
              :style="getStyle(client)"
              placeholder/>
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
import {API_URLS} from "~/constant/apiUrls";
import {ourClientsModel} from "~/models/aboutUs";

export default {
  name: "OurClients",
  data() {
    return {
      title: "Клиенты",
      clients: [],
    }
  },
  async fetch() {
    await this.$axios.get(API_URLS.aboutUs.clients, {params: { limit: 100}})
      .then(res => {
        const result = ourClientsModel(res?.data?.data);
        this.title = result.title;
        this.clients = result.clients || [];
      })
      .catch(err => {
        console.log(err);
        this.clients = [];
      })
  },
  methods: {
    getStyle(item) {
      return {
        width: item?.percentSize?.width || null,
        height: item?.percentSize?.height || null
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/components/clients.scss";
</style>
