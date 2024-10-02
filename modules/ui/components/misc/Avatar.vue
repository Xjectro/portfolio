<template>
  <div
    :class="
      $cn(
        'relative overflow-hidden',
        sizeClasses.get(props.size),
        props.class,
        {
          'transition-all duration-75 w-full h-full outline outline-2 outline-offset-2 outline-zinc-300 dark:outline-zinc-900':
            props.border,
          'rounded-full': props.rounded,
          'hover:outline-zinc-400 dark:hover:outline-zinc-800': props.hover,
        },
      )
    "
  >
    <NuxtImg :src="props.image" class="w-full h-full" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  image: { type: String, default: "" },
  class: { type: String, default: null },
  size: {
    type: String as PropType<
      "large" | "xl" | "2xl" | "small" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl"
    >,
    default: "large",
  },
  rounded: Boolean,
  border: Boolean,
  hover: Boolean,
});

defineComponent({
  name: "AvatarComponent",
});

const sizeClasses = new Map([
  ["small", "min-w-8 min-h-8 max-w-8 max-h-8"],
  ["large", "min-w-10 min-h-10 max-w-10 max-h-10"],
  ["xl", "min-w-12 min-h-12 max-w-12 max-h-12"],
  ["2xl", "min-w-20 min-h-20 max-w-20 max-h-20"],
  ["3xl", "min-w-22 min-h-22 max-w-22 max-h-22"],
  ["4xl", "min-w-24 min-h-24 max-w-24 max-h-24"],
  ["5xl", "min-w-28 min-h-28 max-w-28 max-h-28"],
  ["6xl", "min-w-32 min-h-32 max-w-32 max-h-32"],
  ["7xl", "min-w-36 min-h-36 max-w-36 max-h-36"],
]);
</script>
