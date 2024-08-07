<template>
  <div class="payment">
    <div class="container">

      <div class="payment__wrap-title">

        <h2 class="payment__title title">{{ title }}</h2>
        <div v-if="blockInfo" class="payment__hint">
          <SvgIcon  name="icon-info" width="16" height="16" />
          <div class="payment__tooltip">
            <p v-html="blockInfo" />
          </div>
        </div>
      </div>
      <div class="payment__pay-block"  :class="{_four: paymentList.length === 4}">
          <div  v-for="item in paymentList" :key="item.id" class="payment__block-price">
            <h3 class="payment__header">{{item.title}}</h3>
            <p v-if="item.description" class="payment__description" v-html="item.description" />
            <div v-if="item.costCaption || item.price" class="payment__inner-price">
              <p v-if="item.costCaption" class="payment__hourly-cost">{{ item.costCaption }}</p>
              <p v-if="item.price || item.price === 0" class="payment__price">{{ item.price }}
                <span class="payment__currency">
                  <img src="@/static/img/ruble.svg" alt="рублей">
                </span>
              </p>
            </div>
          </div>
      </div>
    </div>
  </div>

</template>

<script>
import {API_URLS} from "~/constant/apiUrls";
import {paymentModel, paymentServiceDetail} from "~/models/services";

export default {
  name: "PaymentInfoSection",
  props: {
    isFetch: {
      type: Boolean,
      default: true
    },
    titleProps: String,
    paymentListProps: Array,
    subTitle: String
  },
  data() {
    return {
      title: 'Оплата',
      blockInfo: '',
      paymentList: [],
      paymentLimit: 12,
    }
  },
  async fetch() {
    if (!this.isFetch) {
      return;
    }

    await this.$axios.get(API_URLS.services.payment, {
      params: {
        limit: this.paymentLimit
      }
    })
      .then(response => {
        const data = response?.data?.data;
        const paymentData = paymentModel(data);
        this.title = paymentData.title;
        this.blockInfo = paymentData.blockInfo;
        this.paymentList = paymentData.paymentList;
      })
      .catch(error => {
        console.log(error);
        this.clearData();
      });
  },
  mounted() {
    if (this.titleProps) {
      this.title = this.titleProps;
    }

    if (this.subTitle) {
      this.blockInfo = this.subTitle;
    }

    if (this.paymentListProps  && this.paymentListProps.length > 0) {
      const result = paymentServiceDetail(this.paymentListProps);
      if (this.paymentListProps[0].sort  !== undefined) {
        result.sort((a,b) =>  a.sort - b.sort);
      }

      this.paymentList = result;

    }
  },
  methods: {
    clearData() {

      this.title = 'Оплата';
      this.blockInfo = '';
      this.paymentList = [];
    }
  }

}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/components/payment.scss";
</style>

