<script setup lang="ts">
import Header from "./components/Header.vue";
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <Header />
  <main class="my-6 mx-auto max-w-3xl">
    <!-- // todo: add some routes for fun and demo - maybe a 'done' view -->
    <HomeView />
  </main>
</template>
