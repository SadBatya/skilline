<template>
  <div class="page-main">
    <section class="brandbook">
      <div class="brandbook__wrap-title">
        <p class="brandbook__title title">Brand Book</p>
      </div>
      <div class="brandbook__inner">
        <div class="logo__wrap">
          <p class="logo__title big-title">Logo</p>
          <div class="logo__box">
            <BrandBookLogoBox />
            <div class="logo__box-right">
              <p class="logo__logo-text">Минимальное использование</p>
              <img src="@/assets/img/brandbook/logo-2.svg" alt="">
              <span class="logo__box-right-size">95 x 37,39 px</span>
            </div>
          </div>
        </div>
        <div class="slogan__box">
          <p class="slogan__title">SLOGAN</p>
          <p class="slogan__description">Наш слоган отражает нашу посвященность всестороннему и аккуратному подходу в решении разнообразных задач</p>
          <div class="slogan__wrap">
            <p>Анализируем.</p>
            <p>Проектируем.</p>
            <TextTypingEffect :words="sloganWords" class-mod="_active-slogan" />
          </div>
        </div>
        <BrandBookConstructorLogo />
      </div>
      <div class="font__container">
        <div class="font__inner">
          <p class="font__title big-title">font</p>
          <div class="font__font-gotham">
            <p class="font__name">Gotham Pro</p>
            <p class="font__subname">Основной шрифт бренда, используемый для набора любых текстов,
              заголовков и слоганов.</p>
            <div class="font__wrap-fonts">
              <div class="font__font-paragraph _regular">
                <div class="font__inner-title">
                  <p class="font__caption">Gotham Pro Regular</p>
                  <p class="font__description">Для набора основного текста</p>
                </div>
                <!--  TODO +++ сделал бы обертку для строк и просто p без классов а стилизовал от обертки-->
                <div class="font__block-regular">
                  <p> <span>A B C D E F G H I J K L M</span> <span>N O P Q R S T U V W X Y Z</span></p>
                  <p><span>a b c d e f g h i j k l m</span> <span>n o p q r s t u v w x y z</span> </p>
                  <p><span>1 2 3 4 5 6 7 8 9 0 </span><span>.,«»:;?!@#$%&*()</span></p>
                  <p><span>А Б В Г Д Е Ж З И Й К Л М Н О П Р </span><span>С Т У Ф Х Ц Ч Ш Щ Ы Ь Ъ Э Ю Я</span></p>
                  <p><span>а б в г д е ж з и й к л м н о п р</span> <span>с т у ф х ц ч ш щ ы ь ъ э ю я</span></p>
                </div>
              </div>

              <div class="font__font-paragraph ">
                <div class="font__inner-title">
                  <p class="font__caption _medium">Gotham Pro Medium</p>
                  <p class="font__description ">Для набора основного текста</p>
                </div>
                <div class="font__block-medium">
                  <p> <span>A B C D E F G H I J K L M</span> <span>N O P Q R S T U V W X Y Z</span></p>
                  <p><span>a b c d e f g h i j k l m</span> <span>n o p q r s t u v w x y z</span> </p>
                  <p><span>1 2 3 4 5 6 7 8 9 0 </span><span>.,«»:;?!@#$%&*()</span></p>
                  <p><span>А Б В Г Д Е Ж З И Й К Л М Н О П Р </span><span>С Т У Ф Х Ц Ч Ш Щ Ы Ь Ъ Э Ю Я</span></p>
                  <p><span>а б в г д е ж з и й к л м н о п р</span> <span>с т у ф х ц ч ш щ ы ь ъ э ю я</span></p>
                </div>
              </div>
              <div class="font__font-paragraph _bold">
                <div class="font__inner-title">
                  <p class="font__caption">Gotham Pro Bold</p>
                  <p class="font__description">Для набора основного текста</p>
                </div>
                <div class="font__block-bold">
                  <p> <span>A B C D E F G H I J K L M</span> <span>N O P Q R S T U V W X Y Z</span></p>
                  <p><span>a b c d e f g h i j k l m</span> <span>n o p q r s t u v w x y z</span> </p>
                  <p><span>1 2 3 4 5 6 7 8 9 0 </span><span>.,«»:;?!@#$%&*()</span></p>
                  <p><span>А Б В Г Д Е Ж З И Й К Л М Н О П Р </span><span>С Т У Ф Х Ц Ч Ш Щ Ы Ь Ъ Э Ю Я</span></p>
                  <p><span>а б в г д е ж з и й к л м н о п р</span> <span>с т у ф х ц ч ш щ ы ь ъ э ю я</span></p>
                </div>
              </div>
            </div>
          </div>
          <div class="font__font-tahoma">
            <p class="font__name">Tahoma</p>
            <p class="font__subname">Шрифт используемый для набора текста в документах и справочных
              материалах.</p>
            <div class="font__wrap-fonts">
              <div class="font__font-paragraph _regular">
                <p class="font__caption">Tahoma Regular</p>
                <div class="font__block-medium">
                  <p> <span>A B C D E F G H I J K L M</span> <span>N O P Q R S T U V W X Y Z</span></p>
                  <p><span>a b c d e f g h i j k l m</span> <span>n o p q r s t u v w x y z</span> </p>
                  <p><span>1 2 3 4 5 6 7 8 9 0 </span><span>.,«»:;?!@#$%&*()</span></p>
                  <p><span>А Б В Г Д Е Ж З И Й К Л М Н О П Р </span><span>С Т У Ф Х Ц Ч Ш Щ Ы Ь Ъ Э Ю Я</span></p>
                  <p><span>а б в г д е ж з и й к л м н о п р</span> <span>с т у ф х ц ч ш щ ы ь ъ э ю я</span></p>
                </div>
              </div>
              <div class="font__font-paragraph _bold">
                <p class="font__caption">Tahoma Bold</p>
                <div class="font__block-bold">
                  <p> <span>A B C D E F G H I J K L M</span> <span>N O P Q R S T U V W X Y Z</span></p>
                  <p><span>a b c d e f g h i j k l m</span> <span>n o p q r s t u v w x y z</span> </p>
                  <p><span>1 2 3 4 5 6 7 8 9 0 </span><span>.,«»:;?!@#$%&*()</span></p>
                  <p><span>А Б В Г Д Е Ж З И Й К Л М Н О П Р </span><span>С Т У Ф Х Ц Ч Ш Щ Ы Ь Ъ Э Ю Я</span></p>
                  <p><span>а б в г д е ж з и й к л м н о п р</span> <span>с т у ф х ц ч ш щ ы ь ъ э ю я</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="titles__title-used-font">Использование Шрифта</p>
      </div>
      <div class="titles__section-used-font">
        <div class="titles__section-h1">
          <div class="titles__wrap-h1">
            <div class="titles__inner-headlines">
              <p class="titles__title-h1">h1</p>
              <div class="titles__inner-values _first-value">
                <div class="titles__inner-values">
                  <img src="@/assets/img/brandbook/icon-text.svg" alt="">
                  <p class="titles__value">200 pt</p>
                </div>
                <div class="titles__inner-values">
                  <img src="@/assets/img/brandbook/icon-lineheight.svg" alt="">
                  <p class="titles__value">200 pt</p>
                </div>
              </div>
            </div>
            <!--  TODO ??? вроде делали такой тултип -->
            <div class="titles__open-tooltip">
              <div class="titles__tooltip-img">
                <img src="@/assets/img/brandbook/icon-info.svg" alt="">
              </div>
              <p class="titles__tooltip-text">Применяется исключительно для коротких заголовков</p>
            </div>
          </div>
          <p class="titles__text-h1">Услуги</p>
        </div>
        <div class="titles__section-h2">
          <div class="titles__inner-headlines">
            <p class="titles__title-h2">h2</p>
            <div class="titles__inner-values _first-value">
              <div class="titles__inner-values ">
                <img src="@/assets/img/brandbook/icon-text.svg" alt="">
                <p class="titles__value">60 pt</p>
              </div>
              <div class="titles__inner-values">
                <img src="@/assets/img/brandbook/icon-lineheight.svg" alt="">
                <p class="titles__value">70 pt</p>
              </div>
            </div>
          </div>
          <p class="titles__text-h2">Автоматизируем вашу работу.</p>
        </div>
        <div class="titles__section-h3">
          <div class="titles__inner-headlines">
            <p class="titles__title-h3">h3</p>
            <div class="titles__inner-values _first-value">
              <div class="titles__inner-values">
                <img src="@/assets/img/brandbook/icon-text.svg" alt="">
                <p class="titles__value">48 pt</p>
              </div>
              <div class="titles__inner-values">
                <img src="@/assets/img/brandbook/icon-lineheight.svg" alt="">
                <p class="titles__value">56 pt</p>
              </div>
            </div>
          </div>
          <p class="titles__text-h3">Автоматизируем вашу работу.</p>
        </div>
        <div class="titles__section-h4">
          <div class="titles__inner-headlines">
            <p class="titles__title-h4">h4</p>
            <div class="titles__inner-values _first-value">
              <div class="titles__inner-values">
                <img src="@/assets/img/brandbook/icon-text.svg" alt="">
                <p class="titles__value">32 pt</p>
              </div>
              <div class="titles__inner-values">
                <img src="@/assets/img/brandbook/icon-lineheight.svg" alt="">
                <p class="titles__value">40 pt</p>
              </div>
            </div>
          </div>
          <p class="titles__text-h4">Автоматизируем вашу работу.</p>
        </div>
        <div class="titles__section-h5">
          <div class="titles__inner-headlines">
            <p class="titles__title-h5">h5</p>
            <div class="titles__inner-values _first-value">
              <div class="titles__inner-values">
                <img src="@/assets/img/brandbook/icon-text.svg" alt="">
                <p class="titles__value">20 pt</p>
              </div>
              <div class="titles__inner-values">
                <img src="@/assets/img/brandbook/icon-lineheight.svg" alt="">
                <p class="titles__value">28 pt</p>
              </div>
            </div>
          </div>
          <p class="titles__text-h5">Автоматизируем вашу работу.</p>
        </div>
        <div class="titles__section-h6">
          <div class="titles__inner-headlines">
            <p class="titles__title-h5">h6</p>
            <div class="titles__inner-values _first-value">
              <div class="titles__inner-values">
                <img src="@/assets/img/brandbook/icon-text.svg" alt="">
                <p class="titles__value">16 pt</p>
              </div>
              <div class="titles__inner-values">
                <img src="@/assets/img/brandbook/icon-lineheight.svg" alt="">
                <p class="titles__value">24 pt</p>
              </div>
            </div>
          </div>
          <p class="titles__text-h6">Автоматизируем вашу работу.</p>
        </div>
      </div>
      <div class="paragraph__paragraph">
        <p class="paragraph__title">Paragraph</p>
        <div class="paragraph__wrap">
          <div class="paragraph__block">
            <div class="paragraph__inner-values">
              <div class="paragraph__inner-values">
                <img src="@/assets/img/brandbook/icon-text.svg" alt="">
                <p class="paragraph__value">16 pt</p>
              </div>
              <div class="paragraph__inner-values">
                <img src="@/assets/img/brandbook/icon-lineheight.svg" alt="">
                <p class="paragraph__value">24 pt</p>
              </div>
            </div>
            <p class="paragraph__description">Не следует, однако забывать, что постоянный количественный
              рост и сфера нашей активности представляет собой интересный эксперимент проверки соответствующий
              условий активизации. Идейные соображения высшего порядка, а также сложившаяся структура организации
              позволяет оценить значение форм развития.</p>
          </div>
          <div class="paragraph__block">
            <div class="paragraph__inner-values">
              <div class="paragraph__inner-values">
                <img src="@/assets/img/brandbook/icon-text.svg" alt="">
                <p class="paragraph__value">14 pt</p>
              </div>
              <div class="paragraph__inner-values">
                <img src="@/assets/img/brandbook/icon-lineheight.svg" alt="">
                <p class="paragraph__value">20 pt</p>
              </div>
            </div>
            <p class="paragraph__description _medium-par">Не следует, однако забывать, что постоянный
              количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки
              соответствующий условий активизации. Идейные соображения высшего порядка, а также сложившаяся
              структура организации позволяет оценить значение форм развития.</p>
          </div>
          <div class="paragraph__block">
            <div class="paragraph__inner-values">
              <div class="paragraph__inner-values">
                <img src="@/assets/img/brandbook/icon-text.svg" alt="">
                <p class="paragraph__value">12 pt</p>
              </div>
              <div class="paragraph__inner-values">
                <img src="@/assets/img/brandbook/icon-lineheight.svg" alt="">
                <p class="paragraph__value">18 pt</p>
              </div>
            </div>
            <p class="paragraph__description _small-par">Не следует, однако забывать, что постоянный
              количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки
              соответствующий условий активизации. Идейные соображения высшего порядка, а также сложившаяся
              структура организации позволяет оценить значение форм развития.</p>
          </div>
        </div>
      </div>
      <div class="colors__block">

        <div class="colors__wrap">
          <svg class="colors__title-color" xmlns="http://www.w3.org/2000/svg" width="929" height="347" viewBox="0 0 929 347">
            <g data-name="Group 53868" transform="translate(-86.338 -7853.367)">
              <text transform="translate(769.338 8122.367)" fill="#0e0e10" font-size="340" font-family="Helvetica-Bold, Helvetica" font-weight="700">
                <tspan x="0" y="0">R</tspan>
              </text>
              <path data-name="Path 39344" d="M478.72-31.62q-36.04,35.7-90.44,35.7t-90.27-35.7Q262.14-67.32,262.14-119q0-51.34,36.21-87.21t90.61-35.87q54.4,0,90.27,35.7T515.1-119Q515.1-67.66,478.72-31.62ZM337.28-65.96q20.4,21.76,51.68,21.76T440.3-65.79Q460.36-87.38,460.36-119q0-31.28-20.4-53.04T388.28-193.8q-31.28,0-51.34,21.59T316.88-119Q316.88-87.72,337.28-65.96Z" transform="translate(299.199 8116.447)" fill="#0e0e10"></path>
              <path data-name="Path 39345" d="M478.72-31.62q-36.04,35.7-90.44,35.7t-90.27-35.7Q262.14-67.32,262.14-119q0-51.34,36.21-87.21t90.61-35.87q54.4,0,90.27,35.7T515.1-119Q515.1-67.66,478.72-31.62ZM337.28-65.96q20.4,21.76,51.68,21.76T440.3-65.79Q460.36-87.38,460.36-119q0-31.28-20.4-53.04T388.28-193.8q-31.28,0-51.34,21.59T316.88-119Q316.88-87.72,337.28-65.96Z" transform="translate(312.199 8116.447)" fill="#33d35e" stroke="#2bfd2f" stroke-width="1"></path>
              <text transform="translate(456.338 8122.367)" fill="#0e0e10" font-size="340" font-family="Helvetica-Bold, Helvetica" font-weight="700">
                <tspan x="0" y="0">L</tspan>
              </text>
              <path data-name="Path 39342" d="M478.72-31.62q-36.04,35.7-90.44,35.7t-90.27-35.7Q262.14-67.32,262.14-119q0-51.34,36.21-87.21t90.61-35.87q54.4,0,90.27,35.7T515.1-119Q515.1-67.66,478.72-31.62ZM337.28-65.96q20.4,21.76,51.68,21.76T440.3-65.79Q460.36-87.38,460.36-119q0-31.28-20.4-53.04T388.28-193.8q-31.28,0-51.34,21.59T316.88-119Q316.88-87.72,337.28-65.96Z" transform="translate(-21.762 8116.447)" fill="#0e0e10"></path>
              <path data-name="Path 39343" d="M478.72-31.62q-36.04,35.7-90.44,35.7t-90.27-35.7Q262.14-67.32,262.14-119q0-51.34,36.21-87.21t90.61-35.87q54.4,0,90.27,35.7T515.1-119Q515.1-67.66,478.72-31.62ZM337.28-65.96q20.4,21.76,51.68,21.76T440.3-65.79Q460.36-87.38,460.36-119q0-31.28-20.4-53.04T388.28-193.8q-31.28,0-51.34,21.59T316.88-119Q316.88-87.72,337.28-65.96Z" transform="translate(-8.762 8116.447)" fill="#33d35e" stroke="#2bfd2f" stroke-width="1"></path>
              <text transform="translate(86.338 8115.367)" fill="#0e0e10" font-size="340" font-family="Helvetica-Bold, Helvetica" font-weight="700">
                <tspan x="0" y="0">C</tspan>
              </text>
            </g>
          </svg>
        </div>
        <div class="colors__wrap-box">
          <div class="colors__box-color" style="background-color: #0e0e10">
            <p>Hex = #0E0E10</p>
            <p>RGB = 14 14 16</p>
            <p>Cmyk = 83% 74% 61% 89%</p>
          </div>
          <div class="colors__box-color" style="background-color:#1b1b1f;">
            <p>Hex = #1B1B1F</p>
            <p>RGB = 27 27 31</p>
            <p>Cmyk = 80% 71% 58% 79%</p>
          </div>
          <div class="colors__box-color" style="background-color: #29292f;">
            <p>Hex = #29292F</p>
            <p>RGB = 41 41 47</p>
            <p>Cmyk = 77% 68% 54% 68%</p>
          </div>
          <div class="colors__box-color" style="background-color:#55555c;">
            <p>Hex = #55555C</p>
            <p>RGB = 85 85 92</p>
            <p>Cmyk = 63% 53% 44% 38%</p>
          </div>
          <div class="colors__box-color" style="background-color: #93939b;">
            <p>Hex = #93939B</p>
            <p>RGB = 147 147 155</p>
            <p>Cmyk = 45% 36% 29% 11%</p>
          </div>
          <div class="colors__box-color text-color" style="background-color: #e4e4e6; color: #0e0e10;">
            <p>Hex = #E4E4E6</p>
            <p>RGB = 228 228 230</p>
            <p>Cmyk = 13% 9% 9% 0%</p>
          </div>
          <div class="colors__box-color text-color" style="background-color: #efeff2;">
            <p>Hex = #EFEFF2</p>
            <p>RGB = 239 239 242</p>
            <p>Cmyk = 7% 5% 4% 0%</p>
          </div>
          <div class="colors__box-color text-color" style="background-color: #f7f8fc; border-right: 1rem solid #efeff2;">
            <p>Hex = #F7F8FC</p>
            <p>RGB = 247 248 252</p>
            <p>Cmyk = 2% 2% 0% 0%</p>
          </div>
          <div class="colors__box-color text-color" style="background-color: #33d35e;">
            <p>Hex = #33d35e</p>
            <p>RGB = 51 211 94</p>
            <p>Cmyk = 63% 0% 46% 17%</p>
          </div>
          <div class="colors__box-color" style="background-color: #ff0233;">
            <p>Hex = #FF0233</p>
            <p>RGB = 255 2 51</p>
            <p>Cmyk = 0% 95% 71% 0%</p>
          </div>
        </div>

      </div>
      <BrandBookIcons />


    </section>
  </div>
</template>

<script>
import BrandBookIcons from "~/components/sections/BrandBookIcons";
import BrandBookConstructorLogo from "~/components/sections/BrandBookConstructorLogo";
import BrandBookLogoBox from "~/components/elements/BrandBookLogoBox";
import TextTypingEffect from "~/components/elements/TextTypingEffect";
import {ROUTS_PATH} from "~/constant/routs";
export default {
  name: "brandBook",
  components: {TextTypingEffect, BrandBookLogoBox, BrandBookConstructorLogo, BrandBookIcons},
  async asyncData({store}) {
    try{
      const pageKey = 'brandbook';
      await store.dispatch('seo/getSeo');
      const seoPage = store.state.seo.seo[pageKey] || {};
      if (seoPage.code) {
        return {
          seo: seoPage
        };
      }
    } catch(e) {
      console.error(e);
      return {}
    }

  },
  head(){
    if (!this.seo) {
      return {}
    }

    return {
      title: this.seo.title,
      meta: [
        ...this.seo.metaTags
      ],
      link: [
        {
          rel: 'canonical',
          href: process.env.siteUrl + ROUTS_PATH.brandBook
        }
      ]
    }

  },
  data() {
    return {
      sloganWords: ['Создаём.', 'Адаптируем.', 'Улучшаем.', 'Интегрируем.', 'Развиваем.', 'Поддерживаем.']
    }
  },
  jsonld() {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Главная",
        "item": process.env.siteUrl + '/'
      },{
        "@type": "ListItem",
        "position": 2,
        "name": "Brand Book",
      }]
    }
  },
}
</script>


<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/style/components/brandbook.scss";
@import "@/assets/scss/style/components/brandbook-colors.scss";
@import "@/assets/scss/style/components/brandbook-constructor.scss";
@import "@/assets/scss/style/components/brandbook-font.scss";
@import "@/assets/scss/style/components/brandbook-icons.scss";
@import "@/assets/scss/style/components/brandbook-logo.scss";
@import "@/assets/scss/style/components/brandbook-paragraph.scss";
@import "@/assets/scss/style/components/brandbook-slogan.scss";
@import "@/assets/scss/style/components/brandbook-titles.scss";
</style>
