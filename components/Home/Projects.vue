<script setup lang="ts">
const projects = [
    {
        name: "Strona Portfolio v2",
        description:
            "Druga wersja strony portfolio stworzona z myślą o czytelnej i profesjonalnej prezentacji moich projektów.",
        image: "/img/projects/portfoliov2.png",
        technologies: ["Nuxt", "TailwindCSS", "SCSS", "Typescript", "GSAP"],
        link: "https://skrauz.dev",
        githubLink: "https://github.com/Skrauz/portfolio-site-v2",
        frame: true,
    },
    {
        name: "Skrauzodoro Tracker",
        description:
            "Skrauzodoro Tracker to konfigurowalne narzędzie do śledzenia i zarządzania czasem pracy, zbudowane w oparciu o stack MEAN (MongoDB, ExpressJS, Angular, NodeJS). Aplikacja powstała z mojej potrzeby posiadania prostego rozwiązania do śledzenia pracy, umożliwiającego dalszą analizę zebranych danych. Aplikacja umożliwia śledzenie czasu poświęconego na konkretne zadania i projekty przy użyciu klasycznego stopera lub techniki pomodoro.",
        image: "/img/projects/skrauzodoro.png",
        technologies: [
            "Angular",
            "SCSS",
            "MongoDB",
            "Node",
            "ChartJS",
            "Typescript",
        ],
        link: "https://skrauzodoro-tracker-skrauz.vercel.app/",
        githubLink: "https://github.com/Skrauz/Skrauzodoro-Tracker-Browser.git",
        frame: false,
    },
];

import { gsap } from "gsap";

import { fadeInAnimation } from "~/composables/fadeInAnim";

const processDescription = (text: string) => {
    const prepositions = ['w', 'z', 'na', 'do', 'od', 'za', 'po', 'dla', 'przez', 'bez', 'pod', 'nad', 'przy', 'między', 'przed', 'o', 'ze', 'ze', 'a', 'i', 'lub', 'oraz'];

    let processedText = text;

    prepositions.forEach(prep => {
        const regex = new RegExp(`\\s(${prep})\\s`, 'gi');
        processedText = processedText.replace(regex, ` $1&nbsp;`);
    });

    return processedText;
};

onMounted(() => {
    gsap.utils.toArray(".project-panel").forEach((projectPanel: any) => {
        const projectTechnologies = projectPanel.querySelectorAll(
            ".project-technology",
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
                    class="scroll-fade-in text-4xl md:text-5xl font-bold leading-[0.9] tracking-[-1px] text-center"
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
                            class="-z-10 absolute top-0 left-0 md:w-[230px] w-[250px]"
                            alt="Decorative frame border"
                        ></nuxt-img>
                        <template v-if="project.link">
                            <nuxt-link
                                :to="project.link"
                                target="_blank"
                                class="link-underline project-header flex items-center gap-3 max-w-max"
                                :aria-label="`Visit ${project.name} project`"
                            >
                                <span class="underline"></span>
                                <h3
                                    class="project-name text-2xl md:text-3xl font-bold leading-[0.9] tracking-[-1px] text-center"
                                >
                                    {{ project.name }}
                                </h3>
                                <div class="w-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
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
                                class="project-header flex items-center gap-3 max-w-max"
                            >
                                <h3
                                    class="project-name text-2xl md:text-3xl font-bold leading-[0.9] tracking-[-1px] text-center"
                                >
                                    {{ project.name }}
                                </h3>
                            </div>
                        </template>
                        <div class="project-body flex flex-col gap-4 mt-5">
                            <div
                                v-if="project.image"
                                class="w-full shrink-0"
                                :class="{
                                    'outline-theme-accent/50 outline-2 rounded-sm':
                                        project.frame,
                                }"
                            >
                                <nuxt-img
                                    class="w-full"
                                    :src="project.image"
                                    :alt="`Screenshot of ${project.name} project`"
                                ></nuxt-img>
                            </div>

                            <p class="project-description leading-snug" v-html="processDescription(project.description)">
                            </p>

                            <nuxt-link
                                class="link-underline max-w-max mt-2 flex items-center gap-2 text-xl font-bold leading-[0.9] tracking-[-1px]"
                                v-if="project.githubLink"
                                :to="project.githubLink"
                                target="_blank"
                                :aria-label="`View ${project.name} on GitHub`"
                                ><p>Github</p>
                                <nuxt-img
                                    class="w-4"
                                    src="/img/socials/github.svg"
                                    alt="GitHub logo"
                                ></nuxt-img>
                                <span class="underline"></span>
                            </nuxt-link>
                        </div>
                        <div class="project-information mt-6">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="col-span-2">
                                    <h4
                                        class="text-2xl font-bold leading-[0.9] tracking-[-1px]"
                                    >
                                        Technologie
                                    </h4>
                                    <ul
                                        class="technologies flex flex-wrap gap-3 mt-4"
                                    >
                                        <li
                                            v-for="tech in project.technologies"
                                            :key="tech"
                                            class="project-technology max-w-max cursor-default"
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped style="scss">
.link-underline {
    position: relative;
}

.underline {
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 3px;
    background: var(--color-theme-accent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
    z-index: 1;
}

.link-underline:hover .underline {
    transform: scaleX(1);
}
</style>
