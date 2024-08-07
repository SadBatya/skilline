<template>
  <div class="wrap-pagination" :class="classMod" ref="pagination">
    <button v-if="curPage < maxPage" type="button" class="button-light btn-pagination" @click.prevent="handlerShowMore">
      <svg class="button-light__img" xmlns="http://www.w3.org/2000/svg" width="25.539" height="25.5"
           viewBox="0 0 25.539 25.5">
        <g transform="translate(-553.775 -351.234)">
          <g transform="translate(558.102 359.299)">
            <path d="M576.926,358.5a11.986,11.986,0,0,1-20.461,8.475"
                  transform="translate(-556.465 -353.8)"
                  fill="none" stroke="inherit" stroke-miterlimit="10" stroke-width="1.5"/>
            <path d="M564.608,361.311l5.446-5.361v4.87" transform="translate(-549.592 -355.951)"
                  fill="none"
                  stroke="inherit" stroke-miterlimit="10" stroke-width="1.5"/>
          </g>
          <g transform="translate(554.525 351.984)">
            <path d="M554.525,363.97a11.986,11.986,0,0,1,20.3-8.63"
                  transform="translate(-554.525 -351.984)"
                  fill="none" stroke="inherit" stroke-miterlimit="10" stroke-width="1.5"/>
            <path d="M559.971,358.125l-5.446,5.361v-4.871" transform="translate(-554.525 -346.801)"
                  fill="none" stroke="inherit" stroke-miterlimit="10" stroke-width="1.5"/>
          </g>
        </g>
      </svg>
      <span class="button-light__text">Показать ещё</span>
    </button>
    <div v-if="paginationList.length" class="pagination__pages">
      <button
        class="pagination__arrow"
        :class="{disabled: curPage <= 1}"
        :style="{opacity: curPage > 1 ? 1 : 0.5 }"
        @click.prevent="prevPage"
        aria-label="предыдущая страница"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="6.591" height="11.061"
             viewBox="0 0 6.591 11.061">
          <path d="M20,20.331l5-5-5-5" transform="translate(-19.47 -9.801)" fill="none"
                stroke="inherit" stroke-miterlimit="10" stroke-width="1.5"/>
        </svg>
      </button>
      <ul class="pagination__list">
        <template v-for="(item, index) in paginationList" >
          <li
            class="pagination__item"
            :key="index + item"
            :class="{
              'no-hover': item === '...',
              'pagelink-active': item === curPage,
              }"
            @click.prevent="setCurrentPage(item)"
            :aria-label="`Страница ${item}`"
          >
            <span v-if="item !== '...'" class="pagination__link">{{ item }}</span>
            <template v-else>{{ item }}</template>
          </li>
        </template>
      </ul>
      <button class="pagination__arrow"
         :class="{disabled: curPage >= maxPage}"
         :style="{opacity: curPage < maxPage ? 1 : 0.5 }"
         @click.prevent="nextPage"
        aria-label="следующая страница"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="6.591" height="11.061"
             viewBox="0 0 6.591 11.061">
          <path d="M20,20.331l5-5-5-5" transform="translate(-19.47 -9.801)" fill="none"
                stroke="inherit" stroke-miterlimit="10" stroke-width="1.5"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaginationBlock",
  props: {
    classMod: {
      type: String,
      default: ''
    },
    curPage: {
      type: Number,
      default: 1
    },
    maxPage: {
      type: Number,
      default: 1
    },
    countOnPage: {
      type: Number,
      default: 10,
    },
    isScroll: {
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      rangePage: 3,
      timer: null,
      timeTimer: 300,
    }
  },
  computed: {
    paginationList() {

      const countPage  = this.maxPage;
      const curPage = this.curPage;
      const rangePage = this.rangePage;

      if (countPage <= 1) return [];
      if (curPage > countPage) {
        return [];
      }

      if (countPage <= rangePage * 2) {
        return Array.from({length: countPage}, (v, i) => i + 1);
      }

      const items = new Set();

      if (curPage - rangePage <=  1) {
        const count = rangePage > curPage + 1 ? rangePage : curPage + 1;
        for (let i = 1; i <= count; i++) {
          items.add(i);
        }
      } else {
        items.add(1);
      }

      if (curPage - rangePage > 1 && curPage !== countPage)   {
        for (let i = curPage - 1; i <= curPage + 1; i++) {
          items.add(i);
        }
      }

      if (curPage + rangePage >= countPage) {
        const startIndex = (countPage - curPage + 1) > rangePage ? curPage - 1 : countPage - rangePage;
        for (let i = startIndex + 1; i <= countPage; i++ ) {
          items.add(i);
        }
      } else {
        items.add(countPage);
      }

      return Array.from(items).reduce((accum, item, index, array) => {
        if (index === 0 ) {
          accum.push(item);
          return accum;
        }

        if (item - 1 !== array[index - 1]) {
          accum.push('...');
          accum.push(item);
          return accum;
        }

        accum.push(item);
        return accum;
      }, []);
    }
  },
  methods: {
    scrollTopContainer() {
      if (!this.isScroll) {
        return;
      }
      const paginationDom =  this.$refs.pagination;
      if (paginationDom) {
        const parent = paginationDom.parentElement;

        if (parent) {
          const header = document.querySelector('.header');
          const headerHeight = header.clientHeight;
          const y = parent.getBoundingClientRect().top + window.scrollY - headerHeight - 50;
          window.scroll({
            top: y,
            behavior: 'smooth'
          });
        }
      }
    },
    setCurrentPage(page) {
      if (page === '...' || Number(page) === this.curPage) {
        return;
      }
      this.$emit('changePage', page);
      this.scrollTopContainer();
    },
    prevPage() {
      if (this.curPage === 1) {
        return;
      }
      this.setCurrentPage(this.curPage - 1);
    },
    nextPage() {
      if (this.curPage >= this.maxPage) {
        return;
      }
      this.setCurrentPage(this.curPage + 1);
    },
    handlerShowMore() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.$emit('showMore');
      }, this.timeTimer)
    }
  }
}
</script>


<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/components/pagination.scss";
</style>
