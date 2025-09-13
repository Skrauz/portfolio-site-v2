<script setup lang="ts">
import { gsap } from "gsap";

onMounted(() => {
  // const elements = document.querySelectorAll(".scroll-fade-in");

  const scrollFadeInElements = gsap.utils.toArray(".scroll-fade-in").filter((el: any) => {
    return el.offsetParent !== null;
  })

  gsap.from(scrollFadeInElements, {
    opacity: 0,
    y: 20,
    duration: 0.3,
    stagger: 0.05,
    scrollTrigger: {
      // trigger: el,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
});
</script>

<template>
  <LoadingScreen />
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
