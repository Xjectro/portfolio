<template>
  <div ref="dropdown" :class="classes">
    <slot />
  </div>
</template>

<script lang="ts" setup>
const { $cn } = useNuxtApp();

const props = defineProps({
  class: { type: String, default: null },
  visible: Boolean,
});

const dropdown = shallowRef<HTMLElement | null>(null);
const isBelow = ref(false);

const setDropdownPosition = useDebounceFn(() => {
  if (!dropdown.value) return;

  const { width, height } = useWindowSize();
  const { x, y } = useElementBounding(dropdown);

  dropdown.value.style.left = x.value >= width.value / 2 ? "auto" : "0";
  dropdown.value.style.right = x.value >= width.value / 2 ? "0" : "auto";
  dropdown.value.style.top = y.value <= height.value / 2 ? "100%" : "auto";
  dropdown.value.style.bottom = y.value >= height.value / 2 ? "100%" : "auto";

  isBelow.value = dropdown.value.style.bottom == "auto";
}, 100);

tryOnMounted(setDropdownPosition);

const visibleClasses = computed(
  () =>
    new Map([
      [
        true,
        $cn(
          "opacity-100 pointer-events-auto",
          isBelow.value ? "translate-y-2" : "-translate-y-4",
        ),
      ],
      [false, "translate-y-0 opacity-0 pointer-events-none"],
    ]),
);

const classes = computed(() =>
  $cn(
    "transition-all absolute flex flex-col items-start overflow-x-hidden overflow-y-auto z-50 rounded-lg border border-solid border-zinc-100 dark:border-zinc-950 bg-white dark:bg-black",
    visibleClasses.value.get(props.visible),
    props.class,
  ),
);
</script>
