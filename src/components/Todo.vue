<script setup lang="ts">
import TaskForm from "./TaskForm.vue";
import TasksTable from "./TasksTable.vue";
</script>

<template>
  <div class="mb-8 p-4 bg-[var(--background-color-secondary)] gap-2">
    <TaskForm />
    <TasksTable />
  </div>
</template>
