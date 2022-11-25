<template>
     <div class="icon-circle">
          <div
               class="notis-circle"
               v-if="hasNotification && notificationCount > 0"
          >
               {{ notificationCount }}
          </div>
          <Icon :icon="icon" :color="color" :width="`${size}px`" />
     </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';
export default defineComponent({
     name: 'IconComponent',
     props: ['icon', 'color', 'size', 'hasNotification', 'notificationCount'],
     components: { Icon },
});
</script>
