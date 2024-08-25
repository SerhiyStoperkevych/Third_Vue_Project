import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import AddRecipe from '../views/AddRecipe.vue';
import RecipeDetails from '../components/RecipeDetails.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/add-recipe', component: AddRecipe },
  { path: '/recipe/:id', component: RecipeDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
