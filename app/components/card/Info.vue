<template>
  <div class="flex items-center gap-5 w-full">
    <div
      class="flex items-center justify-center p-3 rounded-lg border border-zinc-800 bg-zinc-900 text-white"
    >
      <Icon :name="props.icon" class="w-6 h-6" />
    </div>
    <div class="flex flex-col items-start">
      <h6 class="font-chakra-petch font-medium text-white">
        {{ props.label }}
      </h6>
      <p class="font-chakra-petch font-light text-zinc-400">
        {{ props.sublabel }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  label: { type: String, default: null },
  sublabel: { type: String, default: null },
  icon: { type: String, default: null },
});

defineComponent({ name: "CardInfoComponent" });
</script>
