<template>
  <p
    class="w-full p-5 rounded-lg border border-solid border-zinc-900 text-start font-chakra-petch font-medium text-zinc-300 bg-zinc-950"
  >
    <slot />
  </p>
</template>

<script lang="ts" setup>
defineComponent({ name: "ParagraphComponent" });
</script>
