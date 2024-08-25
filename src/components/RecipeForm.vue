<template>
    <form @submit.prevent="submitRecipe">
      <div>
        <label for="title">Title</label>
        <input id="title" v-model="recipe.title" required />
      </div>
      <div>
        <label for="category">Category</label>
        <input id="category" v-model="recipe.category" required />
      </div>
      <div>
        <label for="ingredients">Ingredients</label>
        <textarea id="ingredients" v-model="recipe.ingredients" required></textarea>
      </div>
      <div>
        <label for="steps">Steps</label>
        <textarea id="steps" v-model="recipe.steps" required></textarea>
      </div>
      <div>
        <label for="image">Image URL</label>
        <input id="image" v-model="recipe.image" />
      </div>
      <button type="submit">Save Recipe</button>
    </form>
  </template>
  
  <script>
  import { mapMutations } from 'vuex';
  
  export default {
    data() {
      return {
        recipe: {
          id: Date.now().toString(),
          title: '',
          category: '',
          ingredients: '',
          steps: '',
          image: '',
        },
      };
    },
    methods: {
      ...mapMutations(['addRecipe']),
      submitRecipe() {
        this.addRecipe(this.recipe);
        this.$router.push('/');
      },
    },
  };
  </script>
  