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
const isFocused = ref(false);

const focused = computed({
  get: () => isFocused.value,
  set: (value) => (isFocused.value = value),
});

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  value.value = target.value;
  emit("update:value", target.value);
};
</script>

<template>
  <fieldset
    class="relative flex flex-col items-start justify-start w-full gap-1"
  >
    <label
      for="input"
      :class="
        $cn(
          'transition-all duration-300 absolute pointer-events-none text-base font-medium font-chakra-petch text-zinc-900 dark:text-white',
          focused || value.length !== 0
            ? 'translate-x-3 translate-y-2.5 opacity-80 text-xs'
            : 'translate-x-5 translate-y-3 opacity-100',
        )
      "
    >
      {{ label }}
    </label>
    <textarea
      id="input"
      :style="{ minHeight, maxHeight }"
      :value="value"
      :type="type"
      :class="
        $cn(
          'transition-all flex items-center justify-start w-full cursor-pointer focus:cursor-text outline-none px-3 pt-8 rounded-xl border border-solid font-inter border-zinc-300 dark:border-zinc-900 text-zinc-900 dark:text-white bg-transparent hover:bg-zinc-100 focus:bg-zinc-100 dark:bg-transparent dark:hover:bg-zinc-950 dark:focus:bg-zinc-950',
          focused || value.length !== 0 ? 'text-opacity-100' : 'text-opacity-0',
        )
      "
      @focus="focused = true"
      @blur="focused = false"
      @input="handleInput"
    />
  </fieldset>
</template>
