<script setup lang="ts">
import { useTaskStore } from "@/stores/tasks";
import ActionMenu from "./ActionMenu.vue";
import { computed, ref } from "vue";
const taskStore = useTaskStore();

const groupedTasks = computed(() => [
  { title: "To do", tasks: taskStore.tasks.filter((t) => !t.isDone) },
  { title: "Done", tasks: taskStore.tasks.filter((t) => t.isDone) },
]);

interface EditingTask {
  id: string;
  description: string;
}

const editingTask = ref<EditingTask | null>(null);

const startEditing = (taskId: string) => {
  const task = taskStore.tasks.find((t) => t.id === taskId);
  if (!task || task.isDone) return;
  editingTask.value = { id: task.id, description: task.description };
};

const saveEdit = () => {
  if (editingTask.value) {
    taskStore.editTaskDescription(
      editingTask.value.id,
      editingTask.value.description
    );
    editingTask.value = null;
  }
};

const cancelEdit = () => {
  editingTask.value = null;
};
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
                <div
                  v-if="editingTask?.id === task.id"
                  class="flex items-center gap-2"
                >
                  <input
                    v-model="editingTask.description"
                    class="px-2 py-1 border border-gray-300 text-sm flex-1 min-w-0"
                    @keyup.enter="saveEdit"
                    @blur="cancelEdit"
                  />

                  <button
                    @click="saveEdit"
                    @mousedown.prevent
                    class="px-2 py-1 rounded-sm bg-[var(--button-save-bg)] text-[var(--text-color-secondary)] font-semibold border-0 hover:border hover:bg-[var(--button-save-bg-hover)] hover:border-gray-300 cursor-pointer transition-colors transition-border duration-200"
                  >
                    Save
                  </button>
                  <button
                    @click="cancelEdit"
                    class="px-2 py-1 rounded-sm bg-[var(--button-cancel-bg)] text-[var(--text-color-secondary)] font-semibold border-0 hover:border hover:bg-[var(--button-cancel-bg-hover)] hover:border-gray-300 cursor-pointer transition-colors transition-border duration-200"
                  >
                    Cancel
                  </button>
                </div>

                <div v-else>
                  {{ task.description }}
                </div>
              </td>

              <td class="px-6 py-4 text-right">
                <ActionMenu :taskId="task.id" @edit="startEditing" />
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
