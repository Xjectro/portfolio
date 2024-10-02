<script setup lang="ts">
const props = defineProps({
  label: { type: String, default: null },
  value: { type: String, required: true },
  type: {
    type: String as PropType<"text" | "password" | "email">,
    default: "text",
  },
  minHeight: { type: String, default: "100px" },
  maxHeight: { type: String, default: "200px" },
});
const emit = defineEmits(["update:value"]);

defineComponent({
  name: "TextAreaFloat",
});

const { value } = useVModels(props, emit);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  value.value = target.value;
  emit("update:value", target.value);
};
</script>

<template>
  <fieldset class="relative flex flex-col items-start gap-2 w-full">
    <h6
      class="transition-all font-chakra-petch font-medium text-sm text-black dark:text-white"
    >
      {{ label }}
    </h6>
    <textarea
      id="input"
      :style="{ minHeight, maxHeight }"
      :value="value"
      :type="type"
      class="transition-all flex items-center justify-start w-full cursor-pointer focus:cursor-text outline-none p-3 rounded-xl border border-solid font-inter border-zinc-300 dark:border-zinc-900 text-zinc-900 dark:text-white bg-transparent hover:bg-zinc-100 focus:bg-zinc-100 dark:bg-transparent dark:hover:bg-zinc-950 dark:focus:bg-zinc-950"
      @input="handleInput"
    />
    <div
      class="absolute bottom-0 right-0 m-4 pointer-events-none font-chakra-petch font-light text-black dark:text-white"
    >
      {{ value.length }}
    </div>
  </fieldset>
</template>
