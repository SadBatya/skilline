export default {
  methods: {
    scrollToBlock(id) {
     const block = document.querySelector(`#${id}`);
     if (!block) {
       return;
     }

      let offsetOther = 0;
      if (id === 'totalBlock') {
        const title = block.querySelector('.total__title');
        offsetOther = title?.clientHeight || 0;
      }

      const header =  document.querySelector('.header');
      const headerHeight = header?.clientHeight || 0;

      const blockRect = block.getBoundingClientRect();
      const blockPosition = window.scrollY + blockRect.top - headerHeight - offsetOther;

      window.scrollTo({
        top: blockPosition,
        behavior: 'smooth'
      });
    }
  }
}
