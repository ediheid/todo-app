import { defineStore } from "pinia";
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import { Category } from "./../enums/categories";

export const useTaskStore = defineStore(
  "taskStore",
  () => {
    const tasks = ref<
      Array<{
        id: string;
        date: number;
        description: string;
        isDone: boolean;
        isTaskUrgent: boolean;
        category: Category;
      }>
    >([]);

    const addTask = (description: string, category: Category) => {
      tasks.value.push({
        id: uuidv4(),
        date: Date.now(),
        description,
        isDone: false,
        isTaskUrgent: false,
        category,
      });
    };

    const toggleTaskCompletion = (id: string) => {
      const task = tasks.value.find((t) => t.id === id);
      if (!task) return;
      task.isDone = !task.isDone;

      if (task.isDone) {
        task.isTaskUrgent = false;
      } else {
        task.date = Date.now();
        task.isTaskUrgent = false;
      }
    };

    const editTaskDescription = (id: string, newDescription: string) => {
      const task = tasks.value.find((t) => t.id === id);
      if (task && !task.isDone) {
        task.description = newDescription;
        task.isTaskUrgent = false;
        task.date = Date.now();
      }
    };

    const updateTaskCategory = (id: string, newCategory: Category) => {
      const task = tasks.value.find((t) => t.id === id);
      if (task) task.category = newCategory;
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
      updateTaskCategory,
    };
  },
  {
    persist: true,
  }
);
