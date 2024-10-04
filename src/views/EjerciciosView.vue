<script>
import { useCounterStore } from '@/stores/counter'
import { mapStores } from 'pinia'
import ParentComponent from '@/components/ParentComponent.vue'

export default {
  computed: {
    ...mapStores(useCounterStore)
  },
  methods: {
    aumentarContador() {
      this.counterStore.sumarUno()
    },
    disminuirContador() {
      this.counterStore.restarUno()
    }
  },
  components: {
    ParentComponent
  }
}
</script>

<template>
  <div>
    <h2>Counter</h2>
    <div
      :style="{
        marginBottom: '1rem'
      }"
    >
      <p>Valor actual del contador: {{ counterStore.counter }}</p>
      <button @click="aumentarContador">Aumentar contador</button>
      <button @click="disminuirContador">Disminuir contador</button>
    </div>
    <hr />
    <div
      :style="{
        marginTop: '0.5rem'
      }"
    >
      <h2>Parent & Child</h2>
      <ParentComponent />
    </div>
  </div>
</template>
