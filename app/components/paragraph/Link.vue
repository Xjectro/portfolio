<template>
  <a
    class="transition-all cursor-pointer text-blue-500 hover:underline hover:text-blue-600 text-base hover:text-lg"
    :href="props.href"
    target="_blank"
    rel="noopener noreferrer"
    >{{ props.label }}</a
  >
</template>

<script lang="ts" setup>
const props = defineProps({
  label: { type: String, default: null },
  href: { type: String, default: null },
});
defineComponent({ name: "ParagraphLinkComponent" });
</script>
