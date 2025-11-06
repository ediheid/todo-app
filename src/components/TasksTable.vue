<script setup lang="ts">
import { useTaskStore } from "@/stores/tasks";
import ActionMenu from "./ActionMenu.vue";
import { computed } from "vue";
const taskStore = useTaskStore();

const groupedTasks = computed(() => [
  { title: "To do", tasks: taskStore.tasks.filter((t) => !t.isDone) },
  { title: "Done", tasks: taskStore.tasks.filter((t) => t.isDone) },
]);
</script>
<template>
  <div class="flex flex-col flex-1 min-h-0">
    <div
      class="flex-1 overflow-y-scroll min-h-0 max-h-[calc(100vh-300px)] always-scrollbar"
    >
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
        <tbody
          class="bg-[var(--background-color-secondary)] divide-y divide-gray-200"
        >
          <template v-for="group in groupedTasks" :key="group.title">
            <tr
              class="font-semibold uppercase bg-[var(--background-color-tertiary)]"
            >
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

    <div
      class="bg-[var(--background-color-tertiary)] px-6 py-2 flex-shrink-0 w-full border-t border-gray-200"
    >
      <span class="font-semibold"> Summary: </span>

      {{ taskStore.tasks.filter((t) => !t.isDone).length }} outstanding,
      {{ taskStore.tasks.filter((t) => t.isDone).length }} done
    </div>
  </div>
</template>

<style scoped>
/* Forces vertical scrollbar to always appear so user knows to scroll */
.always-scrollbar::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 12px;
}

.always-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.always-scrollbar::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 6px;
  border: 3px solid #f1f1f1;
}
</style>
