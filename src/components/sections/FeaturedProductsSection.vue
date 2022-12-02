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
                    />
               </div>
          </div>
     </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductCardComponent from '../items/ProductCardComponent.vue';
import { productlist } from '@/mocks/ProductListMock';
export default defineComponent({
     name: 'FeaturedProductsSection',
     components: { ProductCardComponent },
     computed: {
          products() {
               return productlist;
          },
     },
});
</script>
