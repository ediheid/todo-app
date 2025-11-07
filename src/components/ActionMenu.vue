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
    <button
      @click="markTaskDoneOrRedo()"
      class="cursor-pointer flex items-center gap-1"
    >
      <img
        v-if="taskStore.tasks.find((t) => t.id === taskId)?.isDone"
        src="@/assets/icons/redo.svg"
        alt="Redo Button "
        class="w-4 h-4 text-gray-500"
      />

      <img
        v-else
        src="@/assets/icons/done.svg"
        alt="Done Button"
        class="w-4 h-4 text-gray-500"
      />
    </button>

    <button v-if="!task?.isDone" @click="editTask()" class="cursor-pointer">
      <img
        src="@/assets/icons/edit.svg"
        alt="Edit Button"
        class="w-4 h-4 text-gray-500"
      />
    </button>
    <button @click="deleteTask()" class="cursor-pointer">
      <img
        src="@/assets/icons/delete.svg"
        alt="Delete Button"
        class="w-4 h-4 text-gray-500"
      />
    </button>
  </div>
</template>
