<template>
  <div
    :style="props.style"
    :class="$cn('relative flex', layoutClasses.get(props.layout), props.class)"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  style: { type: Object, default: null },
  class: { type: String, default: null },
  layout: {
    type: String as PropType<"horizontal" | "vertical">,
    default: "horizontal",
  },
});

defineComponent({
  name: "SplitterComponent",
});

const layoutClasses = new Map([
  ["vertical", "flex-col"],
  ["horizontal", "flex-row"],
]);
</script>
