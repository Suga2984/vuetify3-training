<script setup lang="ts">
import { ref, type Ref } from 'vue'

// FIXME データきもすぎ
const items: Ref<string[]> = ref([
  'a',
  'b',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
])

const isLoading: Ref<boolean> = ref(false)
const isMoreData: Ref<boolean> = ref(true)

function onIntersect(
  _entries: IntersectionObserverEntry[],
  _observer: IntersectionObserver,
  isIntersecting: boolean
) {
  try {
    if (!isIntersecting) return
    isLoading.value = true
    items.value.push(...['c', 'd'])
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="d-flex flex-column flex-grow-1">
    <!-- FIXME スクロール位置固定 -->
    <div v-for="(item, index) in items" :key="index">
      <div class="py-10">{{ item }}</div>
    </div>
  </div>
  <v-progress-circular v-if="isLoading" indeterminate />
  <div v-else-if="isMoreData" v-intersect="onIntersect">続きを読み込む</div>
</template>
