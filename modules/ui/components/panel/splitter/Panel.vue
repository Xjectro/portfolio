<template>
  <div :class="$cn('', props.class)">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  class: { type: String, default: null },
});
defineComponent({
  name: "SplitterPanelComponent",
});
</script>
