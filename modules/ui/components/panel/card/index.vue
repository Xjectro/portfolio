<template>
  <div
    :class="
      $cn('transition-all flex flex-col items-start gap-7 w-full', {
        'pb-10 border-b border-solid border-zinc-200 dark:border-zinc-800':
          props.border,
      })
    "
  >
    <header v-if="hypertext" class="flex flex-col items-start gap-2">
      <h1
        class="transition-all whitespace-nowrap text-base font-bold font-chakra-petch drop-shadow-dark-sm dark:drop-shadow-light-sm text-zinc-900 dark:text-white"
      >
        {{ label }}
      </h1>
      <p
        class="font-thin font-inter text-start leading-5 text-sm text-zinc-500 dark:text-zinc-400"
      >
        {{ sublabel }}
      </p>
    </header>
    <div
      :class="
        $cn(
          'transition-all relative flex items-center justify-between w-full h-[50px] px-3 rounded-lg bg-zinc-100 dark:bg-zinc-950 text-zinc-700 dark:text-zinc-200',
          props.class,
        )
      "
    >
      <nav class="flex items-center gap-4">
        <slot name="start-area" />
      </nav>
      <section
        class="absolute right-0 flex items-center justify-end gap-2 mr-3 rounded-xl bg-zinc-100 dark:bg-zinc-950"
      >
        <slot name="end-area" />
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  label: { type: String, default: null },
  sublabel: { type: String, default: null },
  class: { type: String, default: null },
  border: Boolean,
  hypertext: Boolean,
});
defineComponent({
  name: "CardComponent",
});
</script>
