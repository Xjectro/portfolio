<template>
  <Transition name="fade">
    <section
      v-if="visible"
      :class="
        $cn(
          'flex items-center w-full overflow-hidden px-2 py-1 rounded-xl border border-solid text-start font-medium font-inter animate-shake animate-once animate-duration-300 animate-ease-out animate-normal animate-fill-forwards',
          messageClasses.get(props.type!),
        )
      "
    >
      {{ label }}
    </section>
  </Transition>
</template>

<script lang="ts" setup>
const props = defineProps({
  type: { type: String as PropType<"error" | "success">, default: "error" },
  visible: Boolean,
  label: { type: String, default: null },
});

defineComponent({
  name: "MessageComponent",
});

const messageClasses = new Map([
  [
    "error",
    "bg-opacity-15 border-opacity-20 border-red-500 bg-red-500 text-red-500",
  ],
  [
    "success",
    "bg-opacity-15 border-opacity-20 border-green-500 bg-green-500 text-green-500",
  ],
]);
</script>

<style scoped>
.fade-enter-active {
  animation: fadeIn 0.3s ease;
}

.fade-leave-active {
  animation: fadeOut 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
