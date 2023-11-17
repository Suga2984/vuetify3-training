<script setup lang="ts">
const props = defineProps<{
  id: number
}>()
</script>

<template>
  <div class="d-flex justify-center flex-grow-1">
    {{ props.id }}
  </div>
</template>
