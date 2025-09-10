<template>
  <div class="footer-wrapper relative">
    <div class="absolute w-full bottom-0 left-0 z-10">
      <div class="common-container">
        <div class="flex justify-center py-3 gap-4 flex-wrap-reverse gap-y-2">
          <p class="text-sm text-theme-accent shrink-0">© {{ year }} Sebastian Krauzowicz</p>
          <nuxt-link to="/privacy-policy">
            <p class="text-sm text-theme-accent underline shrink-0">Polityka Prywatności</p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const year = new Date().getFullYear();
</script>