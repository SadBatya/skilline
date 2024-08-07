<template>
  <div class="popup__main">
    <div class=" two-column">
      <div class="popup__contacts contact">
        <p class="popup__title">{{ title }}</p>
        <address v-if="contacts.address" class="contact__address">{{contacts.address}}</address>
        <a v-if="contacts.phone" :href="`tel:${contacts.phone.trim()}`" class="contact__communication">{{contacts.phone}}</a>
        <a v-if="contacts.email" :href="`mailto:${contacts.email}`" class="contact__communication">{{contacts.email}}</a>
        <div class="contact__text">
          <template v-if="contacts.descriptionList && contacts.descriptionList.length">
            <p v-for="(item,index) in contacts.descriptionList" :key="index" class="contact__text-item">{{item}}</p>
          </template>
          <p v-if="contacts.timeText && contacts.timezone" class="contact__line"> {{contacts.timeText}} <span>{{timeString}}</span></p>
        </div>

      </div>
      <div class="popup__form">
        <FormContacts />
      </div>
    </div>

  </div>
</template>

<script>
import getTime from "date-fns/getTime";
import {zonedTimeToUtc} from "date-fns-tz";
import {API_URLS} from "~/constant/apiUrls";
import FormContacts from "~/components/forms/FormContacts";

export default {
  name: "ContactsSection",
  components: {FormContacts},
  async fetch() {
    try {
      await this.$store.dispatch('contacts/fetchContacts');
    } catch(e) {
      console.error(e);
    }
  },
  data() {
    return {
      title: "Контакты",
      intervalStart: null,
      timeJs: null,
      timeString: ''
    }
  },
  computed: {
    contacts() {
      return this.$store.state.contacts.contacts;
    },
  },
  watch: {
    async contacts() {
      await this.setTimeJs();
    },
  },
  async mounted() {
    await this.setTimeJs();
  },
  methods: {
    async setTimeJs() {
      this.timeString = '';
      this.intervalStart = null;
      if (!this.contacts.timezone) {
        this.timeJs = null;
        return;
      }
      await this.$axios.$get(API_URLS.getTime(this.contacts.timezone), {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          'Access-Control-Allow-Headers': 'append,delete,entries,foreach,get,has,keys,set,values,Authorization',
          'Origin': process.env.siteUrl// *GET, POST, PUT, DELETE, etc.
        }
      })
        .then(
          (res) => {
            this.timeJs = res?.data?.dateTime || null;
          }
        ).catch(e => {
            console.log(e);
            this.timeJs = zonedTimeToUtc(new Date(), this.contacts.timezone);
          }
        )

      this.startTime();
    },
    startTime() {
      clearInterval(this.intervalStart);
      const time =  getTime(new Date(this.timeJs));
      let counter = 0
      this.timeString = new Date(time + counter).toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit'});
      this.intervalStart = setInterval(() => {
        counter = counter + 5000;
        this.timeString = new Date(time + counter).toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit'});
      }, 5000)
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/components/popup-contacts.scss";
@import "@/assets/scss/style/components/popup.scss";
</style>
