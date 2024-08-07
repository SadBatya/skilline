<template>
  <div class="object_example">
    <div class="object_example-img--block-1">
      <div>
        <img
          src="@/static/img/portfolio/pf-levelhome/level-home-example-img-1.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="@/static/img/portfolio/pf-levelhome/level-home-example-img-2.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="@/static/img/portfolio/pf-levelhome/level-home-example-img-3.png"
          alt=""
        />
      </div>
    </div>
    <div class="object_example-img-block-2">
      <div class="object_example-img-block-2-inner">
        <div class="object_example-img-block-2-inner-first">
          <img
            src="@/static/img/portfolio/pf-levelhome/level-home-example-img-4.png"
            alt=""
          />
          <img
            src="@/static/img/portfolio/pf-levelhome/level-home-example-img-5.png"
            alt=""
          />
        </div>
        <div class="object_example-inner">
          <p class="object_example-text">
            На сайте демонстрируются текущие объекты комфорт и бизнес-класса,
            находящиеся под управлением компании.
          </p>
        </div>
        <div class="object_example-img-block-2-inner-second">
          <img
            src="@/static/img/portfolio/pf-levelhome/level-home-example-img-6.png"
            alt=""
          />
          <img
            src="@/static/img/portfolio/pf-levelhome/level-home-example-img-7.png"
            alt=""
          />
        </div>
      </div>
      <div class="portfolio__wrap-img">
        <!-- <img src="@/static/img/portfolio/pf-levelhome/level-home-object-maket-example.png" alt=""> -->
        <div class="portfolio__wrap-img-inner" >
            <img
              :class="'portfolio__wrap-img-' + index"
              v-for="(img, index) in imgArr" :key="index"
              :src="img"
            />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '@/static/img/portfolio/pf-levelhome/object-example/level-home-object-maket-example-img-1.jpg'
import img2 from '@/static/img/portfolio/pf-levelhome/object-example/level-home-object-maket-example-img-2.jpg'
import img3 from '@/static/img/portfolio/pf-levelhome/object-example/level-home-object-maket-example-img-4.jpg'
import img4 from '@/static/img/portfolio/pf-levelhome/object-example/level-home-object-maket-example-img-3.jpg'
import img5 from '@/static/img/portfolio/pf-levelhome/object-example/level-home-object-maket-example-img-5.jpg'
import img6 from '@/static/img/portfolio/pf-levelhome/object-example/level-home-object-maket-example-img-6.jpg'
import img7 from '@/static/img/portfolio/pf-levelhome/object-example/level-home-object-maket-example-img-7.jpg'
export default {
  name: 'LevelHomeObjectExample',
  data() {
    return {
      imgArr: [img1, img2, img3, img4, img5, img6, img7],
    }
  },
}
</script>

<style></style>
