<template>
  <nuxt-link
    v-if="!!props.to"
    :to="
      locales.find((l: any) => props.to?.includes('/' + l.language))
        ? props.to
        : localePath(props.to)
    "
    :class="classes"
  >
    <div class="flex items-center justify-between w-full">
      <div :class="$cn('flex items-center gap-2', props.class)">
        <slot />
      </div>
      <Icon
        name="charm:chevron-right"
        class="transition-all opacity-0 group-hover:opacity-100"
      />
    </div>
  </nuxt-link>
  <button
    v-else
    type="button"
    :class="$cn(classes, props.class)"
    @click="$emit('interaction')"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
const { $cn } = useNuxtApp();
const { locales } = useI18n();
const { localePath } = useImports();

defineEmits(["interaction"]);
const props = defineProps({
  class: { type: String, default: null },
  to: { type: String, default: null },
});

const classes = computed(() =>
  $cn(
    "transition-all flex items-center justify-start overflow-hidden w-full px-4 text-base font-chakra-petch font-medium whitespace-nowrap group hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-100",
  ),
);
</script>
