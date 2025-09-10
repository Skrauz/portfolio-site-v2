<script setup lang="ts">
const isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
const publicConfig = useRuntimeConfig().public;
</script>
<template>
  <nav class="common-container w-full flex md:items-end items-center justify-between md:py-12 py-6">
    <!-- Logo -->
    <NuxtLink class="md:mb-1" to="/">
      <NuxtImg class="w-[180px] lg:w-[200px]" src="/img/logo.png" />
    </NuxtLink>
    <!-- Desktop Nav -->
    <div class="items-center gap-8 hidden md:flex">
      <NuxtLink to="#doswiadczenie"
        class="text-xl font-bold tracking-tighter relative group nav-link-underline transition-colors ">
        <span class="text-theme-accent">/</span>Doświadczenie <span class="nav-underline"></span>
      </NuxtLink>
      <NuxtLink to="#projekty"
        class="text-xl font-bold tracking-tighter relative group nav-link-underline transition-colors ">
        <span class="text-theme-accent">/</span>Projekty <span class="nav-underline"></span>
      </NuxtLink>
      <NuxtLink to="#kontakt"
        class="text-xl font-bold tracking-tighter relative group nav-link-underline transition-colors ">
        <span class="text-theme-accent">/</span>Kontakt <span class="nav-underline"></span>
      </NuxtLink>
    </div>
    <!-- Mobile Hamburger Button -->
    <button @click="toggleMobileMenu" class="md:hidden p-2 cursor-pointer transition-colors hover:text-theme-light"
      aria-label="Toggle Menu">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-6 text-text-dark-1" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </nav>
  <!-- Mobile Menu Overlay -->
  <Transition enter-from-class="opacity-0" enter-active-class="transition-all duration-150 ease-in"
    enter-to-class="opacity-100" leave-from-class="opacity-100"
    leave-active-class="transition-all duration-150 ease-out" leave-to-class="opacity-0">
    <div v-if="isMobileMenuOpen" @click="toggleMobileMenu"
      class="mobile-menu-backdrop fixed top-0 left-0 w-full h-screen bg-black/50 z-[45]"></div>
  </Transition>
  <Transition name="fade" enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 -translate-x-36"
    enter-to-class="opacity-100 translate-x-0" leave-active-class="transition-all duration-150 ease-in"
    leave-from-class="opacity-100 translate-x-0" leave-to-class="opacity-0 -translate-x-36">
    <nav v-if="isMobileMenuOpen" class="mobile-menu fixed top-0 left-0 w-[75%] h-screen bg-theme-dark-2 z-50">
      <div class="ml-2">
        <div class="common-container flex items-center justify-between md:py-12 py-6">
          <h3 class="text-3xl font-bold tracking-tighter relative group"> Menu </h3>
          <button @click="toggleMobileMenu" class="p-2 cursor-pointer transition-colors hover:text-theme-light"
            aria-label="Close Menu">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="common-container">
          <div class="flex flex-col gap-4">
            <NuxtLink @click="toggleMobileMenu" to="#doswiadczenie"
              class="text-xl font-bold tracking-tighter relative group transition-colors hover:text-theme-light">
              <span class="text-theme-accent">/</span>Doświadczenie
            </NuxtLink>
            <NuxtLink @click="toggleMobileMenu" to="#projekty"
              class="text-xl font-bold tracking-tighter relative group transition-colors hover:text-theme-light">
              <span class="text-theme-accent">/</span>Projekty
            </NuxtLink>
            <NuxtLink @click="toggleMobileMenu" to="#kontakt"
              class="text-xl font-bold tracking-tighter relative group transition-colors hover:text-theme-light">
              <span class="text-theme-accent">/</span>Kontakt
            </NuxtLink>
          </div>
        </div>
        <div class="py-6 common-container absolute bottom-0 left-0">
          <div class="flex items-center gap-4">
            <nuxt-link class="cursor-pointer" to="https://www.linkedin.com/in/skrauz/" target="_blank">
              <nuxt-img class="w-6" src="/img/socials/linkedin.svg"></nuxt-img>
            </nuxt-link>
            <nuxt-link class="cursor-pointer" to="https://github.com/Skrauz" target="_blank">
              <nuxt-img class="w-6" src="/img/socials/github.svg"></nuxt-img>
            </nuxt-link>
            <nuxt-link class="cursor-pointer" to="https://www.instagram.com/skrauz_dev/" target="_blank">
              <nuxt-img class="w-6" src="/img/socials/instagram.svg"></nuxt-img>
            </nuxt-link>
            <nuxt-link class="cursor-pointer pt-1.5" :to="`mailto:${publicConfig.contactEmail}`" target="_blank">
              <nuxt-img class="w-6" src="/img/socials/mail.svg"></nuxt-img>
            </nuxt-link>
          </div>
        </div>
      </div>
    </nav>
  </Transition>
</template>
<style scoped>
.nav-link-underline {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.nav-underline {
  position: absolute;
  left: 0;
  bottom: 2px;
  width: 100%;
  height: 3px;
  background: var(--color-theme-accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  z-index: 1;
}

.nav-link-underline:hover .nav-underline,
.nav-link-underline:focus .nav-underline {
  transform: scaleX(1);
}
</style>
