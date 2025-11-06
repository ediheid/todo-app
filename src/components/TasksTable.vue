<script setup lang="ts">
import { useTaskStore } from "@/stores/tasks";
import ActionMenu from "./ActionMenu.vue";
import { computed } from "vue";
const taskStore = useTaskStore();

const groupedTasks = computed(() => [
  { title: "To do", tasks: taskStore.tasks.filter((t) => !t.status) },
  { title: "Done", tasks: taskStore.tasks.filter((t) => t.status) },
]);
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
        <template v-for="group in groupedTasks" :key="group.title">
          <tr class="font-semibold uppercase bg-gray-100">
            <td colspan="3" class="px-6 py-2">{{ group.title }}</td>
          </tr>
          <tr
            v-for="task in group.tasks"
            :key="task.id"
            class="hover:bg-gray-50"
          >
            <td class="px-6 py-4 border-r border-gray-200">
              {{
                new Date(task.date).toLocaleString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })
              }}
            </td>
            <td class="px-6 py-4 border-r border-gray-200 text-sm w-[300px]">
              {{ task.description }}
            </td>
            <td class="px-6 py-4 text-right">
              <ActionMenu :taskId="task.id" />
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
