<template>
     <routers-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RoutersView from './views/RoutersView.vue';
export default defineComponent({
     components: { RoutersView },
     name: 'App',
});
</script>

<style lang="scss">
@import './style/css/style.min.css';
</style>
