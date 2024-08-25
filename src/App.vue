<template>
  <div id="app">
    <header>
      <h1>Recipe Book</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/add-recipe">Add Recipe</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<style>
header {
  padding: 20px;
  background-color: #4caf50;
  color: white;
  text-align: center;
}

nav {
  margin-top: 10px;
}

nav a {
  margin: 0 10px;
  color: white;
  text-decoration: none;
}
</style>
