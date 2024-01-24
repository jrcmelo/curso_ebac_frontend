<script setup>
import { reactive } from 'vue';

const nome = "Jay"

// let contador = 0
const estado = reactive({
  contador: 0,
})

function incrementar() {
  estado.contador++;
}
function decrementar() {
  estado.contador--;
}

</script>

<template>
  <h1>{{ nome }}</h1>
  <br />
  <hr />

  {{ estado.contador }}

  <button @click="incrementar">+</button>
  <button @click="decrementar">+</button>
</template>

<style scoped>
</style>
