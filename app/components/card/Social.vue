<template>
  <a
    :href="props.href"
    :class="classes"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon :name="icons.get(props.name)!" class="w-5 h-5" />
  </a>
</template>

<script lang="ts" setup>
const { $cn } = useNuxtApp();
const props = defineProps({
  name: { type: String, default: "instagram" },
  href: { type: String, default: null },
});

const classes = computed(() =>
  $cn("flex cursor-pointer p-2 rounded-lg bg-zinc-900 text-white", {
    "hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-500":
      props.name == "instagram",
    "hover:bg-gradient-to-br hover:from-blue-700 hover:to-blue-500":
      props.name == "linkedin",
    "hover:bg-white hover:text-black": props.name == "github",
    "hover:bg-gradient-to-br hover:from-blue-900 hover:to-blue-700":
      props.name == "discord",
  }),
);

const icons = new Map([
  ["instagram", "mdi:instagram"],
  ["linkedin", "ri:linkedin-fill"],
  ["github", "ph:github-logo-bold"],
  ["discord", "streamline:discord"],
]);

defineComponent({ name: "CardSocialComponent" });
</script>
