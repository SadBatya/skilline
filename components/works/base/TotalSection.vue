<template>
  <div class="total" id="totalBlock">
    <div class="pf-container">
      <p class="total__title">Итого</p>
      <div class="total__wrap">
        <div class="total__left">
          <div v-if="startProject || endProject" class="total__timeline">
            <div v-if="startProject" class="total__project-time">
              <p>Старт проекта:
                <span>{{ startProject }}</span>
              </p>
            </div>
            <div v-if="endProject" class="total__project-time">
              <p>Сдача проекта: <span>{{ endProject }}</span></p>
            </div>
          </div>
          <p v-if="description" class="total__description" v-html="description" />
          <div v-if="graphic && graphic.length" class="total__inner-graphic">
            <!--            <img src="./img/portfolio/graphic.png" alt="">-->
            <GraphicTotal  :graphic="graphic"/>
          </div>
        </div>
        <div v-if="isRightShow" class="total__right">

          <p class="total__text-number">Цифры</p>
          <div class="total__wrapper">
            <div v-if="totalNumbers && totalNumbers.length" class="total__wrap-number">
              <TotalNumberItem  v-for="(item, index) in totalNumbers" :key="index" :item="item" />
            </div>
            <TotalNumberItem v-for="(item, index) in otherNumbers" :key="index" :item="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TotalNumberItem from "~/components/works/base/elements/TotalNumberItem";
import GraphicTotal from "~/components/works/base/elements/GraphicTotal";

export default {
  name: "TotalSection",
  components: {GraphicTotal, TotalNumberItem},
  props: {
    startProject: {
      type: String,
      default: ''
    },
    endProject: {
      type: String,
      default: ''
    },
    totalNumbers: {
      type: Array,
      default: () => [],
    },
    otherNumbers: {
      type: Array,
      default: () => []
    },
    graphic: {
      type: Array,
      default: () => []
    },
    description: {
      type: String,
      default: ''
    }
  },
  computed: {
    isRightShow() {
      return (this.otherNumbers && this.otherNumbers.length) ||
        (this.totalNumbers && this.totalNumbers.length);
    }
  }
}
</script>

<style scoped>

</style>
