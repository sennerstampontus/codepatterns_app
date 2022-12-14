<!-- To make it easier to understand what product to change and not violate the OCP(Open-Closed Principle), I've created different card components for individual categories.
    So if there will be another category in the future, I don't have to change the already working cards.
    This makes it OCP. When the corresponding component is created and done, it's done, I don't have to change it.
     
    You could argue that it could be a repeated action. But I find this solution more efficient because it looks cleaner 
     in the component, instead of having a lot of "v-if" etc. And I don't have to change a eg. "ProductCardComponent"
     to match every product, which causes problems, if I add a new product that has more props than previous products.
    Also to fullfill SRP(Single Responsibility Principle), I choosed to follow SRP more than DRY in this case. Because it makes the components more understandable.
    It's only responsible for it's product type.
-->

<template>
     <div
          class="featured-products-card"
          @mouseover="animateIn"
          @mouseout="animateOut"
     >
          <div class="card-image">
               <img :src="item.imageUrl" alt="" />
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
                         @open-quick-view="openQuickView(item)"
                    />
               </div>
               <div class="card-content-background">
                    <h3>{{ item.category }}</h3>
                    <h1>{{ item.title }}</h1>
                    <div class="card-ratings">
                         <div
                              class="card-ratings-container"
                              v-for="number in item.rating"
                              :key="number"
                         >
                              <Icon
                                   icon="material-symbols:star"
                                   class="card-ratings-icon"
                              />
                         </div>
                    </div>
                    <div class="card-price" v-if="!item.isOnSale">
                         ${{ item.price }}
                    </div>
                    <div class="isOnSale" v-else>${{ item.salePrice }}</div>
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
import { IWatch } from '@/models/interfaces/WatchInterface';
export default defineComponent({
     name: 'WatchCardComponent',
     components: { Icon, QuickViewButtonComponent, IconComponent },
     props: { cardId: String, product: Object as PropType<IWatch> },
     computed: {
          item(): IWatch {
               if (this.product !== undefined) return this.product;

               const item: any = {};
               return item;
          },
     },
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
          openQuickView(item: IWatch) {
               this.$emit('open', item);
          },
     },
});
</script>
