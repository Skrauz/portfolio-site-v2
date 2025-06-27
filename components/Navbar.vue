<script setup lang="ts">

const isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

</script>
<template>
  <div class="common-container flex items-end justify-between md:py-12 py-6">
    <!-- Logo -->
    <NuxtLink to="/">
      <NuxtImg class="w-[250px]" src="/img/logo.png" />
    </NuxtLink>
    <!-- Desktop Nav -->
    <div class="flex items-center gap-8">
      <NuxtLink to="/doswiadczenie" class="text-2xl font-bold tracking-tighter relative group nav-link-underline transition-colors hover:text-theme-light">
        <span class="text-theme-accent">/</span>Doświadczenie <span class="nav-underline"></span>
      </NuxtLink>
      <NuxtLink to="/projekty" class="text-2xl font-bold tracking-tighter relative group nav-link-underline transition-colors hover:text-theme-light">
        <span class="text-theme-accent">/</span>Projekty <span class="nav-underline"></span>
      </NuxtLink>
      <NuxtLink to="/kontakt" class="text-2xl font-bold tracking-tighter relative group nav-link-underline transition-colors hover:text-theme-light">
        <span class="text-theme-accent">/</span>Kontakt <span class="nav-underline"></span>
      </NuxtLink>
    </div>
    <!-- Mobile Hamburger Button -->
    <!-- <UButton color="neutral" variant="soft" @click="toggleMobileMenu" class="md:hidden focus:outline-none"
      aria-label="Toggle Menu">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-text-dark-1" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </UButton> -->
  </div>
  <!-- Mobile Menu Overlay -->
  <Transition name="fade" enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 -translate-x-36"
    enter-to-class="opacity-100 translate-x-0" leave-active-class="transition-all duration-150 ease-in"
    leave-from-class="opacity-100 translate-x-0" leave-to-class="opacity-0 -translate-x-36">
    <div v-if="isMobileMenuOpen" class="mobile-menu absolute top-0 left-0 w-full h-screen bg-primary z-50">
      <div class="common-container flex items-center justify-between md:py-12 py-6">
        <NuxtLink to="/">
          <!-- <img class="w-[250px]" src="/img/logo.wepb" /> -->
        </NuxtLink>
        <UButton color="secondary" variant="soft" @click="toggleMobileMenu" class="" aria-label="Close Menu"> <svg
            xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-light" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg> </UButton>
      </div>
      <div class="mobile-menu-navigation-container common-container">
        <!-- <UNavigationMenu color="primary"
          :ui="{link: 'hover:before:bg-[#ab906b] before:bg-primary data-[active]:bg-[#ab906b] rounded-md text-xl text-primary-light hover:text-primary-light' }"
          orientation="vertical" :items="items" /> -->
      </div>
    </div>
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
  transition: transform 0.3s cubic-bezier(.4, 0, .2, 1);
  pointer-events: none;
  z-index: 1;
}

.nav-link-underline:hover .nav-underline,
.nav-link-underline:focus .nav-underline {
  transform: scaleX(1);
}
</style>