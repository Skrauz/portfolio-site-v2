<script setup lang="ts">
import { gsap } from "gsap";

import { fadeInAnimation } from "~/composables/fadeInAnim";

onMounted(() => {
    const fadeInElements = gsap.utils.toArray(".fade-in").filter((el: any) => {
        return el.offsetParent !== null;
    });

    gsap.from(fadeInElements, {
        ...fadeInAnimation,
        delay: 0.2,
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
    <HomeHero></HomeHero>
    <HomeProjects></HomeProjects>
    <HomeExperience></HomeExperience>
    <HomeContact></HomeContact>
</template>

<style scoped></style>
