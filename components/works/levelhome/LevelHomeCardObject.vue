<template>
  <DesktopAndMobilePageWithScroll
    :title="title"
    :description="description"
    :description_2="description_2"
    :description_3="description_3"
    :imgMain="imgMain"
    :imgMobile="imgMobile"
  />
</template>

<script>
import imgDesktop from '@/static/img/portfolio/pf-levelhome/level-home-card-object-desktop.png'
import imgMobile from '@/static/img/portfolio/pf-levelhome/level-home-card-object-mb.png'
import DesktopAndMobilePageWithScroll from '~/components/works/base/DesktopAndMobilePageWithScroll'

export default {
  name: 'LevelHomeCardObject',
  components: { DesktopAndMobilePageWithScroll },
  data() {
    return {
      title: 'Карточка объекта',
      description:
        'Содержит информацию, ориентированную в первую очередь на действующих клиентов - жильцов объектов, находящихся под управлением компании',
      description_2: 'Самая важная и необходимая информация демонстрируются на данной странице: адрес офиса и объекта, ответственные сотрудники  и важные документы.',
      description_3: 'В случае необходимости здесь можно получить больше информации об объекте и застройщике.',
      imgMain: imgDesktop,
      imgMobile,
    }
  },
}
</script>

<style scoped></style>
