<template>
    <input v-model="searchQuery" placeholder="Search for recipes..." />
  </template>
  
  <script>
  export default {
    props: ['value'],
    computed: {
      searchQuery: {
        get() {
          return this.value;
        },
        set(value) {
          this.$emit('input', value);
        },
      },
    },
  };
  </script>
  