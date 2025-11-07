<script setup lang="ts">
import { computed } from "vue";
import { useTaskStore } from "../stores/tasks";
const taskStore = useTaskStore();

const props = defineProps<{ taskId: string }>();

const emit = defineEmits<{
  (e: "edit", taskId: string): void;
}>();

const task = computed(() => taskStore.tasks.find((t) => t.id === props.taskId));

const markTaskDoneOrRedo = () => {
  if (task.value) taskStore.toggleTaskCompletion(props.taskId);
};

const editTask = () => {
  emit("edit", props.taskId);
};

const deleteTask = () => {
  taskStore.deleteTask(props.taskId);
};
</script>

<template>
  <div class="flex gap-2">
    <button @click="markTaskDoneOrRedo()" class="cursor-pointer">
      {{
        taskStore.tasks.find((t) => t.id === taskId)?.isDone ? "redo" : "done"
      }}
    </button>
    <button v-if="!task?.isDone" @click="editTask()" class="cursor-pointer">
      edit
    </button>
    <button @click="deleteTask()" class="cursor-pointer">delete</button>
  </div>
</template>
