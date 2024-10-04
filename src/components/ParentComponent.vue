<script>
import ChildComponent from './ChildComponent.vue'

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      textoRecibido: ''
    }
  },
  methods: {
    handleText(texto) {
      this.textoRecibido = texto
    }
  }
}
</script>

<template>
  <div>
    <h3>Texto recibido: {{ textoRecibido }}</h3>
    <ChildComponent @enviar-texto="handleText" />
  </div>
</template>
