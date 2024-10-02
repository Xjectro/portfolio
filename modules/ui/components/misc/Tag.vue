<template>
  <div
    :class="
      $cn(
        'transition-all flex items-center px-2 rounded-full gap-5 backdrop-blur-xl font-chakra-petch font-medium',
        severityClasses.get(props.severity),
      )
    "
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  severity: {
    type: String as PropType<
      "secondary" | "primary" | "success" | "danger" | "warn"
    >,
    default: "",
  },
});

defineComponent({
  name: "TagComponent",
});

const severityClasses = new Map([
  [
    "secondary",
    "border-zinc-300 dark:border-zinc-900 bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-white",
  ],
  ["primary", "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950"],
  [
    "success",
    "border border-solid border-opacity-20 bg-opacity-10 hover:bg-opacity-20 border-green-500 bg-green-500 text-green-700 dark:text-green-500",
  ],
  [
    "danger",
    "border border-solid border-opacity-20 bg-opacity-5 hover:bg-opacity-10 border-opacity-10 border-red-500 bg-red-500 text-red-600",
  ],
  [
    "warn",
    "border border-solid border-opacity-20 bg-opacity-5 hover:bg-opacity-10 border-opacity-10 border-orange-500 bg-orange-500 text-orange-600",
  ],
]);
</script>
