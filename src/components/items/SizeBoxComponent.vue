<template>
     <div
          class="quick-view-size-box"
          @mouseover="addClass($event)"
          @mouseout="removeClass($event)"
     >
          {{ sizeName }}
     </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
     name: 'SizeBoxComponent',
     props: ['sizeName'],
     methods: {
          addClass(e: any) {
               e.target.classList.add('isHover');
          },
          removeClass(e: any) {
               e.target.classList.remove('isHover');
          },
     },
});
</script>
