import { createStore } from 'vuex';

export default createStore({
  state: {
    recipes: [],
  },
  mutations: {
    addRecipe(state, recipe) {
      state.recipes.push(recipe);
    },
    deleteRecipe(state, id) {
      state.recipes = state.recipes.filter(recipe => recipe.id !== id);
    },
    updateRecipe(state, updatedRecipe) {
      const index = state.recipes.findIndex(recipe => recipe.id === updatedRecipe.id);
      if (index !== -1) {
        state.recipes.splice(index, 1, updatedRecipe);
      }
    },
  },
});
