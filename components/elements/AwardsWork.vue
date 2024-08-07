<template>
 <div v-if="awards && awards.length" class="awards-tooltip" :class="classMod">
   <TooltipElement v-for="award in awards" class-mod="awards-tooltip__element" v-bind:key="award.id" :isRightPosition="true">
     <template #default>
       <NuxtImg :src="award.image"  :width="`${award.imageSize?.width || 'auto'}`" :height="`${award.imageSize?.height || 'auto'}`" :alt="award.title || 'award'" placeholder/>
     </template>
     <template #tooltip>
       <p v-if="award.title" class="awards-tooltip__title">{{award.title}}</p>
       <p v-if="award.description" class="awards-tooltip__description">{{award.description}}</p>
       <a v-if="award.url" :href="award.url" class="awards-tooltip__link" target="_blank">
         <span>Подробнее</span>
         <svg xmlns="http://www.w3.org/2000/svg" width="6.591" height="11.061"
              viewBox="0 0 6.591 11.061">
           <path d="M20,20.331l5-5-5-5" transform="translate(-19.47 -9.801)" fill="none"
                 stroke="inherit" stroke-miterlimit="10" stroke-width="1.5"/>
         </svg>
       </a>
     </template>
   </TooltipElement>
 </div>
</template>

<script>
import TooltipElement from "~/components/elements/TooltipElement";
export default {
  name: "AwardsWork",
  components: {TooltipElement},
  props: {
    awards: {
      type: Array,
      default: () => [],
    },
    classMod: [String, Object],
  }
}
</script>
