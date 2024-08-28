<template>
  <h1 class="text-2xl font-bold mb-4 cursor-pointer" @click="count++">
    Hello world... <span v-if="count > 1">{{ count }} times</span>
  </h1>
</template>

<script setup lang="ts">
import { ref } from "vue";
const count = ref(1);
</script>
