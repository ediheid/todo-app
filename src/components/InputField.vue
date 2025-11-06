<script setup lang="ts">
defineProps<{
  newTask: string;
}>();

defineEmits<{
  (e: "update:newTask", value: string): void;
}>();
</script>

<template>
  <input
    :value="newTask"
    @input="(e) => $emit('update:newTask', (e.target as HTMLInputElement).value)"
    type="text"
    placeholder="Add a new task..."
    class="flex-1 p-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-yellow)]"
  />
</template>
