export default {
  data() {
    return {
      timeBodyClass: null
    }
  },
  methods: {
    toggleLockBody(lock) {
      const body = document.querySelector('body');
      const delay = 100;

      const bodyLockRemove = () => {
        clearTimeout(this.timerBodyClass);
        if (!lock) {
          this.timerBodyClass = setTimeout(() => {
            this.$store.commit('darkBody/setIsDark', lock);
            body.style.paddingRight = '0px';
            body.classList.remove('_lock');
          }, delay);
        }
      };
      const bodyLockAdd = () => {
        clearTimeout(this.timerBodyClass);
        if (lock) {
          this.timerBodyClass = setTimeout(() => {
            this.$store.commit('darkBody/setIsDark', lock);
            body.style.paddingRight = window.innerWidth - body.offsetWidth + 'px';
            body.classList.add('_lock');
          }, delay);
        }
      };

      if (lock) {
        bodyLockAdd();
      } else {
        bodyLockRemove();
      }
    }
  }
}
