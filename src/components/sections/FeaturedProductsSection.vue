<template>
     <div class="featured-products-section">
          <div class="featured-section-title"><h3>Featured Products</h3></div>
          <div class="featured-products-container">
               <div
                    class="feature-cards-contianer"
                    v-for="product in products"
                    :key="product.id"
               >
                    <product-card-component
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
import { defineComponent, PropType } from 'vue';
import ProductCardComponent from '../items/ProductCardComponent.vue';
import { productlist } from '@/mocks/ProductListMock';
import QuickViewComponent from '../items/QuickViewComponent.vue';
import { IProduct } from '@/models/interfaces/ProductInterface';
import { IShoe } from '@/models/interfaces/ShoeInterface';
import { IWatch } from '@/models/interfaces/WatchInterface';
import { getAllProducts } from '@/methods/GetProducts';
export default defineComponent({
     name: 'FeaturedProductsSection',
     components: { ProductCardComponent, QuickViewComponent },
     computed: {
          products() {
               return productlist;
          },
     },
     data() {
          return {
               quickView: false,
               product: {} as IProduct,
          };
     },
     mounted() {
          this.splitList();
     },
     methods: {
          open(product: IProduct) {
               console.log(product);
               this.product = product;
               this.quickView = true;
          },
          async splitList() {
               const products = await getAllProducts();
               let shoes: IShoe[] = [];
               let watches: IWatch[] = [];
               products.forEach((element: IProduct) => {
                    switch (element.category) {
                         case 'Shoes':
                              shoes.push(element as IShoe);
                              break;
                         case 'Watches':
                              watches.push(element as IWatch);
                              break;
                         default:
                              break;
                    }
               });

               console.log(shoes);
               console.log(watches);
          },
     },
});
</script>
