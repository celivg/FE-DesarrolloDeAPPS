import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const counter = ref(0)

  function sumarUno() {
    counter.value += 1
  }

  function restarUno() {
    counter.value -= 1
  }

  return {
    counter,
    sumarUno,
    restarUno
  }
})
