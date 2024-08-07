<template>
  <div>
    <p class="popup__title">Разрешение на портфолио</p>
    <p v-if="worksChoice && worksChoice.title" class="popup__sub-title">{{ worksChoice.title }}</p>
    <ValidationObserver
      ref="ndaForm"
      v-slot="{ handleSubmit }"
      slim
    >
      <form class="form" @submit.prevent="handleSubmit(onSubmit)">
        <div v-if="requestForm.length" class="form__group form__request-error">
          <template v-for="(errors, id) in requestForm" >
            <template v-if="Array.isArray(errors)">
              <p v-for="(err, index) in errors" :key="`main-${id}-${index}`">{{err}}</p>
            </template>
            <p v-else :key="`main-${id}`">{{ errors }}</p>
          </template>
        </div>

        <div class="form__wrap">
          <ValidationProvider
            v-slot="{ validated, errors }"
            name="name"
            :rules="{ required: true }"
            tag="div"
            class="form__group"
          >
            <input
              id="form-feedback-name"
              type="text"
              class="form__input"
              :class="{ 'error': validated && errors.length > 0, '_success': validated &&  errors.length === 0 }"
              v-model="name">
            <label
              for="form-feedback-name"
              class="form__label"
              :class="{value: name.length}"
            >Ваше имя <span>*</span></label>
            <span
              v-if="validated && errors.length > 0"
              class="error error-text"
            >{{ errors[0] }}</span
            >
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ validated, errors }"
            name="phone"
            :rules="{ required: true, phone: true }"
            tag="div"
            class="form__group"
          >
            <input
              id="form-feedback-phone"
              type="number"
              class="form__input"
              :class="{ 'error': validated && errors.length > 0, '_success': validated &&  errors.length === 0  }"
              v-model.number="phone"
            >
            <label
              for="form-feedback-phone"
              class="form__label"
              :class="{value: phone}"
            >Ваш телефон <span>*</span>
            </label>
            <span
              v-if="validated && errors.length > 0"
              class="error error-text"
            >{{ errors[0] }}</span
            >
          </ValidationProvider>
        </div>
        <ValidationProvider
          v-slot="{ validated, errors }"
          name="inn"
          :rules="{ required: true, inn: true}"
          tag="div"
          class="form__group"
        >
          <input
            id="form-feedback-name"
            type="text"
            class="form__input"
            :class="{ 'error': validated && errors.length > 0, '_success': validated &&  errors.length === 0  }"
            v-model="inn"
          >
          <label
            for="form-feedback-name"
            class="form__label"
            :class="{value: inn.length}"
          >ИНН <span>*</span></label>
          <span
            v-if="validated && errors.length > 0"
            class="error error-text"
          >{{ errors[0] }}</span
          >
        </ValidationProvider>
        <div class="form__wrap">
          <ValidationProvider
            v-slot="{ validated, errors }"
            name="companyPhone"
            :rules="{ required: true, phone: true}"
            tag="div"
            class="form__group"
          >
            <input
              id="form-feedback-name"
              type="number"
              class="form__input"
              :class="{ 'error': validated && errors.length > 0, '_success': validated &&  errors.length === 0  }"
              v-model="companyPhone"
            >
            <label
              for="form-feedback-name"
              class="form__label"
              :class="{value: companyPhone}"
            >Телефон компании <span>*</span></label>
            <span
              v-if="validated && errors.length > 0"
              class="error error-text"
            >{{ errors[0] }}</span
            >
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ validated, errors }"
            name="companyEmail"
            :rules="{ email: true }"
            tag="div"
            class="form__group"
          >
            <input
              id="form-feedback-phone"
              type="text"
              class="form__input"
              :class="{ 'error': validated && errors.length > 0, '_success': validated &&  errors.length === 0  }"
              v-model="companyEmail"
            >
            <label
              for="form-feedback-phone"
              class="form__label"
              :class="{value: companyEmail}"
            >Email компании</label>
            <span
              v-if="validated && errors.length > 0"
              class="error error-text"
            >{{ errors[0] }}</span
            >
          </ValidationProvider>
        </div>
        <ValidationProvider
          v-slot="{ validated, errors }"
          name="agreement"
          :rules="{ checkboxReq: true}"
          tag="div"
          class="form__inner"
        >
          <input id="form-feedback-personal-data" type="checkbox" class="form__checkbox" v-model="agreement">
          <label for="form-feedback-personal-data" class="form__personal-data">
            <template>Согласие на </template>
            <a v-if="privacyFile" :href="privacyFile" target="_blank" download="">обработку персональных
            данных</a>
            <template v-else>обработку персональных
              данных</template>
          </label>
          <span
            v-if="validated && errors.length > 0"
            class="error error-text"
          >{{ errors[0] }}</span>
        </ValidationProvider>

        <button type="submit" class="button-light  hover-green" :disabled="isRequestForm">
          <SvgIcon class="button-light__img" name="icon-hand-right" width="24" height="24" />
          <span class="button-light__text">Оставить запрос</span>
        </button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import {API_URLS} from "~/constant/apiUrls";
import bodyLock from "~/mixins/bodyLock";

export default {
  name: "FormNDA",
  mixins: [bodyLock],
  props: {
    isModal: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      title: "Форма связи",
      name: '',
      phone: '',
      companyPhone: '',
      companyEmail: '',
      inn: '',
      agreement: false,
      isRequestForm: false,
      requestForm: [],
    }
  },
  computed: {
    worksChoice() {
      return  this.$store.state.modals.workChoice;
    },
    privacyFile() {
      const contacts = this.$store.state.contacts.contacts;
      if (contacts.privacyFile) {
        return contacts.privacyFile;
      }

      return null;
    }
  },
  methods: {
    clearForm() {
      this.name = '';
      this.phone = '';
      this.companyPhone = '';
      this.companyEmail = '';
      this.inn = '';
      this.agreement = false;
      this.isRequestForm = false;
    },
    async onSubmit() {
      this.isRequestForm = true;
      const phoneUnmask = this.phone;
      const phoneCompanyUnMask = this.companyPhone;

      const data = {
        "full_name": this.name,
        "people_phone": phoneUnmask,
        "company_phone": phoneCompanyUnMask,
        "company_email": this.companyEmail,
        "inn": this.inn,
        "works_code": this.worksChoice?.code || '',
        "url": this.$route.fullPath,
        "privacy_policy": this.agreement,
      };

      try {
        await this.$axios.post(API_URLS.forms.nda, data);
        this.$refs.ndaForm.reset();
        if (this.$yandexMetrika) {
          this.$yandexMetrika.reachGoal('click_form');
        }
        this.clearForm();
        this.successRequest();
      } catch(e) {
        let errorObj = null;
        if (e.response.data.message === "Validate error") {
          errorObj = e.response.data.errors;
        }
        this.errorRequest(errorObj);
      } finally {
        this.isRequestForm = false;
      }
    },
    successRequest() {
      this.requestForm = [];
      this.$store.dispatch('modalMessage/setModalContent', {
        title: 'Ваша заявка успешно отправлена!',
        content: '<p>Мы свяжемся с Вами в ближайшее время</p>',
      });
      this.toggleLockBody(true);
      this.$emit("submitSuccess");
    },
    errorRequest(err) {
      this.toggleLockBody(true);
      this.$emit("submitError");
      if (!this.isModal && !err) {
        this.$store.dispatch('modalMessage/setModalContent', {
          content: '<p>Что то пошло не так...</p>',
        });
      }

      if (err) {
        this.requestForm = Object.keys(err).map((key) => {
          return err[key];
        });
      }
      const form = this.$refs.feedbackForm;
      if (this.isModal && form) {
        const modalContent = form.$el.closest('.popup__content');
        if (modalContent) {
          modalContent.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }
    }
  }
}
</script>
