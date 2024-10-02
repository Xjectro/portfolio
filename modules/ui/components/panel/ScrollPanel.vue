<template>
  <div
    :class="
      $cn('transition-all flex', props.class, {
        'flex-col overflow-auto': props.align == 'vertical',
        'items-center overflow-x-auto overflow-y-hidden':
          props.align == 'horizontal',
      })
    "
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  class: { type: String, default: null },
  align: {
    type: String as PropType<"horizontal" | "vertical">,
    default: "vertical",
  },
});
</script>
