<template>
    <div>
      <SearchBar v-model="searchQuery" />
      <RecipeList :searchQuery="searchQuery" />
    </div>
  </template>
  
  <script>
  import RecipeList from '../components/RecipeList.vue';
  import SearchBar from '../components/SearchBar.vue';
  
  export default {
    components: {
      RecipeList,
      SearchBar,
    },
    data() {
      return {
        searchQuery: '',
      };
    },
  };
  </script>
  