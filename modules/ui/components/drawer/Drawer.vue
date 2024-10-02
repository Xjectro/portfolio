<template>
  <div
    :class="
      $cn(
        'transition-all fixed top-0 left-0 w-screen h-screen bg-opacity-30 bg-black z-[999]',
        visible
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none',
      )
    "
  >
    <aside
      ref="drawer"
      :class="
        $cn(
          'transition-all flex flex-col items-start h-screen p-5 bg-white dark:bg-black',
          visible ? 'translate-x-0' : positionClasses.get(props.position),
          props.class,
        )
      "
    >
      <slot />
    </aside>
  </div>
</template>

<script lang="ts" setup>
const drawer = ref<HTMLElement | null>(null);

const emit = defineEmits(["update:visible"]);
const props = defineProps({
  visible: Boolean,
  class: { type: String, default: null },
  position: { type: String as PropType<"LEFT" | "RIGHT">, default: "LEFT" },
});

defineComponent({
  name: "DrawerComponent",
});

const { visible } = useVModels(props, emit);

onClickOutside(drawer, () => emit("update:visible", false));

watch(
  visible,
  (v) =>
    v
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden"),
  { immediate: true },
);

const positionClasses = new Map([
  ["RIGHT", "translate-x-full"],
  ["LEFT", "-translate-x-full"],
]);
</script>
