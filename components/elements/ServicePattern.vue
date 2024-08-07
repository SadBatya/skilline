<template>
  <div>
    <div class="service-block__pattern">
      <NuxtImg :src="item.image" :alt="item.title" sizes="md:100vw lg: 50vw" placeholder loading="lazy"/>
      <div
        v-if="item.canvas && isShowPattern"
        class="service-block__pattern-canvas"
        ref="canvas">
        <div class="canvas-block">
          <canvas ref="canvasService" data-engine="three.js r149" width="1334" height="670" style="width: 100%; height: 100%;"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicePattern",
  props: {
    item:  {
      type: Object,
      required: true
    },
    isShowPattern: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      update: false,
      timeFetch: null
    }
  },
  mounted() {
    // this.$nextTick().then( () => {
    //   this.initCanvas();
    // });
  },
  methods: {
    async initCanvas(isVisibility) {
      if (!isVisibility) {
        return;
      }
      const isModule = await this.findEl('Module3D');
      if (!isModule || (!this.item && !this.item.canvas)) {
        return;
      }

      const canvas = this.$refs.canvasService;

      if (!canvas) {
        return;
      }

      const app = new window.Module3D(canvas);
      app.load(this.item.canvas)
        .then(() => {
          canvas.classList.add('loaded');
          if (this.item.id === 1) {
            app.setZoom(3)
          }
        });
    },
    findEl(key, x = 0) {
      return (
        window[key] ||
        new Promise((resolve, reject) => {
          if (x > 50) {
            return resolve();
          }
          setTimeout(  () => {
             resolve(this.findEl(key, ++x || 1));
          }, 100);
        })
      );
    }
  }
}
</script>
