<script setup lang="ts">
import privacyPolicy from '~/content/privacy-policy.md?raw'
</script>
<template>
  <div class="common-container">
    <div class="pt-8 mt-16 md:pt-20 md:mt-4 min-h-[400px] w-full justify-between mx-auto pb-32">
      <div class="privacy-policy">
        <h2 class="text-4xl md:text-5xl font-bold leading-[0.9] tracking-[-2px]"> Polityka Prywatności </h2>
        <div class="mt-12 prose prose-invert">
          <MDC :value="privacyPolicy" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>