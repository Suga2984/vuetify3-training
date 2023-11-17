<script setup lang="ts">
import NoItemMessage from '@/components/molecules/NoItemMessage.vue'
import { useScrollTestStore } from '@/stores/scrollTest'
import { computed } from 'vue'
import IdCell from './ListItem/IdCell.vue'
import TodoCell from './ListItem/TodoCell.vue'
import LoadingIntersection from '@/components/molecules/LoadingIntersection.vue'

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
        <template v-if="todoList.length === 0">
          <no-item-message />
        </template>
        <div v-else class="d-flex flex-grow-1">
          <div class="relative-container scroll-y">
            <div class="absolute-container">
              <div v-for="(item, index) in todoList" :key="index">
                <div class="d-flex flex-row" style="height: 600px">
                  <id-cell :id="item.id"></id-cell>
                  <todo-cell :todo="item.todo"></todo-cell>
                </div>
                <v-divider />
              </div>
              <loading-intersection
                :is-more-data="isMoreData"
                :is-loading="isLoading"
                :on-intersect="onIntersect"
              />
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
