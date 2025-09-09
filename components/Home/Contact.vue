<script setup lang="ts">
function scrollToNextSection() {
  const nextSection = document.getElementById('doswiadczenie')
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' })
  }
}</script>
<template>
  <div class="h-[100dvh] relative flex flex-col justify-center">
    <div class="relative">
      <div class="common-container">
        <div class="hero flex flex-col items-center">
          <h1 class="text-6xl font-bold text-center leading-[0.9] tracking-[-2px]">
            Kontakt
          </h1>
          <p class="uppercase mt-6 md:mt-3 text-2xl italic text-center text-theme-light">Front-End & Web Developer</p>
        </div>
      </div>
    </div>
  </div>
</template>
