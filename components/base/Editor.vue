<!-- eslint-disable vue/no-v-html -->
<template>
    <div class="content-page">
        <div class="text-block" v-html="htmlBlocks"></div>
    </div>
</template>

<script>

export default {
  name: "EditorHTML",
  props: {
    content: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      isHLJS: false,
      isCopyPlugin: false,
      isNumberPlugin: false,
    }
  },
  computed: {
    isScriptsLoaded() {
      return this.isHLJS && this.isCopyPlugin && this.isNumberPlugin;
    },
    htmlBlocks() {
      if (!this.$edHtml) {
        return ''
      }

      if (!Object.keys(this.content).length) return '';

      const html = this.$edHtml.parse(this.content);
      if(html && html.length) {
        return html.join('');
      }
      return ''
    },
  },
  watch: {
    // $hljs() {
    //   this.$hljs.highlightAll();
    // }
  },

  mounted() {
    this.$nextTick().then(() => {
      console.log('ttt');

    });


  },
  methods: {
    initHLJS() {
      clearTimeout(this.timerHLJS)
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/common/editor.scss";
@import "@/assets/css/appertice.css";
</style>
