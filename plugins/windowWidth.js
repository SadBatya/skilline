import Vue from 'vue'
import { BREAKPOINTS } from "~/constant/common";

// resize Window
const windowResize = {
  data () {
    return {
      windowWidth: process.client ? window.innerWidth : null
    }
  },
  computed: {
    isExtraSmallMobileWindow() {
      return this.windowWidth <= BREAKPOINTS.extraSmall;
    },
    isSmallMobileWindow() {
      return this.windowWidth < BREAKPOINTS.small;
    },
    isMobileWindow() {
      return this.windowWidth <= BREAKPOINTS.medium;
    },
    isBigTabletWindow() {
      return this.windowWidth <= BREAKPOINTS.submedium;
    }
  },
  mounted () {
    if (process.client) {
      window.addEventListener('resize', this.onResize)
    }
  },
  beforeDestroy () {
    if (process.client) {
      window.removeEventListener('resize', this.onResize)
    }
  },
  methods: {
    onResize () {
      this.windowWidth = window.innerWidth
    }
  }
}

Vue.mixin(windowResize);
