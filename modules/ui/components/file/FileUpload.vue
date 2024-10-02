<template>
  <section
    class="flex flex-col md:flex-row items-start md:items-center w-full gap-5"
  >
    <div
      :style="{ height, maxWidth: width }"
      :class="`w-full relative overflow-hidden ring-4 ring-zinc-100 dark:ring-zinc-950 ${roundedClasses}`"
    >
      <input
        :id="'upload-avatar-' + id"
        ref="input"
        type="file"
        accept="image/*"
        class="hidden"
        @change="fileChange"
      />
      <NuxtImg
        v-if="previewURL"
        :src="previewURL"
        alt="User Avatar"
        class="absolute inset-0 z-10 object-cover w-full h-full"
      />
      <label
        v-if="previewURL"
        class="absolute inset-0 z-20 flex items-center justify-center rounded-xl cursor-pointer transition-opacity duration-300 opacity-0 hover:opacity-100 bg-red-500 bg-opacity-10 text-white"
        @click="$emit('update:imageURL', null)"
      >
        <Icon
          name="material-symbols:auto-delete-outline-rounded"
          class="min-w-8 min-h-8 transition-all drop-shadow-dark-lg"
        />
      </label>
      <label
        v-else
        :for="'upload-avatar-' + id"
        class="absolute inset-0 z-20 flex items-center justify-center rounded-xl cursor-pointer transition-opacity duration-300 opacity-0 hover:opacity-100 bg-white dark:bg-black bg-opacity-30 dark:bg-opacity-20 text-zinc-900 dark:text-white"
      >
        <Icon
          name="line-md:downloading-loop"
          class="min-w-8 min-h-8 transition-all drop-shadow-dark-lg"
        />
      </label>
    </div>
    <div
      v-if="$slots.title || $slots.description"
      class="flex max-sm:flex-col items-start sm:items-center gap-5 w-full"
    >
      <div class="flex flex-col items-start gap-2">
        <h4
          v-if="$slots.title"
          class="font-medium font-chakra-petch text-zinc-900 dark:text-zinc-100"
        >
          <slot name="title" />
        </h4>
        <p
          v-if="$slots.description"
          class="text-sm font-light font-chakra-petch text-zinc-900 dark:text-zinc-400"
        >
          <slot name="description" />
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

const id = Math.random().toString();
const emit = defineEmits(["update:imageURL"]);
const props = defineProps({
  imageURL: {
    type: [File, String, null] as PropType<File | string | null>,
    required: true,
  },
  width: { type: String, default: "100px" },
  height: { type: String, default: "100px" },
  rounded: Boolean,
});

const { imageURL } = useVModels(props, emit);
const input = ref<HTMLInputElement | null>(null);

const previewURL = computed(() => {
  if (typeof imageURL.value === "string") {
    return imageURL.value;
  }
  return imageURL.value instanceof File
    ? URL.createObjectURL(imageURL.value)
    : null;
});

const fileChange = () => {
  const file = input.value?.files?.[0];
  if (file) {
    emit("update:imageURL", file);
  }
};

const roundedClasses = computed(() =>
  props.rounded ? "rounded-full" : "rounded-lg",
);
</script>
