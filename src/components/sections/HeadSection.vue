<template>
     <div class="homeview-container">
          <div class="image-container">
               <img
                    src="https://img.freepik.com/free-photo/portrait-handsome-smiling-young-man-model-wearing-casual-summer-pink-clothes-fashion-stylish-man-posing_158538-5355.jpg?w=2000"
                    alt="Fashion-Model-Man-PNG-Image.png"
               />
          </div>

          <div class="head-section-middle">
               <h1>
                    SALE UP<br />
                    To 50% Off
               </h1>
               <p>Online shopping free home delivery over $100</p>
               <shop-button-component button-title="Shop now" />
          </div>
          <div class="image-container-right">
               <img
                    src="https://img.freepik.com/premium-photo/studio-shot-restful-beautiful-caucasian-woman-sits-chair-wears-shirt-white-trousers-shoes_95891-1153.jpg?w=1380"
                    alt="Fashion-Model-Man-PNG-Image.png"
               />
          </div>
     </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ShopButtonComponent from '../items/ShopButtonComponent.vue';
export default defineComponent({
     components: { ShopButtonComponent },
     name: 'HeadSection',
});
</script>
