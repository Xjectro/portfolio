<template>
  <div class="flex flex-col md:flex-row min-h-screen w-full p-5 md:p-10 gap-5">
    <div
      class="flex flex-col items-center h-fit w-full md:max-w-[300px] p-5 gap-10 rounded-lg border border-solid border-zinc-900 bg-zinc-980">
      <div class="flex flex-col items-center w-full px-5 gap-5">
        <div class="w-full overflow-hidden rounded-lg bg-zinc-900">
          <NuxtImg src="https://avatars.githubusercontent.com/u/129968185"
            class="transition-all w-full h-[300px] sm:h-[144px] md:h-full object-cover" />
        </div>
        <div class="flex flex-col items-center gap-2">
          <h6 class="flex text-xl font-chakra-petch font-bold text-white">
            John Doe
          </h6>
          <p
            class="cursor-pointer px-4 py-2 rounded-full text-sm font-chakra-petch font-medium bg-zinc-900 text-white hover:bg-gradient-to-tr hover:from-alien-700 hover:to-alien-500">
            Full Stack Developer
          </p>
        </div>
      </div>
      <Divider />
      <div class="flex flex-col items-start w-full gap-5">
        <CardInfo label="Email" sublabel="xjectro@gmail.com" icon="material-symbols:alternate-email" />
        <CardInfo label="Telephone" sublabel="+90 544-245-45-58" icon="mynaui:telephone-call" />
        <CardInfo label="Birthday" sublabel="03.05.2008" icon="material-symbols:calendar-month-outline-rounded" />
        <CardInfo label="Location" sublabel="Turkey, Kocaeli / Izmit"
          icon="material-symbols:location-on-outline-rounded" />
      </div>
      <div class="flex items-center justify-around w-full">
        <CardSocial name="instagram" href="https://www.instagram.com/eray.gunuuygun/" />
        <CardSocial name="linkedin" href="https://www.linkedin.com/in/eray-g%C3%BCn%C3%BCuygun-96215a288/" />
        <CardSocial name="github" href="https://github.com/Xjectro" />
        <CardSocial name="discord" href="https://discord.com/users/1107600662721736724" />
      </div>
    </div>
    <div
      class="flex flex-col items-start min-h-full w-full p-5 gap-5 rounded-lg border border-solid border-zinc-900 bg-zinc-980">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();

useHead({
  title: `${config.app.title}`,
  meta: [{ property: "og:title", content: `${config.app.title}` }],
});
</script>
