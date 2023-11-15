import type { TodoListDisplay } from '@/types/display/scrollTest'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const useScrollTestStore = defineStore('scrollTest', () => {
  const INITIAL_TODO_LIST: TodoListDisplay[] = [
    {
      id: 1,
      todo: 'todo1'
    },
    {
      id: 2,
      todo: 'todo2'
    },
    {
      id: 3,
      todo: 'todo3'
    }
  ]

  const isLoading: Ref<boolean> = ref(false)
  const isMoreData: Ref<boolean> = ref(true)
  const todoList: Ref<TodoListDisplay[]> = ref(INITIAL_TODO_LIST)

  async function fetchToDoList(isIntersecting: boolean) {
    isLoading.value = true
    try {
      if (!isIntersecting) return
      await new Promise((resolve) => setTimeout(resolve, 3000))
      console.log(new Date())
      console.log(INITIAL_TODO_LIST.length)

      const res: TodoListDisplay[] = [
        {
          id: 1,
          todo: 'todo1'
        },
        {
          id: 2,
          todo: 'todo2'
        },
        {
          id: 3,
          todo: 'todo3'
        }
      ]

      if (res.length === 0) isMoreData.value = false
      todoList.value.push(...res)
    } finally {
      isLoading.value = false
    }
  }

  return { isLoading, isMoreData, todoList, fetchToDoList }
})
