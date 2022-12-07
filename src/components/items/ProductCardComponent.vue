<template>
     <div
          class="featured-products-card"
          @mouseover="animateIn"
          @mouseout="animateOut"
     >
          <div class="card-image">
               <img :src="product?.itemImage" alt="" />
               <div
                    class="card-side-icons"
                    :class="`card-side-icons-${cardId}`"
               >
                    <div class="icon-seperator">
                         <icon-component
                              icon="ph:heart-straight"
                              color="black"
                              size="18"
                              :has-notification="true"
                              notification-count="1"
                         />
                    </div>
                    <div class="icon-seperator">
                         <icon-component
                              icon="ion:git-compare-outline"
                              color="black"
                              size="18"
                         />
                    </div>
                    <div class="icon-seperator">
                         <icon-component
                              icon="clarity:shopping-bag-line"
                              color="black"
                              size="18"
                              :has-notification="true"
                              notification-count="3"
                         />
                    </div>
               </div>

               <div
                    class="card-button-container"
                    :class="`card-button-container-${cardId}`"
               >
                    <quick-view-button-component
                         button-title="Quick view"
                         button-id="quickview"
                         color="#ff7373"
                         hover-color="#ca5d5d"
                         @open-quick-view="openQuickView(product)"
                    />
               </div>
               <div class="card-content-background">
                    <h3>{{ product?.category }}</h3>
                    <h1>{{ product?.title }}</h1>
                    <div class="card-ratings">
                         <div
                              class="card-ratings-container"
                              v-for="number in product?.rating"
                              :key="number"
                         >
                              <Icon
                                   icon="material-symbols:star"
                                   class="card-ratings-icon"
                              />
                         </div>
                    </div>
                    <div class="card-price">${{ product?.price }}</div>
               </div>
          </div>
     </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Icon } from '@iconify/vue';
import gsap from 'gsap';
import QuickViewButtonComponent from './QuickViewButtonComponent.vue';
import IconComponent from './IconComponent.vue';
import { IProduct } from '@/models/interfaces/ProductInterface';
export default defineComponent({
     name: 'ProductCardComponent',
     components: { Icon, QuickViewButtonComponent, IconComponent },
     props: { cardId: Number, product: Object as PropType<IProduct> },

     methods: {
          animateIn() {
               const tl = gsap.timeline();

               tl.add('start')
                    .to(
                         `.card-button-container-${this.cardId}`,
                         {
                              opacity: 1,
                              y: 0,
                              ease: 'circ',
                              duration: 0.5,
                         },
                         'start'
                    )
                    .to(
                         `.card-side-icons-${this.cardId}`,
                         {
                              opacity: 1,
                              right: 10,
                              duration: 0.5,
                         },
                         'start'
                    );
          },
          animateOut() {
               const tl = gsap.timeline();
               const test = 0;

               tl.add('start')
                    .to(
                         `.card-button-container-${this.cardId}`,
                         {
                              opacity: 0,
                              y: 80,
                              ease: 'circ',
                              duration: 0.5,
                         },
                         'start'
                    )
                    .to(
                         `.card-side-icons-${this.cardId}`,
                         {
                              opacity: 0,
                              right: -50,
                              duration: 0.5,
                         },
                         'start'
                    );
          },
          openQuickView(product?: IProduct) {
               this.$emit('open', product);
          },
     },
});
</script>
