<script setup lang="ts">
const positions = [
  {
    company: "234.studio",
    role: "Web Developer",
    period: "2023 - 2025",
    technologies: [
      "Nuxt",
      "Angular",
      "Typescript",
      "TailwindCSS",
      "Figma",
      "Directus",
      "Contentful",
      "HTML",
      "SCSS",
      "Prestashop",
      "Git",
      "npm",
    ],
  },
  {
    company: "Skrauz.dev",
    role: "Freelance Web Developer",
    period: "2023 - Present",
    technologies: [
      "Nuxt",
      "Penpot",
      "TailwindCSS",
      "Greensock",
      "Contentful",
      "Angular",
      "Typescript",
      "HTML",
      "SCSS",
      "Git",
      "npm",
    ],
  },
];

import { gsap } from "gsap";

onMounted(() => {
  gsap.utils.toArray(".position-panel").forEach((experiencePanel: any) => {
    const positionTechnologies = experiencePanel.querySelectorAll(
      ".position-technology",
    );

    const pillsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: experiencePanel,
        start: "top 80%", // when panel enters viewport
        toggleActions: "play none none none",
      },
    });

    pillsTimeline.from(experiencePanel, { ...fadeInAnimation, delay: 0.1 });

    pillsTimeline.from(positionTechnologies, fadeInAnimation);
  });
});
</script>

<template>
  <div class="common-container" id="doswiadczenie">
    <div
      class="pt-8 mt-16 md:pt-20 md:mt-4 flex gap-4 md:gap-12 min-h-[400px] w-full justify-between mx-auto"
    >
      <div
        class="scroll-fade-in mt-1.5 md:mt-5 animated-bar relative shrink-0 hidden md:block"
      >
        <nuxt-img class="w-5" src="/img/stick_2.svg"></nuxt-img>
      </div>
      <div
        class="scroll-fade-in mt-1.5 animated-bar relative shrink-0 md:hidden"
      >
        <nuxt-img class="w-6" src="/img/stick_3.svg"></nuxt-img>
      </div>
      <div class="experience">
        <h2
          class="scroll-fade-in text-4xl md:text-5xl font-bold leading-[0.9] tracking-[-1px] md:text-center"
        >
          Doświadczenie
        </h2>
        <div class="mt-12 flex flex-col w-full gap-12 xl:mt-16 md:items-center">
          <div
            v-for="(position, idx) in positions"
            :key="position.company + position.role"
            class="position-panel max-w-xl"
          >
            <h3
              class="text-2xl font-bold leading-[0.9] tracking-[-1px] md:text-center"
            >
              <span class="text-theme-accent">{{ position.role }}</span>
              w&nbsp;{{ position.company }}
            </h3>
            <p
              class="mt-1 text-lg italic text-theme-light uppercase md:text-center"
            >
              {{ position.period }}
            </p>
            <ul
              class="technologies flex flex-wrap gap-3 mt-3 md:justify-center"
            >
              <li
                v-for="tech in position.technologies"
                :key="tech"
                class="position-technology max-w-max cursor-default"
              >
                <p
                  class="rounded-full font-bold text-theme-accent bg-theme-accent/25 px-3 py-1 transition-transform hover:scale-110 hover:-rotate-6"
                >
                  {{ tech }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="scroll-fade-in mt-1.5 md:mt-5 animated-bar relative shrink-0 hidden md:block"
      >
        <nuxt-img class="w-5" src="/img/stick_2.svg"></nuxt-img>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
