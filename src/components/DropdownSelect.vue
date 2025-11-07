<script setup lang="ts">
import { Category } from "../enums/categories";
defineProps<{
  options: { value: Category; label: string }[];
  modelValue: Category | null;
  placeholder?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: Category | null): void;
}>();
</script>

<template>
  <div class="relative flex-1">
    <select
      :value="modelValue"
      @change="(e) => $emit('update:modelValue', (e.target as HTMLSelectElement).value as Category)"
      class="appearance-none w-full p-2 pr-8 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-yellow)]"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <!-- custom chevron cos I'm being picky about spacing of chevron 😅 -->
    <div
      class="pointer-events-none absolute inset-y-0 right-2 flex items-center"
    >
      <img
        src="@/assets/icons/chevron.svg"
        alt="Dropdown Icon"
        class="w-4 h-4 text-gray-500"
      />
    </div>
  </div>
</template>
