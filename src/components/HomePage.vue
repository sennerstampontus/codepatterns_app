<template>
     <head-section />
     <display-section />
     <featured-products-section />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ShopButtonComponent from './items/ShopButtonComponent.vue';
import DisplaySection from './sections/DisplaySection.vue';
import FeaturedProductsSection from './sections/FeaturedProductsSection.vue';
import HeadSection from './sections/HeadSection.vue';

export default defineComponent({
     components: {
          ShopButtonComponent,
          HeadSection,
          DisplaySection,
          FeaturedProductsSection,
     },
     name: 'HomePage',
     props: {
          msg: String,
     },
});
</script>
