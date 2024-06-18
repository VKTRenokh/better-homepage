// TODO: Implement reactive localStorage

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
