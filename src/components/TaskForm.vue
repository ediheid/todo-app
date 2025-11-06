<script setup lang="ts">
import { ref } from "vue";
import { useTaskStore } from "../stores/tasks";
import InputField from "./InputField.vue";
import SaveTaskButton from "./SaveTaskButton.vue";

const taskStore = useTaskStore();
const newTask = ref("");

const addTask = () => {
  if (!newTask.value.trim()) return;
  taskStore.addTask(newTask.value.trim());
  newTask.value = "";
};
</script>
<template>
  <form class="w-full flex gap-2 p-4">
    <InputField v-model:newTask="newTask" class="flex-1" />
    <SaveTaskButton @click="addTask" />
  </form>
</template>
