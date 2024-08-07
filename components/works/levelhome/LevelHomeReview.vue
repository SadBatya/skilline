<template>
  <div class="levelHome_review">
    <div class="leveHome_review">
      <div class="levelHome_review-title">
        Ценности Level Home
        <div class="levelHome_svg-icon">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.1961 11.2179L23.914 10.5218L22.5218 9.08595L21.8039 9.7821L23.1961 11.2179ZM13.2188 19.5L12.5226 20.2179C12.9105 20.594 13.527 20.594 13.9149 20.2179L13.2188 19.5ZM9.69615 14.6912L8.97825 13.995L7.58595 15.4308L8.30385 16.127L9.69615 14.6912ZM5.65385 2.5H24.3462V0.5H5.65385V2.5ZM24.3462 2.5C26.088 2.5 27.5 3.91202 27.5 5.65385H29.5C29.5 2.80746 27.1925 0.5 24.3462 0.5V2.5ZM27.5 5.65385V24.3462H29.5V5.65385H27.5ZM27.5 24.3462C27.5 26.088 26.088 27.5 24.3462 27.5V29.5C27.1925 29.5 29.5 27.1925 29.5 24.3462H27.5ZM24.3462 27.5H5.65385V29.5H24.3462V27.5ZM5.65385 27.5C3.91202 27.5 2.5 26.088 2.5 24.3462H0.5C0.5 27.1925 2.80746 29.5 5.65385 29.5V27.5ZM2.5 24.3462V5.65385H0.5V24.3462H2.5ZM2.5 5.65385C2.5 3.91202 3.91202 2.5 5.65385 2.5V0.5C2.80746 0.5 0.5 2.80746 0.5 5.65385H2.5ZM21.8039 9.7821L12.5226 18.7821L13.9149 20.2179L23.1961 11.2179L21.8039 9.7821ZM13.9149 18.7821L9.69615 14.6912L8.30385 16.127L12.5226 20.2179L13.9149 18.7821Z"
              fill="#F3EFE7"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="leveHome_review">
      <div class="levelHome_review-decription">
        <div
          class="main-slider swiper grid-settings"
          v-swiper:levelHomeSLider="swiperOptions"
        >
          <div class="swiper-wrapper main-slider__wrap-sliders">
            <div
              v-for="(text, index) in sliderItems"
              :key="index"
              class="main-slider__slider swiper-slide"
            >
              <h4 class="level-home-slider-text-title">{{ text.title }}</h4>

              <p class="level-home-slider-text-description">
                {{ text.description }}
              </p>
            </div>
          </div>
          <div class="levelhome_review-img">
            <img
              src="@/static/img/portfolio/pf-levelhome/levelhome-review-img-1.png"
              alt=""
            />
            <p class="levelhome_review-img-text">
              Небольшой комментарий от <br />
              сотрудника компании
            </p>
          </div>
          <div class="level-home-swiper-buttons">
            <div class="level-home-slide-btn-next">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.6872 3.95945L19.9855 3.2469L18.5604 4.65015L19.2621 5.3627L20.6872 3.95945ZM31.0558 15.9148L30.3432 16.6164L30.3487 16.6219L31.0558 15.9148ZM31.0558 19.9443L31.7629 20.6514L31.0558 19.9443ZM19.2675 30.3183L18.5604 31.0254L19.9746 32.4397L20.6817 31.7326L19.2675 30.3183ZM24.75 18.9295L25.75 18.9295V16.9295L24.75 16.9295V18.9295ZM4.50002 16.9295H3.50001V18.9295H4.50002V16.9295ZM19.2621 5.3627L30.3432 16.6164L31.7683 15.2131L20.6872 3.95945L19.2621 5.3627ZM30.3487 16.6219C30.6955 16.9687 30.8903 17.439 30.8903 17.9295L32.8903 17.9295C32.8903 16.9086 32.4848 15.9295 31.7629 15.2076L30.3487 16.6219ZM30.8903 17.9295C30.8903 18.42 30.6955 18.8904 30.3487 19.2372L31.7629 20.6514C32.4848 19.9295 32.8903 18.9504 32.8903 17.9295L30.8903 17.9295ZM30.3487 19.2372L19.2675 30.3183L20.6817 31.7326L31.7629 20.6514L30.3487 19.2372ZM24.75 16.9295L4.50002 16.9295V18.9295L24.75 18.9295V16.9295Z"
                  fill="#F3EFE7"
                />
              </svg>
            </div>
            <div class="swiper-pagination main-slider__pagination"></div>
            <div class="level-home-slide-btn-prev">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.6872 3.95945L19.9855 3.2469L18.5604 4.65015L19.2621 5.3627L20.6872 3.95945ZM31.0558 15.9148L30.3432 16.6164L30.3487 16.6219L31.0558 15.9148ZM31.0558 19.9443L31.7629 20.6514L31.0558 19.9443ZM19.2675 30.3183L18.5604 31.0254L19.9746 32.4397L20.6817 31.7326L19.2675 30.3183ZM24.75 18.9295L25.75 18.9295V16.9295L24.75 16.9295V18.9295ZM4.50002 16.9295H3.50001V18.9295H4.50002V16.9295ZM19.2621 5.3627L30.3432 16.6164L31.7683 15.2131L20.6872 3.95945L19.2621 5.3627ZM30.3487 16.6219C30.6955 16.9687 30.8903 17.439 30.8903 17.9295L32.8903 17.9295C32.8903 16.9086 32.4848 15.9295 31.7629 15.2076L30.3487 16.6219ZM30.8903 17.9295C30.8903 18.42 30.6955 18.8904 30.3487 19.2372L31.7629 20.6514C32.4848 19.9295 32.8903 18.9504 32.8903 17.9295L30.8903 17.9295ZM30.3487 19.2372L19.2675 30.3183L20.6817 31.7326L31.7629 20.6514L30.3487 19.2372ZM24.75 16.9295L4.50002 16.9295V18.9295L24.75 18.9295V16.9295Z"
                  fill="#F3EFE7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LevelHomeReview',
  data() {
    return {
      sliderItems: [
        {
          title: 'Клиентоцентричность',
          description:
            'Далеко-далеко за словесными горами в стране гласных, и согласных живут рыбные тексты.',
        },
        {
          title: 'Инновации в медицине',
          description:
            'Описание: Передовые методы лечения и диагностики, направленные на улучшение здоровья и качества жизни.',
        },
        {
          title: 'Устойчивое развитие',
          description:
            'Описание: Принципы экологической и социальной ответственности, направленные на сохранение ресурсов и улучшение качества жизни текущих и будущих поколений.',
        },
        {
          title: 'Образовательные программы онлайн',
          description:
            'Описание: Интерактивные обучающие курсы и ресурсы, позволяющие получать знания и навыки из любой точки мира.',
        },
      ],
      currentSlide: 1,
      swiperOptions: {
        speed: 600,
        parallax: true,
        loop: true,
        navigation: {
          nextEl: '.level-home-slide-btn-next',
          prevEl: '.level-home-slide-btn-prev',
        },
        pagination: {
          el: '.swiper-pagination.main-slider__pagination',
          clickable: true,
          type: 'fraction',
        },
        keyboard: true,
      },
    }
  },
}
</script>
