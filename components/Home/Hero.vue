<script setup lang="ts"></script>
<template>
  <div class="common-container">
    <div class="hero mt-[260px] max-w-max">
      <h1 class="text-6xl font-bold leading-[0.9] tracking-[-2px]">
        <span class="text-theme-accent">S</span>ebastian <br />
        <span class="text-theme-accent">Krauz</span>owicz
      </h1>
      <p class="uppercase mt-2 text-2xl italic text-theme-light">
        Front-End Developer
      </p>
      <nuxt-link
        to="#kontakt"
        class="transition-all hover:opacity-80 mt-3 rounded-sm py-1.5 px-4 flex items-center gap-2.5 bg-theme-accent text-theme-dark max-w-max"
      >
        <p class="font-bold text-2xl leading-[1.2] tracking-tight">
          Kontakt
        </p>
        <nuxt-img class="w-6" src="/img/contact-arrow.svg"></nuxt-img>
      </nuxt-link>
    </div>
    <div class="h-[700px]"></div>
  </div>
</template>
