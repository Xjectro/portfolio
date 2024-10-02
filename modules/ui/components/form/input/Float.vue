<template>
  <fieldset
    :class="
      $cn(
        'relative flex flex-col items-start justify-center overflow-hidden w-full gap-1 rounded-xl border border-solid font-chakra-petch font-medium border-zinc-300 dark:border-zinc-900 text-zinc-900 dark:text-white',
        disabled
          ? 'opacity-60 pointer-events-none'
          : 'opacity-100 cursor-pointer',
      )
    "
  >
    <label
      for="input"
      :class="
        $cn(
          'transition-all duration-300 absolute pointer-events-none text-base',
          focused || value.length !== 0
            ? 'translate-x-3 -translate-y-3 opacity-80 text-xs'
            : 'translate-x-5 translate-y-0 opacity-100',
        )
      "
    >
      {{ label }}
    </label>
    <input
      id="input"
      :value="value"
      :type="type"
      :class="
        $cn(
          'transition-all flex items-center justify-start w-full cursor-pointer focus:cursor-text resize-none outline-none px-3 pt-5 bg-transparent hover:bg-zinc-100 focus:bg-zinc-100 dark:hover:bg-zinc-950 dark:focus:bg-zinc-950',
          focused || value.length !== 0 ? 'text-opacity-100' : 'text-opacity-0',
          props.class,
        )
      "
      @focus="focused = true"
      @blur="focused = false"
      @input="handleInput"
    />
  </fieldset>
</template>

<script setup lang="ts">
const props = defineProps({
  label: { type: String, default: null },
  value: { type: String, required: true },
  type: {
    type: String as PropType<"text" | "password" | "email">,
    default: "text",
  },
  class: {
    type: String,
    default: "h-[56px]",
  },
  disabled: Boolean,
});
const emit = defineEmits(["update:value"]);

defineComponent({
  name: "InputFloat",
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
