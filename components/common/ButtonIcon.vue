<template>
  <component :is="tagName" type="button" :class="`${classMain} ${classMod}`" @click="clickComponent">
    <SvgIcon :class="`${classParent}__img`" :name="svgObj.name" :width="svgObj.width" :height="svgObj.height" />
    <span :class="`${classParent}__text`">{{ textButton }}</span>
  </component>
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
  name: "ButtonIcon",
  props: {
    tagName: {
      type: String,
      default: 'button'
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
    },
    handlerClick: Function
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
    },
  },
  methods: {
    clickComponent(e) {
      if (this.handlerClick) {
        this.handlerClick(e);
      }
    }
  }
}
</script>
