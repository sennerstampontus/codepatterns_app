<template>
     <navbar-component />
     <router-view />
</template>

<script lang="ts">
import NavbarComponent from '@/components/items/NavbarComponent.vue';
import { defineComponent } from 'vue';
export default defineComponent({
     name: 'RoutersView',
     components: { NavbarComponent },
});
</script>
