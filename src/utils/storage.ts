// TODO: Implement reactive localStorage

import { customRef } from 'vue'

//import { type Ref, isRef, watch } from 'vue'
//
//const set = (key: string) => (value: unknown) => localStorage.setItem(key, JSON.stringify(value))
//
//export const storage = (key: string, initial?: Record<string, unknown>) => {
//  return {
//    get: () => localStorage.getItem(key),
//    set: <T>(value: string | Ref<T>) => {
//      const setter = set(key)
//
//      if (isRef(value)) {
//        watch(value, setter)
//        return
//      }
//
//      setter(value)
//    }
//  }
//}
//
//export const get: {
//  (key: string, defaultValue: string): string
//  (key: string, defaultValue?: undefined): string | undefined
//} = (key: string, defaultValue?: string) => localStorage.getItem(key) ?? defaultValue
const setIfNotExists = (key: string, value: string) => {
  const item = localStorage.getItem(key)

  if (item) {
    return
  }

  localStorage.setItem(key, value)
}

const getOrElse = (key: string, defaultValue: string) => {
  const value = localStorage.getItem(key)

  return value ? value : defaultValue
}

export const useStorageRef = (key: string, defaultValue: string) => {
  setIfNotExists(key, defaultValue)

  return customRef((track, trigger) => ({
    get: () => {
      track()

      return getOrElse(key, defaultValue)
    },
    set: (newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue))
      trigger()
    }
  }))
}
