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

               <p>Ratings and Reviews</p>

               <div class="quick-view-rating-container">
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
               <div class="quick-view-description-container">
                    {{ product?.description }}
               </div>
          </div>
          <h4>Specifications</h4>
          <div class="quick-view-sizes-container">
               <div class="quick-view-size-box-container">
                    <size-box-component
                         v-for="size in product?.size"
                         :key="size"
                         :size-name="size"
                    />
               </div>
               <p v-if="product?.isPolorized">These glasses are polorized.</p>
               <p v-if="product?.type">This clock is: {{ product?.type }}</p>
               <p v-if="product?.wristband">
                    Wristband: {{ product?.wristband }}
               </p>
               <p v-if="product?.isWaterproof != undefined">
                    Waterproof: {{ product?.isWaterproof }}
               </p>
          </div>
          <div class="quick-view-colors-container">
               <select name="color select" id="color-select">
                    <option v-for="color in product?.color" :key="color">
                         {{ color }}
                    </option>
               </select>
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
