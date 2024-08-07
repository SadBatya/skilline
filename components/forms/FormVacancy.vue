<template>
  <div>
    <p class="popup__title">Форма связи</p>
    <ValidationObserver
      ref="feedbackForm"
      v-slot="{ handleSubmit }"
      slim
    >
      <form class="form" @submit.prevent="handleSubmit(onSubmit)">
        <div v-if="requestForm.length" class="form__group form__request-error">
          <template v-for="(errors, id) in requestForm">
            <template v-if="Array.isArray(errors)">
              <p v-for="(err, index) in errors" :key="`main-${id}-${index}`">{{ err }}</p>
            </template>
            <p v-else :key="`main-${id}`">{{ errors }}</p>
          </template>
        </div>
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
            :class="{ 'error': validated && errors.length > 0, '_success': validated &&  errors.length === 0  }"
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
        <div class="form__wrap">
          <ValidationProvider
            v-slot="{ validated, errors }"
            name="email"
            :rules="{ required: true, email: true }"
            tag="div"
            class="form__group"
          >
            <input
              id="form-vacancy-email"
              type="text"
              class="form__input"
              :class="{ 'error': validated && errors.length > 0, '_success': validated &&  errors.length === 0  }"
              v-model="email">
            <label
              for="form-feedback-email"
              class="form__label"
              :class="{value: email.length}"
            >Email <span>*</span></label>
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
              id="form-vacancy-phone"
              type="number"
              class="form__input"
              :class="{ 'error': validated && errors.length > 0, '_success': validated &&  errors.length === 0  }"
              v-model.number="phone"
            >
            <label
              for="form-vacancy-phone"
              class="form__label"
              :class="{value: phone}"
            >Телефон <span>*</span>
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
          name="message"
          :rules="{  min: {length: 10} }"
          tag="div"
          class="form__group"
        >
          <textarea
            id="form-vacancy-message"
            class="form__textarea"
            v-model="message"
            :class="{ 'error': validated && errors.length > 0, '_success': validated &&  errors.length === 0  }"

          />
          <label
            for="form-vacancy-message"
            class="form__label"
            :class="{value: message.length}"
          >Сообщение <span>*</span></label>
          <span
            v-if="validated && errors.length > 0"
            class="error error-text"
          >{{ errors[0] }}</span
          >
        </ValidationProvider>
        <div class="form__wrap">
          <ValidationProvider
            v-slot="{ validated, errors }"
            name="resumeFile"
            ref="resumeFile"
            :rules="{size: 10240}"
            tag="div"
            class="form__group form__group-file"
          >
            <label class="form__file">
              <input
                id="form-resume-file"
                type="file"
                class="form__file-input"
                :class="{
                  'error': validated && errors.length > 0,
                  '_success': validated &&  errors.length === 0
                }"
                @change="uploadResume"
              >
              <template v-if="resumeFileData && resumeFileData.length">
                <span class="form__file-text _uploaded">
                  <span class="form__file-value">{{ resumeFileData[0].name }}</span>
                </span>
                <button class="form__file-del" type="button" @click.prevent.stop="clearFileInput">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11.061" height="11.061" viewBox="0 0 11.061 11.061">
                    <g transform="translate(0.53 0.53)">
                      <path d="M9.172,19.172l5-5m5-5-5,5m0,0-5-5m5,5,5,5" transform="translate(-9.172 -9.172)"
                            fill="none" stroke="inherit" stroke-linejoin="round" stroke-width="1.5"></path>
                    </g>
                  </svg>
                </button>
              </template>

              <span v-else class="form__file-text">Загрузить резюме</span>
            </label>
            <span
              v-if="validated && errors.length > 0"
              class="error error-text"
            >{{ errors[0] }}</span
            >
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ validated, errors }"
            name="resumeLink"
            :rules="{}"
            tag="div"
            class="form__group"
          >
            <input
              id="form-resume-url"
              type="text"
              class="form__input"
              :class="{ 'error': validated && errors.length > 0, '_success': validated &&  errors.length === 0  }"
              v-model="resumeUrl"
            >
            <label
              for="form-resume-url"
              class="form__label"
              :class="{value: resumeUrl}"
            >Ссылка на резюме</label>
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
          <input id="form-vacancy-personal-data" type="checkbox" class="form__checkbox" v-model="agreement">
          <label for="form-vacancy-personal-data" class="form__personal-data">
            <template>Согласие на</template>
            <a v-if="privacyFile" :href="privacyFile" target="_blank" download="">обработку персональных
              данных</a>
            <template v-else>обработку персональных
              данных
            </template>
          </label>
          <span
            v-if="validated && errors.length > 0"
            class="error error-text"
          >{{ errors[0] }}</span>
        </ValidationProvider>

        <button type="submit" class="button-light  hover-green" :disabled="isRequestForm">
          <SvgIcon class="button-light__img" name="icon-hand-right" width="24" height="24"/>
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
  name: "formContacts",
  mixins: [bodyLock],
  props: {
    isModal: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      title: "Форма связи",
      name: '',
      email: '',
      phone: '',
      message: '',
      agreement: false,
      isRequestForm: false,
      requestForm: [],
      resumeFileData: null,
      resumeUrl: ''
    }
  },
  computed: {
    privacyFile() {
      const contacts = this.$store.state.contacts.contacts;
      if (contacts.privacyFile) {
        return contacts.privacyFile;
      }

      return null;
    },
    vacancyCode() {
      let vacancyCode = null;
      if (this.$store.state.modals.showModalVacancyDetail) {
        vacancyCode = this.$store.state.modals.modalVacancyDetailCode;
      } else {
        vacancyCode = this.$route.params.code;
      }
      return vacancyCode
    }
  },
  methods: {
    async onSubmit() {
      this.isRequestForm = true;
      const phoneUnmask = this.phone;
      const privacy = this.agreement ? 1 : 0;

      const data = new FormData(); // создаем объект FormData
      data.append('name', this.name);
      data.append('email', this.email);
      data.append('phone', phoneUnmask);
      data.append('message', this.message);
      data.append('privacy_policy', privacy);
      data.append('vacancy_code', this.vacancyCode);
      data.append('url', this.$route.fullPath);
      if (this.resumeFileData && this.resumeFileData.length) {
        data.append('resume', this.resumeFileData[0]);
      }
      data.append('resume_url', this.resumeUrl);

      try {
        await this.$axios.post(API_URLS.forms.vacancy, data);
        this.$refs.feedbackForm.reset();
        this.clearForm();
        this.successRequest();
      } catch (e) {
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
        title: 'Ваш резюме успешно отправлено!',
        content: '<p>Мы свяжемся с Вами в ближайшее время</p>',
      });
      this.$emit("submitSuccess");
    },
    errorRequest(err) {
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
          })
        }
      }
    },
    clearForm() {
      this.name = '';
      this.email = '';
      this.phone = '';
      this.message = '';
      this.agreement = false;
      this.isRequestForm = false;
      this.resumeFileData = null;
      this.resumeUrl = '';
    },
    async uploadResume(e) {
      if (!e) {
        return;
      }
      const files = e.target.files;
      const ref = this.$refs.resumeFile;
      if (!ref || !files  || files.length === 0) {
        this.resumeFileData = null;
        return;
      }

      const validator = await ref.validate(e);
      if (validator.valid) {
        this.resumeFileData = files;
      } else {
        this.resumeFileData = null;
      }
    },
    clearFileInput() {
      this.resumeFileData = null;
    }
  }
}
</script>
