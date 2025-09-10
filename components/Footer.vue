<template>
  <div class="footer-wrapper relative">
    <div class="absolute w-full bottom-0 left-0 z-50">
      <div class="common-container">
        <div class="flex justify-center py-3">
          <p class="text-sm text-theme-accent">© {{ year }} Sebastian Krauzowicz</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const year = new Date().getFullYear();
</script>