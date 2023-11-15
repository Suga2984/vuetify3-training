<script setup lang="ts">
import { useScrollTestStore } from '@/stores/scrollTest'
import { computed } from 'vue'

const scrollTestStore = useScrollTestStore()

const isLoading = computed(() => scrollTestStore.isLoading)
const isMoreData = computed(() => scrollTestStore.isMoreData)
const todoList = computed(() => scrollTestStore.todoList)

async function onIntersect(isIntersecting: boolean) {
  await scrollTestStore.fetchToDoList(isIntersecting)
}
</script>

<template>
  <div class="d-flex flex-column flex-grow-1">
    <div class="d-flex align-center py-10">
      <div class="d-flex justify-center flex-grow-1">ID</div>
      <div class="d-flex justify-center flex-grow-1">TODO</div>
    </div>
    <v-divider />
    <div class="d-flex flex-grow-1">
      <!-- TODO: 初回ローディング -->
      <v-progress-linear v-if="false" indeterminate color="cyan" />
      <template v-else>
        <!-- TODO: molecules -->
        <template v-if="todoList.length === 0">
          <div class="relative-container">
            <div class="absolute-container d-flex justify-center">
              <span>該当するデータはありません。</span>
            </div>
          </div>
        </template>
        <div v-else class="d-flex flex-grow-1">
          <div class="relative-container scroll-y">
            <div class="absolute-container">
              <div v-for="(item, index) in todoList" :key="index">
                <!-- TODO: molecules -->
                <div class="d-flex flex-row" style="height: 600px">
                  <!-- TODO: molecules -->
                  <div class="d-flex justify-center flex-grow-1">
                    {{ item.id }}
                  </div>
                  <!-- TODO: molecules -->
                  <div class="d-flex justify-center flex-grow-1">
                    {{ item.todo }}
                  </div>
                </div>
                <v-divider />
              </div>
              <div v-if="isMoreData" v-intersect="onIntersect" />
              <div class="d-flex justify-center py-2">
                <v-progress-circular
                  v-if="isLoading"
                  indeterminate
                  color="primary"
                />
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
