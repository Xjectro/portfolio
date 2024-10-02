<template>
  <NuxtLink
    :to="localePath(props.to)"
    :class="
      $cn(
        'transition-all flex items-center justify-between w-full py-2 px-2 whitespace-nowrap rounded-lg group font-medium font-chakra-petch bg-transparent',
        props.here
          ? 'bg-zinc-200 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-950 text-black dark:text-zinc-100'
          : 'hover:bg-zinc-200 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-100',
      )
    "
  >
    <span class="flex items-center gap-3">
      <slot />
    </span>
    <!-- <Icon name="charm:chevron-right" class="transition-all opacity-0 group-hover:opacity-100" /> -->
  </NuxtLink>
</template>

<script lang="ts" setup>
const { localePath } = useImports();

const props = defineProps({
  to: { type: String, required: true },
  here: Boolean,
});
</script>
