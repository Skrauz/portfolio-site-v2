<script setup lang="ts">
function scrollToNextSection() {
  const nextSection = document.getElementById('doswiadczenie')
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' })
  }
}
const publicConfig = useRuntimeConfig().public;
</script>
<template>
  <div class="h-[calc(100dvh-96px)] md:h-[calc(100dvh-138px)] relative flex flex-col justify-center pb-12 md:pb-24">
    <div class="arrow-flex w-full absolute bottom-0 left-0 flex justify-center">
      <button @click="scrollToNextSection" class="p-4 mb-2 md:mb-7 cursor-pointer transition-transform hover:scale-120">
        <nuxt-img class="w-5" src="/img/hero-arrow.svg"></nuxt-img>
      </button>
    </div>
    <div class="relative">
      <div class="common-container">
        <div class="hero flex flex-col items-center">
          <h1 class="text-6xl font-bold text-center leading-[0.9] tracking-[-2px]">
            <span class="text-theme-accent">&nbsp;S</span>ebastian<span class="text-theme-accent"> Krauz</span>owicz
          </h1>
          <p class="uppercase mt-6 md:mt-3 text-2xl italic text-center text-theme-light">Front-End & Web Developer</p>
          <nuxt-link to="#kontakt"
            class="mt-6 md:mt-4 transition-colors hover:bg-theme-accent-hover rounded-full py-1.5 px-4 flex items-center gap-2.5 bg-theme-accent text-theme-dark max-w-max">
            <p class="font-bold text-2xl leading-[1.2] tracking-tight"> Kontakt </p>
            <nuxt-img class="w-6" src="/img/contact-arrow.svg"></nuxt-img>
          </nuxt-link>
        </div>
      </div>
      <div class="social-links absolute left-8 -mt-3 hidden md:block top-0">
        <div class="flex flex-col items-center gap-3">
          <nuxt-link class="cursor-pointer opacity-70 transition-all hover:opacity-100"
            to="https://www.linkedin.com/in/skrauz/" target="_blank">
            <nuxt-img class="w-8" src="/img/socials/linkedin.svg"></nuxt-img>
          </nuxt-link>
          <nuxt-link class="cursor-pointer opacity-70 transition-all hover:opacity-100" to="https://github.com/Skrauz"
            target="_blank">
            <nuxt-img class="w-8" src="/img/socials/github.svg"></nuxt-img>
          </nuxt-link>
          <nuxt-link class="cursor-pointer opacity-70 transition-all hover:opacity-100"
            to="https://www.instagram.com/skrauz_dev/" target="_blank">
            <nuxt-img class="w-8" src="/img/socials/instagram.svg"></nuxt-img>
          </nuxt-link>
          <nuxt-link class="cursor-pointer opacity-70 transition-all hover:opacity-100"
            :to="`mailto:${publicConfig.contactEmail}`" target="_blank">
            <nuxt-img class="w-8" src="/img/socials/mail.svg"></nuxt-img>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
