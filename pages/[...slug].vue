<template>
  <div class="pb-20 flex flex-col items-center justify-center h-[calc(100dvh-96px)] md:h-[calc(100dvh-120px)] text-center">
    <h1 class="text-6xl font-bold">404</h1>
    <p class="text-lg">Nie znaleziono strony.</p>
    <nuxt-link
      to="/"
      class="fade-in mt-4 transition-colors hover:bg-theme-accent-hover rounded-full py-1.5 px-6 flex items-center gap-2.5 bg-theme-accent text-theme-dark max-w-max"
    >
      <p class="font-bold text-2xl leading-[1.2] tracking-tight">
          Strona Główna
      </p>
    </nuxt-link>
  </div>
</template>
