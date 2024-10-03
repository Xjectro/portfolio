<template>
  <NuxtLayout name="app">
    <div class="flex flex-col items-start gap-5 w-full">
      <SectionLabel label="who am i" />
      <Paragraph>
        test
        <ParagraphLink label="Punky" href="https://punky.ai/" />, backed by
        test
      </Paragraph>
    </div>
    <div class="flex flex-col items-start gap-5 w-full h-full">
      <SectionLabel label="Cv" />
      <Button severity="alien" class="px-5 py-3" @interaction="downloadCV">
        Download CV
      </Button>
      <iframe src="/files/cv.pdf" class="w-full h-full rounded-lg"></iframe>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const downloadCV = () => {
  const link = document.createElement("a");
  link.href = "/files/cv.pdf";
  link.download = "CV_John_Doe.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>
