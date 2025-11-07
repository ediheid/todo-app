<script setup lang="ts">
import TaskForm from "./TaskForm.vue";
import TasksTable from "./TasksTable.vue";
import { categories } from "@/enums/categories";
</script>

<template>
  <div class="mb-8">
    <TaskForm />

    <div class="flex flex-col gap-6">
      <TasksTable
        v-for="category in categories"
        :key="category.value"
        :category="category.value"
        :category-label="category.label"
      />
    </div>
  </div>
</template>
