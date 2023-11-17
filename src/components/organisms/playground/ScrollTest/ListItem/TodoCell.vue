<script setup lang="ts">
const props = defineProps<{
  todo: string
}>()
</script>

<template>
  <div class="d-flex justify-center flex-grow-1">
    {{ props.todo }}
  </div>
</template>
