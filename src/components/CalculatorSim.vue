<template>
    <div class="calculator">
      <div class="display">{{ displayValue }}</div>
      <div class="buttons">
        <button @click="clear">C</button>
        <button @click="append('7')">7</button>
        <button @click="append('8')">8</button>
        <button @click="append('9')">9</button>
        <button @click="append('/')">/</button>
  
        <button @click="append('4')">4</button>
        <button @click="append('5')">5</button>
        <button @click="append('6')">6</button>
        <button @click="append('*')">*</button>
  
        <button @click="append('1')">1</button>
        <button @click="append('2')">2</button>
        <button @click="append('3')">3</button>
        <button @click="append('-')">-</button>
  
        <button @click="append('0')">0</button>
        <button @click="append('.')">.</button>
        <button @click="calculate">=</button>
        <button @click="append('+')">+</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        displayValue: '',
        currentOperation: null,
        previousValue: null,
      };
    },
    methods: {
      append(value) {
        this.displayValue += value;
      },
      clear() {
        this.displayValue = '';
        this.currentOperation = null;
        this.previousValue = null;
      },
      calculate() {
        try {
          this.displayValue = eval(this.displayValue).toString();
        } catch {
          this.displayValue = 'Error';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .calculator {
    width: 200px;
    margin: auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
  }
  
  .display {
    background: #f5f5f5;
    padding: 10px;
    text-align: right;
    border-radius: 5px;
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
  
  button {
    padding: 20px;
    font-size: 18px;
    cursor: pointer;
    border: 1px solid #ddd;
    border-radius: 5px;
    background: #f0f0f0;
  }
  
  button:hover {
    background: #e0e0e0;
  }
  </style>
  