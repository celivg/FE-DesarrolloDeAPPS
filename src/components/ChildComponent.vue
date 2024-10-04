<script>
export default {
  data() {
    return {
      inputTexto: ''
    }
  },
  methods: {
    enviarTexto() {
      this.$emit('enviar-texto', this.inputTexto)
      this.inputTexto = ''
    }
  }
}
</script>

<template>
  <div>
    <input v-model="inputTexto" placeholder="Escribe algo..." />
    <button @click="enviarTexto">Enviar</button>
  </div>
</template>
