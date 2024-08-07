<template>
    <div class="blog-page__card _is-loading" :class="classMod">
      <div class="blog-page__card-link">
        <div class="blog-page__wrap-img"></div>
        <p class="blog-page__description">
          <span></span>
          <span></span>
        </p>
        <p class="service-block__btn-more"></p>
      </div>
    </div>
</template>

<script>
export default {
  name: "BlogSkeleton",
  data() {
    return {
      classMod: {
        type: String,
        default: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
