<template>
     <div class="featured-products-section">
          <div class="featured-section-title"><h3>Featured Products</h3></div>
          <div class="featured-products-container">
               <!-- Looping through the entire list of products and seperate them based on category.
                    Makes it smoother and I don't have to repeat myself in this case. I go with DRY this time instead.
                    With this "<component>" I can assign  the correct component by passing the category
                    to the ":is" prop. Then I don't need a "v-if" action to check which component to load.
                    Also SRP, the correspondend component has only one task, to present it's product type.
                    eg. "ShoeCardComponent" has the responsibility to present the shoes, and therefore has other properties to show,
                    and the product that comes in to ShoeCardComponent is defined as IShoe.
                   
               -->
               <div
                    class="feature-cards-contianer"
                    v-for="product in newProductList"
                    :key="product.id"
               >
                    <component
                         :is="product.category"
                         :product="product"
                         :cardId="product.id"
                         @open="open"
                    />
               </div>
          </div>
     </div>
     <quick-view-component
          v-if="quickView"
          @close="quickView = false"
          :product="product"
     />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Shoes from '../items/ShoeCardComponent.vue';
import Watches from '../items/WatchCardComponent.vue';
import QuickViewComponent from '../items/QuickViewComponent.vue';
import { IProduct } from '@/models/interfaces/ProductInterface';
import { getShoes } from '@/methods/GetShoes';
import { getWatches } from '@/methods/GetWatches';
export default defineComponent({
     name: 'FeaturedProductsSection',
     components: {
          QuickViewComponent,
          Shoes,
          Watches,
     },

     data() {
          return {
               quickView: false,
               product: {} as IProduct,
               newProductList: [] as any[],
          };
     },
     mounted() {
          this.combineList();
     },
     methods: {
          open(product: any) {
               this.product = product;
               this.quickView = true;
          },

          // This method combines the products to one list of products with the result from
          // extracted methods "getShoes()" and "getWatches()".
          // This way it can always easily be added more categories and be applied in this list.
          async combineList() {
               const shoes = await getShoes();
               const watches = await getWatches();

               const combinedList = [...shoes, ...watches];

               this.newProductList = combinedList;
          },
     },
});
</script>
