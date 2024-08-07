import Vue from 'vue';
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize,
} from 'vee-validate';
import ru from 'vee-validate/dist/locale/ru.json';
import { required, email, image, size, numeric, min } from 'vee-validate/dist/rules';
// import { unmask, phoneMask } from '@/constant/common';

localize('ru', ru);

// No message specified.
extend('email', { ...email, message: 'Неккоректно введен Email' });

// Override the default message.
extend('required', {
  ...required,
  message: 'Поле обязательно для заполнения',
});

extend('min', {
  ...min,
  message: 'Поле должно содержать не менее {length} символов',
});

extend('image', {
  ...image,
  message: 'файл должен быть картинкой',
});

extend('size', {
  ...size,
  message: 'Файл не должен превышать 10Mb',
});
// Override the default message.
extend('numeric', {
  ...numeric,
  message: 'Поле должно быть числом',
});

// custom Validations

extend('phone', {
  validate: (value) => {
    return String(value).length >= 10;
  },
  message: 'Некорректно введен телефон',
});

extend('password', {
  validate: (value) => {
    const reg = /[A-zА-я]\d|\d[A-zА-я]/gm;
    return value.length >= 8 && reg.test(value);
  },
  message: 'Не выполнены все условия пароля',
});

extend('setPassword', {
  params: ['target'],
  validate(value, { target }) {
    return value === target;
  },
  message: 'Пароли не совпадают',
});

extend('checkboxReq', {
  validate(value) {
    return !!value;
  },
  message: 'Обязательно поле',
});

extend('url', {
  validate: (value) => {
    const reg = /(?:(?:http|https):\/\/)/gm;
    const test = reg.test(value);
    return test;
  },
  message: 'Некорректно введен адрес сайта',
});

extend('urlFB', {
  validate: (value) => {
    const reg =
      /(?:(?:http|https):\/\/|)(?:www.|m.|)(?:facebook.|fb.)(?:com|me)/gm;
    const test = reg.test(value);
    return test;
  },
  message: 'Некорректно введен аккаунт Facebook',
});

extend('urlVK', {
  validate: (value) => {
    const reg = /(?:(?:http|https):\/\/|)(?:www.|m.|)(?:vk.)(?:com|ru)/gm;
    const test = reg.test(value);
    return test;
  },
  message: 'Некорректно введен аккаунт VK',
});

extend('urlInst', {
  validate: (value) => {
    const reg =
      /(?:(?:http|https):\/\/|)(?:www.|)(?:instagram.com|instagr.am)/gm;
    const test = reg.test(value);
    return test;
  },
  message: 'Некорректно введен аккаунт Instagramm',
});

extend('minValue', {
  // eslint-disable-next-line camelcase
  params: ['minValue'],
  validate: (value, { minValue }) => {
    return Number(value) >= Number(minValue);
  },
  message: 'Минимально значение должно быть {minValue}',
});

extend('maxValue', {
  // eslint-disable-next-line camelcase
  params: ['maxValue'],
  validate: (value, { maxValue }) => {
    return Number(value) <= Number(maxValue);
  },
  message: 'Максимальное значение должно быть  {maxValue}',
});

extend('rangeAge', {
  // eslint-disable-next-line camelcase
  params: ['minAge'],
  validate: (value, { minAge }) => {
    return Number(value) >= Number(minAge);
  },
  message: 'Значение должно быть не меньше минимального возраста',
});

extend('inn', {
  validate: (value) => {
    if (value.length !== 10 && value.length !== 12) {
      return false;
    }

    const checkDigit = function (inn, coefficients) {
      let n = 0;
      for (const i in coefficients) {
        n += coefficients[i] * inn[i];
      }
      return parseInt((n % 11) % 10);
    };

    if (value.length === 10) {
      const n10 = checkDigit(value, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
      if (n10 !== parseInt(value[9])) {
        return false;
      }
    }

    if (value.length === 12) {
      const n11 = checkDigit(value, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
      const n12 = checkDigit(value, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
      if (n11 !== parseInt(value[10]) || n12 !== parseInt(value[11])) {
        return false;
      }
    }
    return true;
  },
  message: 'Некорректно введен ИНН',
});

extend('kpp', {
  validate: (value) => {
    if (!/^[0-9]{4}[0-9A-Z]{2}[0-9]{3}$/.test(value)) {
      return false;
    }
    return true;
  },
  message: 'Некорректно введен КПП',
});

extend('ogrn', {
  validate: (value) => {
    if (value.length !== 13) {
      return false;
    }
    return true;
  },
  message: 'Некорректно введен ОГРН',
});

extend('maxLength', {
  params: ['maxLength'],
  validate(value, { maxLength }) {
    return value.length <= maxLength;
  },
  message: 'Должно быть не более {maxLength} символов',
});

// Register it globally
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
