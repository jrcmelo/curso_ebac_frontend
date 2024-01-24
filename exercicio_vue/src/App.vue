<template>
  <div id="app">
    <!-- Calculadora -->
    <div class="calculator">
      <!-- Campo de entrada para o primeiro número -->
      <input v-model="numero1" type="text" class="input-field" />

      <!-- Dropdown para escolher a operação -->
      <select v-model="operacao" class="operation-select">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>

      <!-- Campo de entrada para o segundo número -->
      <input v-model="numero2" type="text" class="input-field" />

      <!-- Resultado da operação -->
      <div class="result" style="font-size: 150%">Resultado: {{ resultado }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Números de entrada
      numero1: "0",
      numero2: "0",

      // Operação selecionada
      operacao: "+",

      // Resultado da operação
      resultado: 0,
    };
  },
  methods: {
    // Calcula o resultado da operação
    calcularResultado() {
      // Converte os números de string para float
      const num1 = parseFloat(this.numero1);
      const num2 = parseFloat(this.numero2);

      // Verifica se os valores são números válidos
      if (!isNaN(num1) && !isNaN(num2)) {
        // Realiza a operação com base na escolha
        switch (this.operacao) {
          case "+":
            this.resultado = num1 + num2;
            break;
          case "-":
            this.resultado = num1 - num2;
            break;
          case "*":
            this.resultado = num1 * num2;
            break;
          case "/":
            this.resultado = num1 / num2;
            break;
          default:
            this.resultado = 0;
        }
      } else {
        // Exibe "Erro" caso os valores não sejam números válidos
        this.resultado = "Erro";
      }
    },
  },
  watch: {
    // Observadores
    numero1: "calcularResultado",
    numero2: "calcularResultado",
    operacao: "calcularResultado",
  },
};
</script>

<style>
body {
  margin: 0;
  overflow-x: hidden;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}

.calculator {
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-field,
.operation-select {
  width: calc(100% - 20px);
  padding: 10px;
  margin: 10px 0;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.result {
  font-size: 24px;
  margin-top: 20px;
}
</style>