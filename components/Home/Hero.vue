<script setup lang="ts">
function scrollToNextSection() {
  const nextSection = document.getElementById("doswiadczenie");
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
}
const publicConfig = useRuntimeConfig().public;

import { gsap } from "gsap";

// onMounted(() => {
//   const elements = document.querySelectorAll('.fade-in')

//   elements.forEach(el => {
//     gsap.from(el, {
//       opacity: 0,
//       y: 50,
//       duration: 1,
//       scrollTrigger: {
//         trigger: el,
//         start: 'top 80%',
//         toggleActions: 'play none none reverse'
//       }
//     })
//   })
// })
</script>
<template>
  <div
    class="h-[calc(100dvh-96px)] md:h-[calc(100dvh-120px)] relative flex flex-col justify-center pb-8 md:pb-24"
  >
    <div class="relative">
      <div class="common-container">
        <div class="hero flex flex-col items-center">
          <h1
            class="text-6xl font-bold text-center leading-[0.9] tracking-[-2px] fade-in"
          >
            <span class="text-theme-accent">&nbsp;S</span>ebastian<span
              class="text-theme-accent"
            >
              Krauz</span
            >owicz
          </h1>
          <p
            class="fade-in uppercase mt-6 md:mt-3 text-2xl italic text-center text-theme-light"
          >
            Front-End & Web Developer
          </p>
          <nuxt-link
            to="#kontakt"
            class="fade-in mt-6 md:mt-4 transition-colors hover:bg-theme-accent-hover rounded-full py-1.5 px-6 flex items-center gap-2.5 bg-theme-accent text-theme-dark max-w-max"
          >
            <p class="font-bold text-2xl leading-[1.2] tracking-tight">
              Kontakt
            </p>
          </nuxt-link>
        </div>
      </div>
      <div class="social-links absolute left-8 -mt-3 hidden md:block top-0">
        <div class="flex flex-col items-center gap-3">
          <div class="opacity-75 transition-opacity hover:opacity-100">
            <nuxt-link
              class="fade-in block cursor-pointer"
              to="https://www.linkedin.com/in/skrauz/"
              target="_blank"
            >
              <nuxt-img class="w-8" src="/img/socials/linkedin.svg"></nuxt-img>
            </nuxt-link>
          </div>
          <div class="opacity-75 transition-opacity hover:opacity-100">
            <nuxt-link
              class="fade-in block cursor-pointer"
              to="https://github.com/Skrauz"
              target="_blank"
            >
              <nuxt-img class="w-8" src="/img/socials/github.svg"></nuxt-img>
            </nuxt-link>
          </div>
          <div class="opacity-75 transition-opacity hover:opacity-100">
            <nuxt-link
              class="fade-in block cursor-pointer"
              to="https://www.instagram.com/skrauz_dev/"
              target="_blank"
            >
              <nuxt-img class="w-8" src="/img/socials/instagram.svg"></nuxt-img>
            </nuxt-link>
          </div>
          <div class="opacity-75 transition-opacity hover:opacity-100">
            <nuxt-link
              class="fade-in block cursor-pointer"
              :to="`mailto:${publicConfig.contactEmail}`"
              target="_blank"
            >
              <nuxt-img class="w-8" src="/img/socials/mail.svg"></nuxt-img>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div
      class="fade-in arrow-flex w-full absolute bottom-0 left-0 flex justify-center"
    >
      <button
        @click="scrollToNextSection"
        class="p-4 mb-2 md:mb-6 cursor-pointer transition-transform hover:scale-120"
      >
        <nuxt-img class="w-5" src="/img/hero-arrow.svg"></nuxt-img>
      </button>
    </div>
  </div>
</template>
