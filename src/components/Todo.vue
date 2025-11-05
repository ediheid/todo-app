<script setup lang="ts">
import { ref } from "vue";
import InputContainer from "./InputContainer.vue";
import Table from "./Table.vue";
</script>

<template>
  <div class="mb-8 p-4 bg-[var(--background-color-secondary)] gap-2">
    <InputContainer />
    <Table />
  </div>
</template>
