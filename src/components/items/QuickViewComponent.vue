<template>
     <div class="quick-view-backdrop" @click="close"></div>
     <div class="quick-view-container">
          <div class="quick-view-title-toolbar">
               <p>{{ product?.title }}</p>
               <Icon
                    icon="carbon:close"
                    class="quick-view-close"
                    @click="close"
               />
          </div>
          <div class="quick-view-grid-container">
               <div class="quick-view-image-container">
                    <img :src="product?.itemImage" alt="" />
               </div>

               <div class="quick-view-description-container">
                    {{ product?.description }}
               </div>
          </div>
          <div class="quick-view-sizes-container">
               <div class="quick-view-size-box-container">
                    <p>Size:</p>
                    <size-box-component
                         v-for="size in product?.size"
                         :key="size"
                         :size-name="size"
                    />
               </div>
          </div>
          <div class="quick-view-colors-container">
               Color:
               <select name="color select" id="color-select">
                    <option v-for="color in product?.color" :key="color">
                         {{ color }}
                    </option>
               </select>
          </div>

          <div class="quick-view-rating-container">
               <p>Ratings and Reviews</p>

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
          </div>
          <div class="specs-container">
               <h4>Specifications</h4>

               <p v-if="product?.sleeves">
                    Sleeves: <span>{{ product?.sleeves }}</span>
               </p>
               <p v-if="product?.dressLength">
                    Dress type: <span>{{ product?.dressLength }}</span>
               </p>

               <p v-if="product?.isPolorized">These glasses are polorized.</p>
               <p v-if="product?.type">
                    This clock is: <span>{{ product?.type }}</span>
               </p>
               <p v-if="product?.wristband">
                    Wristband: <span>{{ product?.wristband }}</span>
               </p>
               <p v-if="product?.isWaterproof != undefined">
                    Waterproof: <span v-if="product?.isWaterproof">Yes</span>
                    <span v-else>No</span>
               </p>
          </div>
     </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';
import SizeBoxComponent from './SizeBoxComponent.vue';
export default defineComponent({
     name: 'QuickViewComponent',
     props: { product: Object },
     components: { Icon, SizeBoxComponent },

     methods: {
          close() {
               this.$emit('close');
          },
          addClass(e: any) {
               e.target.classList.add('isHover');
          },
          removeClass(e: any) {
               e.target.classList.remove('isHover');
          },
     },
});
</script>
