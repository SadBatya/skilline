<template>
  <section
    v-if="(works && works.length) || $fetchState.pending"
    class="works"
    :class="{ '_padding-top': titleInner }"
  >
    <div class="container">
      <h2 v-if="title && !titleInner" class="works__title title">
        {{ title }}
      </h2>
      <div class="works__content-wrapper">
        <h2 v-if="titleInner" class="works__title-inner">{{ titleInner }}</h2>
        <TabsSection
          v-if="categories && categories.length > 0"
          :tabs="categories"
          :totalCount="totalCategories"
          :active-tab="activeCategory"
          class-mod="works__tabs"
          @clickTab="handlerClickTab"
        />
        <TabsSectionSkeleton
          class-mod="works__tabs"
          v-else-if="$fetchState.pending"
        />
        <div class="works__container">
          <div v-if="works && works.length" class="works__box-cards">
            <WorkCard
              v-for="item in works"
              :key="item.id"
              :item="item"
              :class-mod="{ _fetch: $fetchState.pending && !clickShowMore }"
              :is-open="isOpenPage(item)"
              @categoryClick="handlerClickTab"
            />
          </div>
          <div v-if="$fetchState.pending" class="works__box-cards">
            <WorksSkeleton v-for="i in countFetch" :key="i" />
          </div>
          <Pagination
            v-if="pageCount > 1"
            class-mod="works__pagination"
            v-bind="paginationBind"
            @changePage="handlerChangePage"
            @showMore="handlerShowMore"
          />
        </div>
      </div>
    </div>
    <ModalNDA />
  </section>
</template>

<script>
import { mapActions } from 'vuex'

import { ROUTS_PATH } from '~/constant/routs'
import { queryParamsWork } from '~/constant/queryParams'
import { DEFAULT_TEXT as textWorks } from '~/models/works'
import TabsSection from '~/components/common/TabsSection'
import Pagination from '~/components/common/PaginationBlock'
import methodsQuery from '~/mixins/methodsQuery'
import ModalNDA from '~/components/modals/ModalNda'
import TabsSectionSkeleton from '~/components/skeletons/TabsSectionSkeleton'
import WorksSkeleton from '~/components/skeletons/WorksSkeleton'
import WorkCard from '~/components/elements/WorkCard'

export default {
  name: 'WorksSection',
  components: {
    WorkCard,
    WorksSkeleton,
    TabsSectionSkeleton,
    ModalNDA,
    Pagination,
    TabsSection,
  },
  mixins: [methodsQuery],
  props: {
    isButtonShowAll: {
      type: Boolean,
      default: true,
    },
    isQuery: {
      type: Boolean,
      default: false,
    },
    titleInner: String,
    titleProps: String,
    subTitleProps: String,
    serviceId: [String, Number],
    companyDisabled: Array,
  },
  data() {
    return {
      urlWorksPage: ROUTS_PATH.works.list,
      title: textWorks.titleWorks,
      description: textWorks.description,
      works: [],
      activeCategory: null,
      defaultCountOnPage: 6,
      currentPage: 1,
      pageCount: 1,
      clickShowMore: false,
      timerFetchNewData: null,
      timeOnFetch: 300,
    }
  },
  async fetch() {
    if (!this.clickShowMore) {
      this.works = []
    }
    const filterParams = this.getOptionsFilter()
    await this.fetchCategories()
    await this.fetchWorks(filterParams)
      .then((res) => {
        const { worksList, pageCount } = res
        if (this.clickShowMore) {
          this.works = [...this.works, ...worksList]
          this.clickShowMore = false
        } else {
          this.works = worksList
        }
        this.pageCount = pageCount
      })
      .catch((e) => {
        this.clickShowMore = false
        console.log(e)
      })
  },
  mounted() {
    if (this.titleProps) {
      this.title = this.titleProps
    }

    if (this.subTitleProps) {
      this.description = this.subTitleProps
    }
  },
  computed: {
    categories() {
      if (this.serviceId) {
        return []
      }

      return this.$store.state.works.categories || []
    },
    totalCategories() {
      return this.$store.state.works.totalCategoryCount || 0
    },
    paginationBind() {
      return {
        curPage: this.currentPage,
        maxPage: this.pageCount || 1,
        countOnPage: this.defaultCountOnPage,
      }
    },
    countFetch() {
      if (this.activeCategory) {
        const elementCategory = this.categories.find(
          (el) => el.id === this.activeCategory
        )
        if (elementCategory) {
          return elementCategory.count < this.defaultCountOnPage
            ? elementCategory.count
            : this.defaultCountOnPage
        }
      }

      return this.totalCategories &&
        this.totalCategories < this.defaultCountOnPage
        ? this.totalCategories
        : this.defaultCountOnPage
    },
  },
  watch: {
    '$route.query'(value, oldValue) {
      const isFetch = Object.keys(queryParamsWork).reduce((accum, item) => {
        const keyQuery = queryParamsWork[item].query
        if (value[keyQuery] !== oldValue[keyQuery]) {
          accum = true
        }
        return accum
      }, false)

      if (isFetch) {
        clearTimeout(this.timerFetchNewData)
        this.timerFetchNewData = setTimeout(() => {
          this.$fetch()
        }, this.timeOnFetch)
      }
    },
    currentPage(value, oldValue) {
      if (this.isQuery || oldValue === value) {
        return
      }

      clearTimeout(this.timerFetchNewData)
      this.timerFetchNewData = setTimeout(() => {
        this.$fetch()
      }, this.timeOnFetch)
    },
    activeCategory(value, oldValue) {
      if (this.isQuery || oldValue === value) {
        return
      }
      clearTimeout(this.timerFetchNewData)
      this.timerFetchNewData = setTimeout(() => {
        this.$fetch()
      }, this.timeOnFetch)
    },
  },
  methods: {
    ...mapActions({
      fetchWorks: 'works/fetchWorks',
      fetchCategories: 'works/fetchCategories',
    }),
    handlerClickTab(tab) {
      if (!tab || !tab.id || tab.id === this.activeCategory) {
        if (this.isQuery) {
          this.setNewQueryWithClearQuery(
            {
              [queryParamsWork.page.query]: 1,
            },
            queryParamsWork.category.query
          )
        }
        this.activeCategory = null
        this.currentPage = 1
        return
      }
      if (this.isQuery) {
        this.setNewQuery({
          [queryParamsWork.category.query]: tab.id,
          [queryParamsWork.page.query]: 1,
        })
      }
      this.activeCategory = tab.id
      this.currentPage = 1
    },
    getOptionsFilter() {
      const filterParams = {
        [queryParamsWork.countOnPage.param]: this.defaultCountOnPage,
      }

      if (this.companyDisabled && this.companyDisabled) {
        filterParams[queryParamsWork.excludeWorks.param] = this.companyDisabled
      }

      if (this.serviceId) {
        filterParams[queryParamsWork.serviceId.param] = this.serviceId
      }

      if (this.isQuery) {
        const query = this.$route.query

        return this.getFilterQuery(query, filterParams, queryParamsWork)
      }

      filterParams[queryParamsWork.page.param] = this.currentPage
      filterParams[queryParamsWork.category.param] = this.activeCategory

      return filterParams
    },
    handlerChangePage(page) {
      if (!page) {
        return
      }
      const numPage = Number(page)
      if (this.isQuery) {
        this.setNewQuery({
          [queryParamsWork.page.query]: numPage,
        })
      }

      this.currentPage = numPage
    },
    handlerShowMore() {
      if (this.clickShowMore) {
        return
      }
      const nextPage = this.currentPage + 1
      this.clickShowMore = true
      if (this.isQuery) {
        this.setNewQuery({
          [queryParamsWork.page.query]: nextPage,
          [queryParamsWork.countOnPage.query]: this.defaultCountOnPage,
        })
      }
      this.currentPage = nextPage
    },
    isOpenPage(item) {
      return !item.locked && !item.nda
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/style/components/works-new.scss';
</style>
