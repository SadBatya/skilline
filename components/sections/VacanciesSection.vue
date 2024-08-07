<template>
  <div class="vacancies__cards">
    <p class="vacancies__title">{{ title }}</p>
    <TabsSection
      v-if="categories && categories.length > 0"
      :tabs="categories"
      :total-count="totalCategories"
      :active-tab="activeCategory"
      class-mod="vacancies__tabs"
      @clickTab="handlerClickTab"
    />
    <div v-if="vacancyList" class="vacancies__inner">
      <div class="vacancies__block">
        <ul class="vacancies__list">
          <NuxtLink
            v-for="vacancy in vacancyList"
            :key="modKey + vacancy.id"
            :to="vacancyUrlDetail(vacancy.code)"
            custom
            v-slot="{ href,  navigate }"
          >
            <li class="vacancies__item">
              <a :href="href" class="vacancies__link" @click.stop="navigate">
                <div class="vacancies__wrap-title">
                  <p>{{ vacancy.title }}</p>
                  <div class="vacancies__arrow">
                    <span class="vacancies__line"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6.591" height="11.061"
                         viewBox="0 0 6.591 11.061">
                      <path d="M20,20.331l5-5-5-5" transform="translate(-19.47 -9.801)" fill="none"
                            stroke="#0e0e10" stroke-miterlimit="10" stroke-width="1.5"/>
                    </svg>
                  </div>
                </div>
                <div v-if="vacancy.salary" class="vacancies__wrap-price"><span class="vacancies__text">от</span>
                  <p>{{ vacancy.salary }}<span>₽</span></p>
                </div>
              </a>
            </li>
          </NuxtLink>
          <template v-if="$fetchState.pending">
            <VacancySkeleton v-for="i in countFetch" :key="i"/>
          </template>
        </ul>
        <PaginationBlock
          v-if="pageCount > 1"
          class-mod="vacancy__pagination"
          v-bind="paginationBind"
          :is-scroll="false"
          @changePage="handlerChangePage"
          @showMore="handlerShowMore"
        />
      </div>

      <div v-if="info || description" class="vacancies__connection">
        <p v-if="info" class="vacancies__bold-text">{{ info }}</p>
        <p v-if="description">{{ description }}</p>
        <a v-if="emailFeedback" class="vacancies__bold-text" :href="`mailto:${emailFeedback}`">{{ emailFeedback }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import methodsQuery from "~/mixins/methodsQuery";
import {queryParamsVacancy} from "~/constant/queryParams";
import {ROUTS_PATH} from "~/constant/routs";
import TabsSection from "~/components/common/TabsSection";
import PaginationBlock from "~/components/common/PaginationBlock";
import VacancySkeleton from "~/components/skeletons/VacancySkeleton";

export default {
  name: "VacanciesSection",
  components: {VacancySkeleton, PaginationBlock, TabsSection},
  mixins: [methodsQuery],
  props: {
    isQuery: {
      type: Boolean,
      default: false
    },
    modKey: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      title: "Вакансии",
      info: '',
      description: '',
      vacancyList: [],
      emailFeedback: '',
      activeCategory: null,
      defaultCountOnPage: 6,
      currentPage: 1,
      pageCount: 1,
      clickShowMore: false,
      timerFetchNewData: null,
      timeOnFetch: 300
    }
  },
  async fetch() {
    if (!this.clickShowMore) {
      this.vacancyList = [];
    }
    const filterParams = this.getOptionsFilter();
    await this.fetchCategories();
    await this.fetchVacancy(filterParams)
      .then(res => {
        const {
          title,
          info,
          email,
          description,
          vacancyList,
          pageCount
        } = res;
        if (title) {
          this.title = title;
        }

        if (email) {
          this.emailFeedback = email;
        }

        this.info = info;
        this.description = description

        if (this.clickShowMore) {
          this.vacancyList = [...this.vacancyList, ...vacancyList];
          this.clickShowMore = false;
        } else {
          this.vacancyList = vacancyList;
        }

        this.pageCount = pageCount;
      })
      .catch((e) => {
        this.clickShowMore = false;
        console.log(e);
      });
    await this.fetchContacts();
  },
  computed: {
    categories() {
      return this.$store.state.vacancy.categories || [];
    },
    totalCategories() {
      return this.$store.state.vacancy.totalCategoryCount || 0;
    },
    paginationBind() {
      return {
        curPage: this.currentPage,
        maxPage: this.pageCount || 1,
        countOnPage: this.defaultCountOnPage
      }
    },
    countFetch() {
      if (this.activeCategory) {
       const elementCategory =  this.categories.find(el => el.id === this.activeCategory);
       if (elementCategory) {
         return  elementCategory.count < this.defaultCountOnPage ? elementCategory.count : this.defaultCountOnPage;;
       }
      }

      return this.totalCategories && this.totalCategories < this.defaultCountOnPage ?
        this.totalCategories :
        this.defaultCountOnPage;
    }
  },
  watch: {
    '$route.query'(value, oldValue) {
      const isFetch = Object.keys(queryParamsVacancy).reduce((accum, item) => {
        const keyQuery = queryParamsVacancy[item].query;
        if (value[keyQuery] !== oldValue[keyQuery]) {
          accum = true;
        }
        return accum;
      }, false);

      if (isFetch) {
        clearTimeout(this.timerFetchNewData);
        this.timerFetchNewData = setTimeout(() => {
          this.$fetch();
        }, this.timeOnFetch);
      }
    },
    currentPage(value, oldValue) {
      if (this.isQuery || oldValue === value) {
        return;
      }

      clearTimeout(this.timerFetchNewData);
      this.timerFetchNewData = setTimeout(() => {
        this.$fetch();
      }, this.timeOnFetch);
    },
    activeCategory(value, oldValue) {
      if (this.isQuery || oldValue === value) {
        return;
      }
      clearTimeout(this.timerFetchNewData);
      this.timerFetchNewData = setTimeout(() => {
        this.$fetch();
      }, this.timeOnFetch);
    }
  },
  methods: {
    ...mapActions({
      fetchVacancy: 'vacancy/fetchVacancyList',
      fetchCategories: 'vacancy/fetchCategories',
      fetchContacts: "contacts/fetchContacts"
    }),
    vacancyUrlDetail(code) {
      return  ROUTS_PATH.vacancy.detail(code);
    },
    handlerClickTab(tab) {
      if (!tab || !tab.id) {
        if (this.isQuery) {
          this.setNewQueryWithClearQuery({
              [queryParamsVacancy.page.query]: 1
            },
            queryParamsVacancy.category.query
          );
        }
        this.activeCategory = null;
        this.currentPage = 1;
        return;
      }
      if (this.isQuery) {
        this.setNewQuery({
          [queryParamsVacancy.category.query]: tab.id,
          [queryParamsVacancy.page.query]: 1
        });
      }
      this.activeCategory = tab.id;
      this.currentPage = 1;
    },
    getOptionsFilter() {
      const filterParams = {
        [queryParamsVacancy.countOnPage.param]: this.defaultCountOnPage
      }
      if (this.isQuery) {
        const query = this.$route.query;
        return this.getFilterQuery(query, filterParams, queryParamsVacancy);
      }
      filterParams[queryParamsVacancy.page.param] = this.currentPage;
      filterParams[queryParamsVacancy.category.param] = this.activeCategory;

      return filterParams;
    },
    handlerChangePage(page) {
      if (!page) {
        return;
      }
      const numPage = Number(page);
      if (this.isQuery) {
        this.setNewQuery({
          [queryParamsVacancy.page.query]: numPage,
          [queryParamsVacancy.countOnPage.query]: this.defaultCountOnPage
        });
      }
      this.currentPage = numPage;
    },
    handlerShowMore() {
      if (this.clickShowMore) {
        return;
      }
      const nextPage = this.currentPage + 1;
      this.clickShowMore = true;
      if (this.isQuery) {
        this.setNewQuery({
          [queryParamsVacancy.page.query]: nextPage,
          [queryParamsVacancy.countOnPage.query]: this.defaultCountOnPage
        });
      }
      this.currentPage = nextPage;
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/components/vacancies.scss";
@import "@/assets/scss/style/components/vacancies";
@import "@/assets/scss/style/components/popup-vacancy.scss";
</style>
