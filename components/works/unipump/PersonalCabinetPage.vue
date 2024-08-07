<template>
  <div class="portfolio__lk-main">
    <div class="pf-container portfolio__lk-main-bg">
      <div class="portfolio__lk-text-wrapper">
        <div class="portfolio__text-wrapper">
          <p class="portfolio__title-page">Личный кабинет оптовика</p>
          <p class="portfolio__description">У каждого клиента есть договор. К этому договору привязываются
            соглашения, в которых прописаны размеры скидок для клиента и склады откуда он может
            забирать/заказывать товар.</p>
        </div>
        <p class="portfolio__list-title">Возможности:</p>
        <ul class="portfolio__list-wrapper">
          <li class="portfolio__list-item">просмотр актуальной информации о счетах;</li>
          <li class="portfolio__list-item">текущий баланс клиента и задолженности;</li>
          <li class="portfolio__list-item">контакты ответственного менеджера со стороны компании;</li>
          <li class="portfolio__list-item">избранные товары;</li>
          <li class="portfolio__list-item">подписка на товары;</li>
          <li class="portfolio__list-item">информация о плане по продажам;</li>
          <li class="portfolio__list-item">информация о заказах;</li>
          <li class="portfolio__list-item">статистика продаж;</li>
          <li class="portfolio__list-item">информация о доступных скидках;</li>
          <li class="portfolio__list-item">информация об активных заказах и их актуальный статус;</li>

          <li class="portfolio__list-item">история заказов и возможность повторения заказов;</li>
          <li class="portfolio__list-item">возможность скачать все актуальные документы к заказам и товарам;
          </li>
          <li class="portfolio__list-item">информация о договорах и соглашениях клиента и их
            актуальных статусах;</li>
          <li class="portfolio__list-item">информация о профиле клиента;</li>
          <li class="portfolio__list-item">управление паролем и настройка уведомлений;</li>
          <li class="portfolio__list-item">добавление и редактирование существующих адресов;</li>
          <li class="portfolio__list-item">добавление доверенностей для транспортных компаний.</li>
        </ul>
      </div>
    </div>
    <div class="pf-container">
      <div class="portfolio__lk-img-wrapper mobile-container">
        <div class="portfolio__lk-wrapper mobile-box">
          <div class="portfolio__banner-mobile">
            <img src="/img/portfolio/pf-unipump/lk-main-page.jpg" class="mobile-display__img" alt="">
          </div>
          <ImageInPhoneSkroll img="/img/portfolio/pf-unipump/lk-mobile-1.jpg" />
          <div class="portfolio__banner-mobile">
            <img src="/img/portfolio/pf-unipump/lk-dynamic-page.jpg" class="mobile-display__img" alt="">
          </div>
          <div class="portfolio__banner-mobile personal-data">
            <img src="/img/portfolio/pf-unipump/lk-personal-data.jpg" class="mobile-display__img" alt="">
          </div>
          <ImageInPhoneSkroll img="/img/portfolio/pf-unipump/lk-mobile-2.jpg" />
          <div class="portfolio__banner-mobile order-page">
            <img src="/img/portfolio/pf-unipump/lk-order-page.jpg" class="mobile-display__img" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageInPhoneSkroll from "~/components/works/unipump/ImageInPhoneSkroll";
export default {
  name: "PersonalCabinetPage",
  components: {ImageInPhoneSkroll}
}
</script>
