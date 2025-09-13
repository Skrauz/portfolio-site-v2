<script setup lang="ts">
const projects = [
  {
    name: "Strona Portfolio v2",
    description:
      "Excepturi magnam sed eum est unde at facere iure. Nihil quisquam nisi ex consequuntur molestiae reprehenderit et. Omnis fugiat ex temporibus aperiam odio repellendus. Cupiditate cupiditate commodi consequatur. Ut sint occaecati corporis natus placeat non iusto et. Vel quae repudiandae suscipit beatae.",
    image: "/img/projects/portfoliov2.jpg",
    technologies: ["Nuxt", "TailwindCSS", "SCSS", "Typescript"],
    link: "https://skrauz.dev",
  },
  {
    name: "Project 2",
    description:
      "Excepturi magnam sed eum est unde at facere iure. Nihil quisquam nisi ex consequuntur molestiae reprehenderit et. Omnis fugiat ex temporibus aperiam odio repellendus. Cupiditate cupiditate commodi consequatur.",
    image: null,
    technologies: ["Nuxt", "TailwindCSS", "SCSS", "Typescript"],
    link: null,
  },
  {
    name: "Project 3",
    description:
      "Excepturi magnam sed eum est unde at facere iure. Nihil quisquam nisi ex consequuntur molestiae reprehenderit et. Omnis fugiat ex temporibus aperiam odio repellendus. Cupiditate cupiditate commodi consequatur.",
    image: null,
    technologies: ["Nuxt", "TailwindCSS", "SCSS", "Typescript"],
    link: null,
  },
  {
    name: "Lorem Ipsum Project 1",
    description:
      "Excepturi magnam sed eum est unde at facere iure. Nihil quisquam nisi ex consequuntur molestiae reprehenderit et. Omnis fugiat ex temporibus aperiam odio repellendus. Cupiditate cupiditate commodi consequatur.",
    image: null,
    technologies: ["Nuxt", "TailwindCSS", "SCSS", "Typescript"],
    link: null,
  },
];

import { gsap } from "gsap";

onMounted(() => {
  gsap.utils.toArray(".project-panel").forEach((projectPanel: any) => {
    const projectTechnologies = projectPanel.querySelectorAll(
      ".project-technology"
    );

    const pillsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: projectPanel,
        start: "top 80%", // when panel enters viewport
        toggleActions: "play none none none",
      },
    });

    pillsTimeline.from(projectPanel, { ...fadeInAnimation, delay: 0.1 });

    pillsTimeline.from(projectTechnologies, fadeInAnimation);
  });
});
</script>
<template>
  <div class="common-container" id="projekty">
    <div
      class="pt-12 mt-16 md:pt-20 md:mt-12 xl:mt-20 flex gap-4 md:gap-12 min-h-[400px] w-full justify-between mx-auto"
    >
      <div class="w-full">
        <h2
          class="scroll-fade-in text-4xl md:text-5xl font-bold leading-[0.9] tracking-[-2px] text-center"
        >
          Projekty
        </h2>
        <div
          class="projects gap-6 mt-6 md:mt-12 xl:mt-20 grid grid-cols-1 lg:grid-cols-2"
        >
          <div
            class="project-panel md:p-8 p-7 relative group h-max"
            v-for="(project, idx) in projects"
            :key="project.name"
          >
            <div class="absolute top-0 left-0 size-full p-3 -z-10">
              <div
                class="bg-white transition-all opacity-0 group-hover:opacity-5 size-full rounded-2xl"
              ></div>
            </div>
            <nuxt-img
              src="/img/frame_small.svg"
              class="-z-10 absolute top-0 left-0"
            ></nuxt-img>
            <template v-if="project.link">
              <nuxt-link
                :to="project.link"
                target="_blank"
                class="project-header hover:text-theme-accent flex items-center gap-3 max-w-max transition-colors"
              >
                <h3
                  class="project-name text-2xl md:text-3xl font-bold leading-[0.9] tracking-[-2px] text-center"
                >
                  {{ project.name }}
                </h3>
                <div class="w-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      fill="currentColor"
                      d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0-201.4 201.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3 448 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 96C35.8 96 0 131.8 0 176L0 432c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80l0-80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 80c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 96z"
                    />
                  </svg>
                </div>
              </nuxt-link>
            </template>
            <template v-else>
              <div
                class="project-header hover:text-theme-accent flex items-center gap-3 max-w-max transition-colors"
              >
                <h3
                  class="project-name text-2xl md:text-3xl font-bold leading-[0.9] tracking-[-2px] text-center"
                >
                  {{ project.name }}
                </h3>
              </div>
            </template>
            <div class="project-body flex xl:flex-row flex-col gap-4 mt-4">
              <p class="project-description leading-snug">
                {{ project.description }}
              </p>
              <div
                v-if="project.image"
                class="w-full xl:w-[40%] max-w-xs shrink-0"
              >
                <nuxt-img
                  class="w-full rounded-sm"
                  :src="project.image"
                ></nuxt-img>
              </div>
            </div>
            <div class="project-information mt-6">
              <div class="grid grid-cols-2 gap-4">
                <div class="col-span-2">
                  <h4 class="text-2xl font-bold leading-[0.9] tracking-[-2px]">
                    Technologie
                  </h4>
                  <ul class="technologies flex flex-wrap gap-3 mt-4">
                    <li
                      v-for="tech in project.technologies"
                      :key="tech"
                      class="project-technology max-w-max cursor-default"
                    >
                    <p class="rounded-full font-bold text-theme-accent bg-theme-accent/25 px-3 py-1 transition-transform hover:scale-110 hover:-rotate-6">
                      {{ tech }}
                    </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
