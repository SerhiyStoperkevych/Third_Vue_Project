<template>
    <div>
      <h2>Add a New Recipe</h2>
      <RecipeForm />
    </div>
  </template>
  
  <script>
  import RecipeForm from '../components/RecipeForm.vue';
  
  export default {
    components: {
      RecipeForm,
    },
  };
  </script>
  