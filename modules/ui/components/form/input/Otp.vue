<template>
  <fieldset class="flex flex-wrap items-center justify-between w-full gap-5">
    <input
      v-for="(_, index) in Array.from({ length: props.repeat })"
      :ref="
        (el) => {
          codeInputs[index] = el as HTMLInputElement;
        }
      "
      :key="index"
      type="text"
      maxlength="1"
      minlength="0"
      placeholder="_"
      :value="props.value?.[index] || ''"
      class="ransition-all flex items-center justify-center text-center w-[56px] h-[56px] cursor-pointer focus:cursor-text resize-none outline-none px-3 rounded-xl border border-solid font-inter border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white bg-transparent hover:bg-zinc-100 focus:bg-zinc-100 dark:hover:bg-zinc-950 dark:focus:bg-zinc-950"
      @input="(event) => handleInput(event, index)"
      @keydown="(event) => handleKeydown(event, index)"
    />
  </fieldset>
</template>

<script lang="ts" setup>
const props = defineProps({
  value: { type: String, default: "" },
  repeat: { type: Number, default: 5 },
});
const emit = defineEmits(["update:value"]);

defineComponent({
  name: "InputOtpComponent",
});

const codeInputs = ref<HTMLInputElement[]>([]);

const update = () =>
  emit("update:value", codeInputs.value.map((input) => input.value).join(""));

const handleInput = (event: Event, index: number) => {
  const target = event.target as HTMLInputElement;
  if (target.value.length > 0 && index < props.repeat - 1) {
    codeInputs.value[index + 1]?.focus();
  }
  update();
};

const handleKeydown = (event: KeyboardEvent, index: number) => {
  if (
    event.key === "Backspace" &&
    index > 0 &&
    (event.target as HTMLInputElement).value.length === 0
  ) {
    codeInputs.value[index - 1]?.focus();
  }
};
</script>
