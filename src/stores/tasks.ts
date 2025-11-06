import { defineStore } from "pinia";
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";

export const useTaskStore = defineStore(
  "taskStore",
  () => {
    const tasks = ref<
      Array<{
        id: string;
        date: number;
        description: string;
        status: boolean;
      }>
    >([]);

    const addTask = (description: string) => {
      tasks.value.push({
        id: uuidv4(),
        date: Date.now(),
        description,
        status: false,
      });
    };

    const toggleTaskCompletion = (id: string) => {
      const task = tasks.value.find((t) => t.id === id);
      if (task) {
        task.status = !task.status;
      }
    };

    const editTaskDescription = (id: string, newDescription: string) => {
      const task = tasks.value.find((t) => t.id === id);
      if (task && !task.status) {
        task.description = newDescription;
      }
    };

    const deleteTask = (id: string) => {
      tasks.value = tasks.value.filter((t) => t.id !== id);
    };

    return {
      tasks,
      addTask,
      toggleTaskCompletion,
      editTaskDescription,
      deleteTask,
    };
  },
  {
    persist: true,
  }
);
