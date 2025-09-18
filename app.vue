<script setup lang="ts">
useSeoMeta({
  ogImage: "/ogimage.png",
})
</script>

<template>
  <LoadingScreen />
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
