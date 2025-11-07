<script setup lang="ts">
import { ref } from "vue";
import { useTaskStore } from "../stores/tasks";
import InputField from "./InputField.vue";
import SaveTaskButton from "./SaveTaskButton.vue";
import DropdownSelect from "./DropdownSelect.vue";
import { Category, categories } from "../enums/categories";

const taskStore = useTaskStore();
const newTask = ref("");
const selectedCategory = ref<Category>(Category.Holiday);

const addTask = () => {
  if (!newTask.value.trim() || !selectedCategory.value) return;
  taskStore.addTask(newTask.value.trim(), selectedCategory.value);
  newTask.value = "";
  selectedCategory.value = Category.Holiday;
};
</script>
<template>
  <form
    class="w-full flex gap-2 p-4 mb-6 bg-[var(--background-color-secondary)]"
  >
    <InputField v-model:newTask="newTask" class="flex-1" />
    <DropdownSelect
      v-model="selectedCategory"
      :options="categories"
    ></DropdownSelect>
    <SaveTaskButton @click="addTask" />
  </form>
</template>
