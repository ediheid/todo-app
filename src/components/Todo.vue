<script setup lang="ts">
import { ref } from "vue";
import InputContainer from "./InputContainer.vue";

const count = ref(1);
</script>

<template>
  <div class="mb-6 p-4 bg-[var(--background-color-secondary)] gap-2">
    <InputContainer />
  </div>

  <h1 class="text-2xl font-bold mb-4 cursor-pointer" @click="count++">
    Hello world... <span v-if="count > 1">{{ count }} times</span>
  </h1>
</template>
