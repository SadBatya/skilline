<template>
  <div class="total__number" :class="classMod">
    <template v-if="item.info">
      <div class="total__wrap-tooltip">
        <span class="total__figure" :class="{'_color-number': item.isColorMain}">{{number}}</span>
        <TooltipElement class-mod="total__tooltip">
          <template #default>
            <SvgIcon  name="icon-info" width="16" height="16" />
          </template>
          <template #tooltip>
            <div class="total__tooltip-info" v-html="item.info"></div>
          </template>
        </TooltipElement>
      </div>
    </template>
    <span v-else class="total__figure" :class="{'_color-number': item.isColorMain}">{{number}}</span>
    <p v-if="item.description" v-html="item.description" />
  </div>
</template>

<script>
import TooltipElement from "~/components/elements/TooltipElement";
export default {
  name: "TotalNumberItem",
  components: {TooltipElement},
  props: {
    classMod: [String, Object],
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    number() {
      return this.item.number.value + this.item.number.symbol
    }
  }
}
</script>

<style scoped>

</style>
