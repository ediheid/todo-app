<script setup lang="ts">
import { useTaskStore } from "@/stores/tasks";
import ActionMenu from "./ActionMenu.vue";
import { computed } from "vue";
const taskStore = useTaskStore();

const outstandingTasks = computed(() =>
  taskStore.tasks.filter((task) => !task.status)
);

const statusTasks = computed(() =>
  taskStore.tasks.filter((task) => task.status)
);
</script>
<template>
  <!-- // todo: style 'todo' and 'done' sections to look nicer  -->
  <div class="overflow-x-auto mt-8">
    <table class="min-w-full table-auto divide-y divide-gray-200">
      <thead>
        <tr>
          <th
            class="px-6 py-4 border-r border-gray-200 text-left text-sm font-medium uppercase tracking-wider"
          >
            Date
          </th>
          <th
            class="px-6 py-4 border-r border-gray-200 text-left text-sm font-medium uppercase tracking-wider w-[300px]"
          >
            Description
          </th>
          <th
            class="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider"
          >
            Actions
          </th>
        </tr>
      </thead>

      <tbody class="bg-white divide-y divide-gray-200">
        <tr class="font-semibold uppercase">
          To do
        </tr>
        <tr
          v-for="task in outstandingTasks"
          :key="task.id"
          class="hover:bg-gray-50"
        >
          <td class="px-6 py-4 border-r border-gray-200">
            {{ new Date(task.date).toLocaleDateString() }}
          </td>
          <td class="px-6 py-4 border-r border-gray-200 text-sm w-[300px]">
            {{ task.description }}
          </td>
          <td class="px-6 py-4 text-right">
            <ActionMenu :taskId="task.id" />
          </td>
        </tr>
      </tbody>

      <tbody class="bg-white divide-y divide-gray-200">
        <tr class="font-semibold uppercase">
          Done
        </tr>
        <tr v-for="task in statusTasks" :key="task.id" class="hover:bg-gray-50">
          <td class="px-6 py-4 border-r border-gray-200">
            {{ new Date(task.date).toLocaleDateString() }}
          </td>
          <td class="px-6 py-4 border-r border-gray-200 text-sm w-[300px]">
            {{ task.description }}
          </td>
          <td class="px-6 py-4 text-right">
            <ActionMenu :taskId="task.id" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
