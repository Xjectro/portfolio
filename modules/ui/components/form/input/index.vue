<template>
  <fieldset
    :class="
      $cn(
        'flex flex-col items-start gap-2 w-full',
        disabled
          ? 'opacity-60 pointer-events-none'
          : 'opacity-100 cursor-pointer',
      )
    "
  >
    <h6
      class="transition-all font-chakra-petch font-medium text-sm text-black dark:text-white"
    >
      {{ label }}
    </h6>
    <input
      :placeholder="label"
      :value="value"
      :type="type"
      :class="
        $cn(
          'transition-all flex items-center justify-start w-full cursor-pointer focus:cursor-text resize-none outline-none px-3 rounded-xl border border-solid font-inter border-zinc-300 dark:border-zinc-900 text-zinc-900 dark:text-white bg-transparent hover:bg-zinc-100 focus:bg-zinc-100 dark:bg-transparent dark:hover:bg-zinc-950 dark:focus:bg-zinc-950',
          props.class,
        )
      "
      @input="handleInput"
    />
  </fieldset>
</template>

<script lang="ts" setup>
const props = defineProps({
  label: { type: String, default: " " },
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

defineComponent({ name: "InputComponent" });

const { value } = useVModels(props, emit);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  value.value = target.value;
  emit("update:value", target.value);
};
</script>
