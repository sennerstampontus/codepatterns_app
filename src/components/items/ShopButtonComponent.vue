<template>
     <div
          class="button-container"
          :class="`button-container-${buttonId}`"
          :style="`background:${color}`"
          :id="buttonId"
          @mouseover="animateIn"
          @mouseout="animateOut"
     >
          <div
               class="left-bottom-border"
               :class="`left-bottom-border-${buttonId}`"
          ></div>
          <div
               class="left-top-border"
               :class="`left-top-border-${buttonId}`"
          ></div>
          <div
               class="right-bottom-border"
               :class="`right-bottom-border-${buttonId}`"
          ></div>
          <div
               class="right-top-border"
               :class="`right-top-border-${buttonId}`"
          ></div>
          <div class="button-text">{{ buttonTitle }}</div>
     </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import gsap from 'gsap';
export default defineComponent({
     name: 'ShopButtonComponent',
     props: {
          color: {
               type: String,
               Default: '#ff7373',
          },
          hoverColor: {
               type: String,
               Default: '#ca5d5d',
          },
          buttonId: {
               type: String,
               Default: '',
          },
          buttonTitle: {
               type: String,
               Default: 'shop now',
          },
     },
     methods: {
          animateIn() {
               const tl = gsap.timeline();
               tl.add('start')
                    .to(
                         `.left-bottom-border-${this.buttonId}`,
                         {
                              left: 30,
                         },
                         'start'
                    )
                    .to(
                         `.left-top-border-${this.buttonId}`,
                         {
                              left: 30,
                              right: 132.7,
                         },
                         'start'
                    )
                    .to(
                         `.right-bottom-border-${this.buttonId}`,
                         {
                              right: 30,
                              left: 132.7,
                         },
                         'start'
                    )
                    .to(
                         `.right-top-border-${this.buttonId}`,
                         {
                              right: 30,
                         },
                         'start'
                    )
                    .to(
                         `.button-container-${this.buttonId}`,
                         {
                              background: `${this.hoverColor}`,
                         },
                         'start'
                    );
          },
          animateOut() {
               const tl = gsap.timeline();
               tl.add('start')
                    .to(
                         `.left-bottom-border-${this.buttonId}`,
                         {
                              left: 10,
                         },
                         'start'
                    )
                    .to(
                         `.left-top-border-${this.buttonId}`,
                         {
                              left: 10,
                              right: 153.724,
                         },
                         'start'
                    )
                    .to(
                         `.right-bottom-border-${this.buttonId}`,
                         {
                              right: 10,
                              left: 154.724,
                         },
                         'start'
                    )
                    .to(
                         `.right-top-border-${this.buttonId}`,
                         {
                              right: 10,
                         },
                         'start'
                    )
                    .to(
                         `.button-container-${this.buttonId}`,
                         {
                              background: `${this.color}`,
                         },
                         'start'
                    );
          },
     },
});
</script>
