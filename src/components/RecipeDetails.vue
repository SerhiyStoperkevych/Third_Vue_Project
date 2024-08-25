<template>
    <div>
      <h2>{{ recipe.title }}</h2>
      <img :src="recipe.image" alt="Recipe Image" />
      <p>Category: {{ recipe.category }}</p>
      <p>Ingredients: {{ recipe.ingredients }}</p>
      <p>Steps: {{ recipe.steps }}</p>
      <button @click="deleteRecipe">Delete Recipe</button>
      <router-link to="/">Back to Home</router-link>
    </div>
  </template>
  
  <script>
  import { mapState, mapMutations } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['recipes']),
      recipe() {
        const id = this.$route.params.id;
        return this.recipes.find(recipe => recipe.id === id);
      },
    },
    methods: {
      ...mapMutations(['deleteRecipe']),
      deleteRecipe() {
        this.deleteRecipe(this.recipe.id);
        this.$router.push('/');
      },
    },
  };
  </script>
  