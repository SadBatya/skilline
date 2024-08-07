<template>
  <SectionWithBlocks :title="title" :count-slots="1">
    <template #description>
      <p class="portfolio__description">Система чатов для поддержания личных и групповых обсуждений
        жилищных вопросов, обмена файлами.</p>
      <p class="portfolio__description"></p>
    </template>
    <template #block1>
      <SectionWithSlot  class-mod="pf-container-small">
        <template #default>
          <div class="portfolio__main-box _add-indent">
            <div class="chat">
              <div class="chat__left">
                <div class="chat__left-top">
                  <div class="chat__search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15.918" height="15.917"
                         viewBox="0 0 15.918 15.917">
                      <path
                        d="M17.185,16.549,13.3,12.664a6.809,6.809,0,1,0-.637.636l3.887,3.885a.45.45,0,1,0,.637-.637ZM8.193,14.08a5.889,5.889,0,1,1,5.892-5.889A5.9,5.9,0,0,1,8.193,14.08Z"
                        transform="translate(-1.4 -1.401)" fill="#484d55" />
                    </svg>
                    <span>Поиск</span>
                  </div>
                  <div class="chat__wrap-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31"
                         viewBox="0 0 31 31">
                      <g fill="none">
                        <path d="M15.5,0A15.5,15.5,0,1,1,0,15.5,15.5,15.5,0,0,1,15.5,0Z"
                              stroke="none" />
                        <path
                          d="M 15.5 1 C 11.62690925598145 1 7.985639572143555 2.508260726928711 5.246950149536133 5.246950149536133 C 2.508260726928711 7.985639572143555 1 11.62690925598145 1 15.5 C 1 19.37308883666992 2.508260726928711 23.01436042785645 5.246950149536133 25.75304985046387 C 7.985639572143555 28.49173927307129 11.62690925598145 30 15.5 30 C 19.37308883666992 30 23.01436042785645 28.49173927307129 25.75304985046387 25.75304985046387 C 28.49173927307129 23.01436042785645 30 19.37308883666992 30 15.5 C 30 11.62690925598145 28.49173927307129 7.985639572143555 25.75304985046387 5.246950149536133 C 23.01436042785645 2.508260726928711 19.37308883666992 1 15.5 1 M 15.5 0 C 24.06040954589844 0 31 6.939590454101562 31 15.5 C 31 24.06040954589844 24.06040954589844 31 15.5 31 C 6.939590454101562 31 0 24.06040954589844 0 15.5 C 0 6.939590454101562 6.939590454101562 0 15.5 0 Z"
                          stroke="none" fill="#319adc" />
                      </g>
                      <g transform="translate(-596.232 -166)">
                        <line x2="17.232" transform="translate(612.131 173) rotate(90)"
                              fill="none" stroke="#319adc" stroke-linecap="round"
                              stroke-width="1" />
                        <line x2="17.232" transform="translate(603.514 181.616)" fill="none"
                              stroke="#319adc" stroke-linecap="round" stroke-width="1" />
                      </g>
                    </svg>

                  </div>
                </div>
                <div class="chat__left-center">
                  <p>Чаты</p>
                  <p>Участники</p>
                </div>
                <div class="chat__left-bottom">
                  <button class="chat__member _active-chat">
                    <div class="chat__avatar _online">НН</div>
                    <div class="chat__name">
                      <p class="chat__user-name">Надежда Николаевна</p>
                      <p>@NadezhdaKoniukhova Раздел «Техпо…</p>
                    </div>
                  </button>
                  <button class="chat__member">
                    <div class="chat__avatar">ИИ</div>
                    <div class="chat__name _no-active">
                      <p class="chat__user-name">Иван Иванович</p>
                      <p>Помогите с оформлением документов н…</p>
                    </div>
                  </button>
                </div>
              </div>
              <ChatElement />
            </div>
          </div>
        </template>
      </SectionWithSlot>
    </template>
  </SectionWithBlocks>

</template>

<script>
import SectionWithSlot from "~/components/works/base/SectionWithSlot";
import SectionWithBlocks from "~/components/works/base/SectionWithBlocks";
import ChatElement from "~/components/works/sntclub/ChatElement";

export default {
  name: "ChatSnt",
  components: {ChatElement, SectionWithBlocks, SectionWithSlot},
  data() {
    return {
      title: "Коммуникации",
    }
  }
}
</script>

<style scoped>

</style>
