<template>
  <client-only>
    <component
      :is="tagName"
      v-custom-outside="handlerHideTooltip"
      class="tooltip"
      :class="classMod"
      @mouseenter.prevent="handlerMouseEnter"
      @mouseleave.prevent="handlerMouseLeave"
      @click="handlerToggleTooltip">
      <slot @click="$emit('click')"></slot>
      <div
        ref="tooltip"
        class="tooltip__body"
        :class="{
        _show: showTooltip,
        _big: isBigBody,
        _right: position.h === 'right',
        _bottom: position.v === 'bottom',
        }"
        :style="styleTooltip"
        style="position: fixed;">
        <span v-if="textTooltip" >{{ textTooltip }}</span>
        <slot name="tooltip"></slot>
      </div>
    </component>
  </client-only>

</template>

<script>

export default {
  name: "TooltipElement",
  props: {
    tagName: {
      type: String,
      default: 'div',
    },
    classMod: [String, Object],
    styleForTooltip: {
      type: [String, Object],
      default: '',
    },
    textTooltip: {
      type: String,
      default: '',
    },
    isFixed: {
      type: Boolean,
      default: true,
    },
    isMobileClick: {
      type: Boolean,
      default: true
    },
    isBigBody: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showTooltip: false,
      positionOption: {},
      timerTooltip: null,
      timeOut: 200,
      eventScroll: false,
      position: {
        v: 'left',
        h: 'top'
      }
    }
  },
  computed: {
    styleTooltip() {
      if (typeof this.styleForTooltip === 'string') {
        const posOptionString = Object.keys(this.positionOption).reduce((acum, key)=> {
          return acum + `${key} : ${this.positionOption[key]};`
        }, '')
        return posOptionString + this.styleForTooltip
      }

      return Object.assign(this.positionOption, this.styleForTooltip);
    },
  },
  watch: {
    showTooltip(val) {
      if (!val) {
        this.position = {
          v: 'top',
          h: 'left'
        }

        if (this.eventScroll) {
          document.removeEventListener('scroll', this.closeTooltip);
        }

        return;
      }
      // clear size
      const element = this.$el;
      const tooltip = this.$refs.tooltip;
      tooltip.style.width = null;
      tooltip.style.height = null;
      tooltip.style.left = null;
      tooltip.style.top = null;
      this.position = {
        v: 'top',
        h: 'left'
      }

      // get position fixed
      const htmlFontSize =  parseFloat(window.getComputedStyle(document.querySelector('html'), null).getPropertyValue('font-size'));
      const DIFF_TOP = htmlFontSize * 0.625; // px in to rem;
      const viewportOffset = element.getBoundingClientRect();
      const halfWidth = viewportOffset.width / 2;
      const heightTooltip = tooltip.offsetHeight;
      let widthTooltip = tooltip.offsetWidth;
      let left = viewportOffset.left + halfWidth;
      let top = viewportOffset.top - heightTooltip - DIFF_TOP;
      let headerHeight = 0;
      const header = document.querySelector('.header');

      if (header) {
        headerHeight = header.clientHeight;
      }

      if (widthTooltip < this.windowWidth - halfWidth) {
        tooltip.style.width = this.windowWidth - halfWidth - DIFF_TOP;
        widthTooltip = tooltip.offsetWidth;
      }
      if (top < DIFF_TOP + headerHeight) {
        top += heightTooltip + viewportOffset.height + (2 * DIFF_TOP);
        this.position.v = 'bottom';
      }

      const offsetLeft = widthTooltip + halfWidth + left - this.windowWidth;
      if (offsetLeft > 0) {
        left = left - widthTooltip;
        this.position.h = 'right';
      }

      tooltip.style.top =  top + 'px';
      tooltip.style.left = left + 'px';
    }
  },
  methods: {
    handlerMouseEnter() {
      clearTimeout(this.timerTooltip);
      if (!this.isBigTabletWindow) {
        this.timerTooltip = setTimeout(() => {
          this.showTooltip = true;
          this.eventScroll = true;
          document.addEventListener('scroll', this.closeTooltip)
        }, this.timeOut);
      }
    },
    handlerMouseLeave () {
      clearTimeout(this.timerTooltip);
      if (!this.isBigTabletWindow) {
        this.showTooltip = false;
      }
    },
    handlerToggleTooltip() {
      if (this.isBigTabletWindow && this.isMobileClick) {
        this.showTooltip = !this.showTooltip;
        if (this.showTooltip) {
          this.eventScroll = true;
          document.addEventListener('scroll', this.closeTooltip)
        }
      }
    },
    handlerHideTooltip() {
      if (this.isBigTabletWindow && this.isMobileClick) {
        this.showTooltip = false;
      }
    },
    closeTooltip() {
      this.showTooltip = false;
      if (this.eventScroll) {
        document.removeEventListener('scroll', this.closeTooltip)
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/components/tooltip.scss";
</style>
