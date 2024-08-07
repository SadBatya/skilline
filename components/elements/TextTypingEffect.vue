<template>
  <client-only>
    <p v-if="words && words.length" :class="classMod">{{ text }}</p>
  </client-only>
</template>

<script>
export default {
  name: "TextTypingEffect",
  props: {
    classMod: [String, Object],
    words: Array,
    delayTyping: Number,
    delayErasing: Number,
    delayNextWord: Number,
  },
  data() {
    return {
      defaultDelayTyping: 200,
      defaultDelayErasing: 80,
      defaultDelayNextWord: 1500,
      timeOutType: null,
      timeOutErase: null,
      chartIndex: 0,
      wordIndex: 0,
      text: '',
    }
  },
  mounted() {
    this.$nextTick().then(() => {
      this.type();
    });
  },
  computed: {
    delayObj() {
      return {
        type: this.delayTyping !== undefined  ? this.delayTyping : this.defaultDelayTyping,
        erase: this.delayErasing !== undefined ? this.delayErasing : this.defaultDelayErasing,
        next: this.delayNextWord !== undefined ?  this.delayNextWord : this.defaultDelayNextWord
      }
    }
  },
  methods: {
    type() {
      clearTimeout(this.timeOutErase);
      const curWord = this.words[this.wordIndex];
      if (this.chartIndex < curWord.length) {
          this.text += curWord.charAt(this.chartIndex);
          this.chartIndex++;
          this.timeOutType = setTimeout(this.type, this.delayObj.type);
          return;
      }

      this.timeOutErase = setTimeout(this.erase, this.delayObj.next);
    },
    erase() {
      const curWord = this.words[this.wordIndex];
      if (this.chartIndex > 0) {
          this.text = curWord.substring(0, this.chartIndex-1);
          this.chartIndex--;
          this.timeOutErase = setTimeout(this.erase, this.delayObj.erase);
          return;
      }

      this.wordIndex++;

      if (this.wordIndex >= this.words.length) {
        this.wordIndex = 0;
      }

      this.timeOutType = setTimeout(this.type, this.delayObj.type);
    }
  }
}
</script>

<style scoped>

</style>
