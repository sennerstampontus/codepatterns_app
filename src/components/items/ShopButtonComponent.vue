<template>
     <div
          class="button-container"
          @mouseover="animateIn"
          @mouseout="animateOut"
     >
          <div class="left-bottom-border"></div>
          <div class="left-top-border"></div>
          <div class="right-bottom-border"></div>
          <div class="right-top-border"></div>
          <div class="button-text">SHOP NOW</div>
     </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import gsap from 'gsap';
export default defineComponent({
     name: 'ShopButtonComponent',
     methods: {
          animateIn() {
               const tl = gsap.timeline();
               tl.add('start')
                    .to(
                         '.left-bottom-border',
                         {
                              left: 30,
                         },
                         'start'
                    )
                    .to(
                         '.left-top-border',
                         {
                              left: 30,
                              right: 132.7,
                         },
                         'start'
                    )
                    .to(
                         '.right-bottom-border',
                         {
                              right: 30,
                              left: 132.7,
                         },
                         'start'
                    )
                    .to(
                         '.right-top-border',
                         {
                              right: 30,
                         },
                         'start'
                    )
                    .to(
                         '.button-container',
                         {
                              background: '#c95b5b',
                         },
                         'start'
                    );
          },
          animateOut() {
               const tl = gsap.timeline();
               tl.add('start')
                    .to(
                         '.left-bottom-border',
                         {
                              left: 10,
                         },
                         'start'
                    )
                    .to(
                         '.left-top-border',
                         {
                              left: 10,
                              right: 154.724,
                         },
                         'start'
                    )
                    .to(
                         '.right-bottom-border',
                         {
                              right: 10,
                              left: 154.724,
                         },
                         'start'
                    )
                    .to(
                         '.right-top-border',
                         {
                              right: 10,
                         },
                         'start'
                    )
                    .to(
                         '.button-container',
                         {
                              background: '#ff7373',
                         },
                         'start'
                    );
          },
     },
});
</script>
