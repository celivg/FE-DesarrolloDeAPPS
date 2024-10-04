import { useCounterStore } from './counter'
import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'

describe('Counter store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Verificar que recibe valor inicial', () => {
    const counterStore = useCounterStore()
    expect(counterStore.counter).toBe(0)
  })

  it('Verificar que puede aumentar y disminuir el contador', () => {
    const counterStore = useCounterStore()

    counterStore.sumarUno()
    expect(counterStore.counter).toBe(1)

    counterStore.restarUno()
    expect(counterStore.counter).toBe(0)
  })
})
