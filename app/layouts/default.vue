<template>
  <div>
    <NuxtLoadingIndicator color="#ffff" />
    <NuxtRouteAnnouncer />
    <div v-if="isLoaded">
      <NuxtPage />
    </div>
  </div>
</template>

<script lang="ts" setup>
const isLoaded = ref(false);

tryOnMounted(() => (isLoaded.value = true));
</script>
