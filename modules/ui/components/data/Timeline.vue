<template>
  <ol class="relative flex items-start w-full justify-between">
    <div
      class="absolute z-0 flex w-full min-h-0.5 bg-zinc-300 dark:bg-zinc-900"
    />

    <li
      v-for="(value, index) in values"
      :key="index"
      :class="itemClasses(index)"
    >
      <div
        class="flex items-center justify-center w-6 h-6 rounded-full ring-0 sm:ring-8 shrink-0 ring-stone-100 bg-stone-100 dark:ring-zinc-950 dark:bg-zinc-900"
      >
        <Icon
          :name="value.icon"
          class="w-2.5 h-2.5 text-zinc-950 dark:text-white"
        />
      </div>
      <p :class="textClasses(index)">
        {{ value.name }}
      </p>
    </li>
  </ol>
</template>

<script lang="ts" setup>
const { $cn } = useNuxtApp();

const props = defineProps({
  values: {
    type: Array as PropType<{ name: string; icon: string }[]>,
    required: true,
  },
});

const itemClasses = computed(
  () => (index: number) =>
    $cn("flex flex-col w-full z-10 -mt-3 gap-3", {
      "items-end": props.values.length === index + 1,
      "items-start": props.values.length !== index + 1,
      "items-center": index !== 0 && index !== props.values.length - 1,
    }),
);

const textClasses = computed(
  () => (index: number) =>
    $cn(
      "transition-all font-medium font-inter text-start text-sm text-zinc-400 dark:text-zinc-500",
      {
        "text-end": props.values.length === index + 1,
        "text-start": props.values.length !== index + 1,
        "text-center": index !== 0 && index !== props.values.length - 1,
      },
    ),
);

defineComponent({
  name: "TimelineComponent",
});
</script>
