<script setup lang="ts">
function scrollToNextSection() {
  const nextSection = document.getElementById("projekty");
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
}
const publicConfig = useRuntimeConfig().public;
</script>
<template>
  <div
    class="h-[calc(100dvh-96px)] md:h-[calc(100dvh-120px)] relative flex flex-col justify-center pb-8 md:pb-24"
  >
    <div class="relative">
      <div class="common-container">
        <div class="hero flex flex-col items-center">
          <h1
            class="text-6xl font-bold text-center leading-[0.9] tracking-[-1px] fade-in"
          >
            <span class="text-theme-accent">&nbsp;S</span>ebastian<span
              class="text-theme-accent"
            >
              Krauz</span
            >owicz
          </h1>
          <p
            class="fade-in uppercase mt-5 md:mt-4 text-2xl leading-tight mx-auto text-center text-theme-light"
          >
            Strony internetowe<br />
            <span class="text-theme-accent">które pracują dla&nbsp;ciebie</span>
          </p>
          <nuxt-link
            to="#kontakt"
            class="fade-in mt-5 md:mt-5 transition-colors hover:bg-theme-accent-hover rounded-full py-1.5 px-6 flex items-center gap-2.5 bg-theme-accent text-theme-dark max-w-max"
            aria-label="Go to contact section"
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
              aria-label="Visit LinkedIn profile"
            >
              <nuxt-img
                class="w-8"
                src="/img/socials/linkedin.svg"
                alt="LinkedIn logo"
              ></nuxt-img>
            </nuxt-link>
          </div>
          <div class="opacity-75 transition-opacity hover:opacity-100">
            <nuxt-link
              class="fade-in block cursor-pointer"
              to="https://github.com/Skrauz"
              target="_blank"
              aria-label="Visit GitHub profile"
            >
              <nuxt-img
                class="w-8"
                src="/img/socials/github.svg"
                alt="GitHub logo"
              ></nuxt-img>
            </nuxt-link>
          </div>
          <div class="opacity-75 transition-opacity hover:opacity-100">
            <nuxt-link
              class="fade-in block cursor-pointer"
              to="https://www.instagram.com/skrauz_dev/"
              target="_blank"
              aria-label="Visit Instagram profile"
            >
              <nuxt-img
                class="w-8"
                src="/img/socials/instagram.svg"
                alt="Instagram logo"
              ></nuxt-img>
            </nuxt-link>
          </div>
          <div class="opacity-75 transition-opacity hover:opacity-100">
            <nuxt-link
              class="fade-in block cursor-pointer"
              :to="`mailto:${publicConfig.contactEmail}`"
              target="_blank"
              aria-label="Send email to Sebastian Krauzowicz"
            >
              <nuxt-img
                class="w-8"
                src="/img/socials/mail.svg"
                alt="Email icon"
              ></nuxt-img>
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
        aria-label="Scroll to next section"
      >
        <nuxt-img
          class="w-5"
          src="/img/hero-arrow.svg"
          alt="Down arrow"
        ></nuxt-img>
      </button>
    </div>
  </div>
</template>
