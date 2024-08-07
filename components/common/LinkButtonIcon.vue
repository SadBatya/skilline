<template>
  <NuxtLink :class="`${classMain} ${classMod}`" :to="path">
    <SvgIcon :class="`${classParent}__img`" :name="svgObj.name" :width="svgObj.width" :height="svgObj.height"/>
    <span :class="`${classParent}__text`">{{ textButton }}</span>
  </NuxtLink>
</template>
<script>
/**
 * Компонент кнопки с иконкой
 *
 * @vue-props {string} classMod - класс кнопки
 * @vue-props {Object} svgIcon - иконка кнопки
 */
/**
 * @typedef {Object} svgIcon
 * @property {string} name - наименование svg с папки sprite
 * @property {string} width - ширина иконки
 * @property {string} height - высота иконки
 */
export default {
  name: "LinkButtonIcon",
  props: {
    path: {
      type: [String, Object],
      required: true
    },
    classMod: {
      type: String,
      default: ''
    },
    svgObj: {
      type: Object,
      required: true,
      default: () => ({})
    },
    textButton: {
      type: String,
      required: true,
    },
    mode: {
      type: String,
      default: 'light',
    }
  },

  computed: {
    classMain() {
      if (this.mode === 'green') {
        return 'button-green';
      }

      if (this.mode === 'dark') {
        return 'button-dark'
      }

      return 'button-light';
    },
    classParent() {
      if (this.mode === 'dark') {
        return 'button-dark';
      }

      return 'button-light';
    }
  }
}
</script>
