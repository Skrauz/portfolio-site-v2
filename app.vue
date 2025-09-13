<script setup lang="ts">
import { gsap } from "gsap";

onMounted(() => {
  const fadeInAnimation: gsap.TweenVars = {
    opacity: 0,
    y: 20,
    duration: 0.3,
    stagger: 0.08,
    ease: "power1.out",
  };

  const fadeInElements = gsap.utils.toArray(".fade-in").filter((el: any) => {
    return el.offsetParent !== null;
  });

  gsap.from(fadeInElements, {
    ...fadeInAnimation,
    scrollTrigger: {
      start: "top 80%",
    },
  });

  const scrollFadeInElements = gsap.utils
    .toArray(".scroll-fade-in")
    .filter((el: any) => {
      return el.offsetParent !== null;
    });

  scrollFadeInElements.forEach((el: any) => {
    gsap.from(el, {
      ...fadeInAnimation,
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
    });
  });

  const stickScrollFadeInElements = gsap.utils
    .toArray(".stick-scroll-fade-in")
    .filter((el: any) => {
      return el.offsetParent !== null;
    });

  stickScrollFadeInElements.forEach((el: any) => {
    gsap.from(el, {
      ...fadeInAnimation,
      y: 10,
      scrollTrigger: {
        trigger: el,
        start: "top 100%",
      },
    });
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
