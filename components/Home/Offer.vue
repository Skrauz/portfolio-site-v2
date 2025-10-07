<script setup lang="ts">
import { processText } from "~/utils/textProcessing";
</script>

<template>
  <article class="common-container" id="oferta">
    <div
      class="pt-8 mt-16 md:pt-20 md:mt-16 flex gap-4 md:gap-12 min-h-[400px] w-full justify-between mx-auto"
    >
      <div class="offer w-full">
        <h2
          class="scroll-fade-in text-4xl md:text-5xl font-bold leading-[0.9] tracking-[-1px]"
        >
          Oferta
        </h2>
        <div class="mt-6 md:mt-8 ml-1 flex w-full gap-4 md:ml-0">
          <div
            class="scroll-fade-in mt-1.5 animated-bar relative shrink-0 hidden md:block"
          >
            <nuxt-img class="w-5" src="/img/stick_2.svg"></nuxt-img>
          </div>
          <div class="">
            <div class="prose prose-invert text-white leading-normal max-w-none">
              <h3
                class="scroll-fade-in uppercase text-theme-accent md:text-2xl text-xl font-normal"
              >
                Profesjonalne projekty <br />stron internetowych
              </h3>
              <p
                class="scroll-fade-in font-bold mt-3"
                v-html="
                  processText(
                    'Profesjonalna strona internetowa to fundament zaufania Twoich klientów.',
                  )
                "
              ></p>
              <p
                class="scroll-fade-in"
                v-html="
                  processText(
                    'Pomagam firmom i markom budować silną, spójną i autentyczną obecność w sieci. Taką, która przyciąga uwagę i realnie wspiera rozwój biznesu.',
                  )
                "
              ></p>
              <p
                class="scroll-fade-in"
                v-html="
                  processText(
                    'Specjalizuję się w projektowaniu i wdrażaniu spersonalizowanych stron internetowych, które łączą wydajność, funkcjonalność, estetykę i SEO.',
                  )
                "
              ></p>
              <p class="scroll-fade-in">Co mogę dla Ciebie zrobić:</p>
              <ul class="scroll-fade-in">
                <li
                  v-html="
                    processText(
                      'zaprojektuję stronę dopasowaną do Twojej branży i odbiorców,',
                    )
                  "
                ></li>
                <li
                  v-html="
                    processText(
                      'zadbam o intuicyjną nawigację i przejrzystą strukturę treści,',
                    )
                  "
                ></li>
                <li
                  v-html="
                    processText(
                      'przygotuję nowoczesny, responsywny design, działający na każdym urządzeniu,',
                    )
                  "
                ></li>
                <li
                  v-html="
                    processText(
                      'zoptymalizuję stronę pod kątem szybkości i widoczności w wyszukiwarkach,',
                    )
                  "
                ></li>
                <li
                  v-html="
                    processText(
                      'doradzę, jak najlepiej wykorzystać stronę do rozwoju Twojej działalności.',
                    )
                  "
                ></li>
              </ul>
              <p
                class="scroll-fade-in"
                v-html="
                  processText(
                    'Każdy projekt tworzę z myślą o Twoich celach biznesowych. Analizuję potrzeby, dobieram rozwiązania i dbam o każdy detal.',
                  )
                "
              ></p>
              <p
                class="scroll-fade-in"
                v-html="
                  processText(
                    '<strong>Silna obecność Twojej marki w Internecie to wiarygodność, zainteresowanie nowych klientów i przewaga nad konkurencją.</strong>',
                  )
                "
              ></p>
              <p
                class="scroll-fade-in"
                v-html="
                  processText(
                    'Pozytywne efekty to cel w każdej mojej współpracy.',
                  )
                "
              ></p>
            </div>
            <nuxt-link
              to="#kontakt"
              class="scroll-fade-in md:mx-auto lg:mx-0 mt-8 md:mt-8 transition-colors hover:bg-theme-accent-hover rounded-full py-1.5 px-6 flex items-center gap-2.5 bg-theme-accent text-theme-dark md:w-max w-full"
              aria-label="Go to contact section"
            >
              <p class="font-bold text-2xl leading-[1.2] tracking-tight text-center mx-auto">
                Skontaktuj się ze mną
              </p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped></style>
