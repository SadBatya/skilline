<template>
    <div class="container">
      <section class="photo-services">
        <template v-if="galleryRows && galleryRows.length">
          <div v-for="(row, index) in galleryRows" :key="index" class="photo-services__line" :class="{'center-line': index === 1}" :ref="`line${index}`">
            <template v-for="(img, id) in row">
              <div :key="`${index}-${id}`"  class="photo-services__line-item">
                <img :src="img" @load="onImgLoad(index)" >
              </div>
              <div v-if="index === 1 && id === Math.floor((row.length -1) / 2)" :key="`t-${index}-${id}`" class="photo-services__card-services _active">
                <p class="photo-services__category">{{sectionName}}</p>
                <span class="photo-services__title">{{ title }}</span>
                <span v-if="description" class="photo-services__description">{{description}}</span>
              </div>
            </template>

          </div>
        </template>
        <div v-else class="photo-services__line center-line">
          <div class="photo-services__card-services _active">
            <p class="photo-services__category">{{sectionName}}</p>
            <span class="photo-services__title">{{ title }}</span>
            <span v-if="description" class="photo-services__description">{{description}}</span>
          </div>
        </div>
      </section>
    </div>

</template>

<script>
export default {
  name: "ServiceBannerMain",
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: '',
    },
    gallery: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      sectionName: "Услуги",
      minImageCount: 4,
      imageCount: 10,
    }
  },
  watch:{
    windowWidth() {
      this.centeringTitleBlockInLine()
    }
  },
  computed: {
    galleryRows() {
      if (this.isGalleryEmpty()) {
        return []
      }
      const count = this.gallery.length
      const ratio = Math.ceil(this.imageCount / count) || 1;
      const newArr = [];
      const countImage = count * ratio;
      const indexArray = Array.from( {length: countImage}, (_, i) => {
        if (count  > i) {
          return i;
        }

        return Math.floor(Math.random() * (count));
      });

      for (let i = 0; i < countImage; i++) {
            // const randomIndex = Math.floor(Math.random() * (indexArray.length));
           // const index = randomIndex[0];
            newArr.push(this.gallery[indexArray[i]]);
            // indexArray.splice(randomIndex, 1);
      }

      // 10
      const countNewImageInRow =  Math.ceil(newArr.length / 3);
      return [
        [...newArr.slice(0, countNewImageInRow)],
        [...newArr.slice(countNewImageInRow, newArr.length - countNewImageInRow) ],
        [...newArr.slice(newArr.length - countNewImageInRow)]
      ]
    },
  },
  mounted() {
    this.$nextTick().then(() => {
      this.centeringTitleBlockInLine();
    })
  },
  methods: {
    isGalleryEmpty() {
      return !this.gallery || !this.gallery.length;
    },
    centeringTitleBlockInLine() {
      const centerLines = this.$refs.line1;
      const winWidth = this.windowWidth;
      if (centerLines && centerLines.length) {
        const centerLine = centerLines[0];
        centerLine.style.transform = null;
        centerLine.style.transition =  'all 0s ease 0s';
        const mainBlock = centerLine.querySelector('.photo-services__card-services');

        if (!mainBlock) {
          return;
        }

        const mainBlockRect = mainBlock.getBoundingClientRect();
        let centerPosition = winWidth/2 - mainBlockRect.width/6 ;

        if (this.isMobileWindow) {
          centerPosition = winWidth/2 - mainBlockRect.width/2;
        }
        const translateX = centerPosition - mainBlockRect.left;
        centerLine.style.transition =  null;
        centerLine.style.transform = `translateX(${translateX}px)`
      }
    },
    onImgLoad(index) {
      if (index === 1) {
        this.centeringTitleBlockInLine();
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/components/photo-services.scss";

</style>
