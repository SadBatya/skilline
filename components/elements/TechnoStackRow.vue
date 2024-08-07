<template>
  <div class="process-stack__cards-row" :class="classMod" @mousedown="handlerDrag" :ref="`stack${stack.id}`">
    <div class="process-stack__card-row-wrapper">
      <div v-for="stack in list" :key="stack.id" class="process-stack__card-technology" :class="{'_disabled': !isStackOpacity(stack.categories)}" >
        <img v-if="stack.logo" :src="stack.logo" alt="symfony">
        <p>
          <span class="name">{{ stack.title }}.</span>{{stack.description}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TechnoStackRow",
  props: {
    classMod: String,
    list: Array,
    categories: Array,
  },
  methods: {
    isStackOpacity(categories) {
      if (this.activeCategory === null) {
        return true;
      }

      if (!categories || categories.length === 0) {
        return false;
      }

      return categories.find(id => id === this.activeCategory);
    },
    initEvent() {

    }
  }
}
</script>

<style scoped>

</style>
