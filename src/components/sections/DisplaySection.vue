<template>
     <div class="display-card-section">
          <div class="display-card-container">
               <div class="display-left-card">
                    <div class="display-left-card-container">
                         <div class="display-left-card-content">
                              <h1 class="display-left-card-title">
                                   Winter Clearence <br />
                                   Up to 70% Off!
                              </h1>
                              <p>
                                   Sed ut perspiciatis unde omnis iste natus
                                   error sit voluptatem accusantium doloremque
                                   laudantium, totam rem apriam eaque ipsa quae
                                   ab illo inventore.
                              </p>
                              <div class="display-left-content-btn">
                                   <shop-button-component
                                        button-title="Shop now"
                                        color="#23262A"
                                        hover-color="#495058"
                                        button-id="WinterClearence"
                                   />
                              </div>
                         </div>
                         <img
                              src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                              alt=""
                         />
                    </div>
               </div>
               <div class="display-right-card">
                    <div class="display-right-card-container">
                         <div class="display-right-card-content">
                              <h1 class="display-left-card-title">
                                   New <br />
                                   Arrivals
                              </h1>

                              <div class="display-left-content-btn">
                                   <shop-button-component
                                        button-title="Shop now"
                                        color="#23262A"
                                        hover-color="#495058"
                                        button-id="NewArrivals"
                                   />
                              </div>
                         </div>
                         <img
                              src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg"
                              alt=""
                         />
                    </div>
               </div>
          </div>
     </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ShopButtonComponent from '../items/ShopButtonComponent.vue';
export default defineComponent({
     name: 'DisplaySection',
     components: { ShopButtonComponent },
});
</script>
