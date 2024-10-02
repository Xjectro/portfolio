<template>
  <div ref="dropdown" class="relative w-full">
    <div class="cursor-pointer w-full" @click="visibleProp = !visibleProp">
      <slot name="button" />
    </div>
    <DropdownItems :class="props.class" :visible="visible">
      <slot name="context" />
    </DropdownItems>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(["update:visible"]);
const props = defineProps({
  class: { type: String, default: null },
  visible: Boolean,
});

defineComponent({ name: "DropdownComponent" });

const vModel = useVModels(props, emit);

const dropdown = shallowRef<HTMLElement | null>(null);

const visibleProp = computed({
  get: () => vModel.visible.value,
  set: (value) => emit("update:visible", value),
});

onClickOutside(dropdown, () => (visibleProp.value = false));
</script>
