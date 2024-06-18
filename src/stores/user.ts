import { defineStore } from 'pinia'
import { ref } from 'vue'

const defaultUserName = 'user-name'
const key = 'user'

export const useUserStore = defineStore('user', () => {
  const userName = ref(defaultUserName)

  const setUserName = (newUserName: string) => {
    localStorage.setItem(key, newUserName)
    userName.value = newUserName
  }

  return {
    setUserName,
    userName
  }
})
