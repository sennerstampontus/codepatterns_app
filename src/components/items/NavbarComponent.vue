<template>
     <div class="navbar-container">
          <div class="logo-container">
               <h1>Fixxo.</h1>
          </div>

          <!-- This might not be applying to ant principle when working with routes.
               But it was a nice experiment. I had DRY in mind and looped out all links from a seperate file
               to not repeat the action of adding "<router-link>" and with almost the same line of code for multiple links. 
          -->

          <div class="router-links">
               <div v-for="route in routes" :key="route.routeId">
                    <router-link :to="route.path" active-class="link-active">{{
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
import { routes } from '@/router';
import IconComponent from './IconComponent.vue';
export default defineComponent({
     components: { IconComponent },
     name: 'NavbarComponent',
     computed: {
          routes() {
               return routes;
          },
     },
});
</script>
