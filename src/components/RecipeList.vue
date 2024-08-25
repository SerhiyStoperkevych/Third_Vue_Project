<template>
    <div>
      <div v-for="recipe in filteredRecipes" :key="recipe.id">
        <h2>{{ recipe.title }}</h2>
        <p>{{ recipe.category }}</p>
        <router-link :to="'/recipe/' + recipe.id">View Details</router-link>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    props: ['searchQuery'],
    computed: {
      ...mapState(['recipes']),
      filteredRecipes() {
        return this.recipes.filter(recipe =>
          recipe.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
  };
  </script>
  