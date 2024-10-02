<template>
  <div>
    <nuxt-link v-if="!!props.to" v-bind="button">
      <slot />
    </nuxt-link>
    <button v-else v-bind="button" type="button" @click="$emit('interaction')">
      <slot />
    </button>
  </div>
</template>

<script lang="ts" setup>
const { $cn } = useNuxtApp();

defineEmits(["interaction"]);
const props = defineProps({
  class: { type: String, default: "" },
  to: { type: String, required: false, default: null },
  disabled: Boolean,
});

defineComponent({
  name: "NdsButtonComponent",
});

const button = reactive({
  class: $cn(
    "transition-all flex flex-grow-0 items-center font-chakra-petch font-medium p-3 rounded-full bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900",
    props.disabled
      ? "cursor-not-allowed opacity-80"
      : "pointer-events-auto cursor-pointer opacity-100",
    props.class,
  ),
  disabled: props.disabled,
  to: props.to,
});
</script>
