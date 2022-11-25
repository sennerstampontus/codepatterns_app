<template>
     <div class="navbar-container">
          <div class="logo-container">
               <h1>Fixxo.</h1>
          </div>
          <div class="router-links">
               <div v-for="route in routes" :key="route.routeId">
                    <router-link :to="route.route" active-class="link-active">{{
                         route.linkTitle
                    }}</router-link>
               </div>
          </div>
          <div class="icons-container">
               <icon-component icon="ion:search" color="black" size="18" />
               <icon-component
                    icon="ion:git-compare-outline"
                    color="black"
                    size="18"
               />
               <icon-component
                    icon="ph:heart-straight"
                    color="black"
                    size="18"
                    :has-notification="true"
                    notification-count="1"
               />
               <icon-component
                    icon="clarity:shopping-bag-line"
                    color="black"
                    size="18"
                    :has-notification="true"
                    notification-count="3"
               />
          </div>
     </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { UserRoutes } from '@/controllers/UserRoutes';
import IconComponent from './IconComponent.vue';
export default defineComponent({
     components: { IconComponent },
     name: 'NavbarComponent',
     computed: {
          routes() {
               return UserRoutes;
          },
     },
});
</script>
