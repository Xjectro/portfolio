<template>
  <div>
    <button v-bind="button" type="button" @click="onCopy">
      <Icon :name="copied ? 'mingcute:copy-2-line' : 'mingcute:copy-3-line'" />
    </button>
  </div>
</template>

<script lang="ts" setup>
const { $cn } = useNuxtApp();

const copied = ref(false);

const props = defineProps({
  class: { type: String, default: "" },
  disabled: Boolean,
  copyText: { type: String, default: "" },
});

defineComponent({
  name: "NdsCopyButtonComponent",
});

const button = reactive({
  class: $cn(
    "transition-all flex flex-grow-0 items-center font-chakra-petch font-medium p-3 rounded-full bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 focus:bg-transparent",
    props.disabled
      ? "cursor-not-allowed opacity-80"
      : "pointer-events-auto cursor-pointer opacity-100",
    props.class,
  ),
  disabled: props.disabled,
});

function onCopy() {
  navigator.clipboard.writeText(props.copyText);
  copied.value = true;
  setTimeout(() => (copied.value = false), 3000);
}
</script>
