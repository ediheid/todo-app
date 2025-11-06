<script setup lang="ts">
import { useTaskStore } from "@/stores/tasks";
import ActionMenu from "./ActionMenu.vue";
const taskStore = useTaskStore();
</script>
<template>
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
        <tr
          v-for="task in taskStore.tasks"
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
    </table>
  </div>
</template>
