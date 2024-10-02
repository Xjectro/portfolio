<template>
  <div class="flex flex-wrap items-center gap-4">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="transition-all flex items-center gap-3 text-black dark:text-white"
    >
      <NuxtImg :src="item.iconURL" class="w-8 h-8 object-cover rounded-lg" />
      <h4 class="text-base font-chakra-petch font-medium">{{ item.name }}</h4>
      <Icon
        v-if="items?.length !== index + 1"
        name="ph:dot-outline-fill"
        class="w-4 h-4"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  items: Array as PropType<{ name: string; to?: string; iconURL?: string }[]>,
});
defineComponent({
  name: "BreadcrumbComponent",
});
</script>
