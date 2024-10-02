<template>
  <h6 class="flex underline font-chakra-petch font-bold text-lg text-white">
    {{ props.label }}
  </h6>
</template>

<script lang="ts" setup>
const props = defineProps({
  label: { type: String, default: null },
});
defineComponent({ name: "SectionLabelComponent" });
</script>
