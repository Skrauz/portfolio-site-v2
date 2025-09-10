<script setup lang="ts">
const publicConfig = useRuntimeConfig().public;
</script>
<template>
  <div class="mt-20 md:mt-24">
    <div class="h-[100dvh] common-container">
      <div class="flex flex-col justify-between py-8 h-full">
        <div class="relative shrink-0 md:block hidden">
          <nuxt-img class="h-6" src="/img/contact_stick.svg"></nuxt-img>
        </div>
        <div class="relative shrink-0 hidden sm:block md:hidden">
          <nuxt-img class="h-6" src="/img/small_contact_stick.svg"></nuxt-img>
        </div>
        <div class="flex flex-col items-center justify-evenly h-full">
          <div class="header-panel flex flex-col items-center">
            <h1 class="text-4xl md:text-5xl font-bold leading-[0.9] tracking-[-2px] text-center"> Kontakt </h1>
            <div class="text-xl mt-3 text-center font-medium">
              <p class="">Masz pomysł na <span class="text-theme-accent">interesujący projekt?</span></p>
              <p class=""><span class="text-theme-accent">Skontaktuj się</span> ze mną!</p>
            </div>
          </div>
          <div class="email-panel flex flex-col items-center">
            <nuxt-link class="text-2xl font-bold relative email-link-underline" :to="`mailto:${publicConfig.contactEmail}`">
              <span class="relative z-10">{{ publicConfig.contactEmail }}</span>
              <span class="email-underline"></span>
              <span class="email-mobile-underline md:hidden"></span>
            </nuxt-link>
            <p class="mt-1 text-lg italic text-theme-light uppercase text-center">E-mail</p>
          </div>
          <div class="socials-panel flex flex-col items-center">
            <div class="social-links flex items-center gap-3">
              <nuxt-link class="cursor-pointer md:opacity-80 transition-all hover:opacity-100"
                to="https://www.linkedin.com/in/skrauz/" target="_blank">
                <nuxt-img class="w-8" src="/img/socials/linkedin.svg"></nuxt-img>
              </nuxt-link>
              <nuxt-link class="cursor-pointer md:opacity-80 transition-all hover:opacity-100"
                to="https://github.com/Skrauz" target="_blank">
                <nuxt-img class="w-8" src="/img/socials/github.svg"></nuxt-img>
              </nuxt-link>
              <nuxt-link class="cursor-pointer md:opacity-80 transition-all hover:opacity-100"
                to="https://www.instagram.com/skrauz_dev/" target="_blank">
                <nuxt-img class="w-8" src="/img/socials/instagram.svg"></nuxt-img>
              </nuxt-link>
            </div>
            <p class="mt-1 text-lg italic text-theme-light uppercase text-center">Social Media</p>
          </div>
        </div>
        <div class="relative shrink-0 md:block hidden">
          <nuxt-img class="h-6" src="/img/contact_stick.svg"></nuxt-img>
        </div>
        <div class="relative shrink-0 hidden sm:block md:hidden">
          <nuxt-img class="h-6" src="/img/small_contact_stick.svg"></nuxt-img>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.email-link-underline {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.email-underline {
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

.email-mobile-underline {
  position: absolute;
  left: 0;
  bottom: 2px;
  width: 100%;
  height: 3px;
  background: var(--color-theme-accent);
  z-index: 1;
}

.email-link-underline:hover .email-underline,
.email-link-underline:focus .email-underline {
  transform: scaleX(1);
}
</style>