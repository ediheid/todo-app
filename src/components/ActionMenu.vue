<script setup lang="ts">
import { useTaskStore } from "../stores/tasks";
const taskStore = useTaskStore();
defineProps<{
  taskId: string;
}>();

const markDone = (taskId: string) => {
  taskStore.toggleTaskCompletion(taskId);
  // todo check challenge again add mark done functionality
};

const editTask = (taskId: string) => {
  // todo check challenge again add edit functionality
};

const deleteTask = (taskId: string) => {
  taskStore.deleteTask(taskId);
};
</script>

<template>
  <div class="flex gap-2">
    <button @click="markDone(taskId)" class="cursor-pointer">
      {{
        taskStore.tasks.find((t) => t.id === taskId)?.isDone ? "redo" : "done"
      }}
    </button>
    <button @click="editTask(taskId)" class="cursor-pointer">edit</button>
    <button @click="deleteTask(taskId)" class="cursor-pointer">delete</button>
  </div>
</template>
