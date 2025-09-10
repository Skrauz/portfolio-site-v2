<template>
  <transition name="fade">
    <button v-if="buttonVisible" @click="scrollToTop"
      class="cursor-pointer fixed bottom-10 right-6 md:bottom-6 md:right-8 z-10 size-12 flex justify-center p-2 rounded-full bg-theme-accent text-theme-dark shadow-lg transition-colors hover:bg-theme-accent-hover"
      aria-label="Back to top">
      <nuxt-img class="w-4" src="/img/arrow-up.svg"></nuxt-img>
    </button>
  </transition>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const buttonVisible = ref(false)

const SCROLL_DISTANCE = 600

function onScroll() {
  buttonVisible.value = window.scrollY > SCROLL_DISTANCE
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>