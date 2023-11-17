<script setup lang="ts">
const props = defineProps<{
  isMoreData: boolean
  isLoading: boolean
  onIntersect: Function
}>()
</script>

<template>
  <div v-if="props.isMoreData" v-intersect="props.onIntersect" />
  <div class="d-flex justify-center py-2">
    <v-progress-circular v-if="props.isLoading" indeterminate color="primary" />
  </div>
</template>
