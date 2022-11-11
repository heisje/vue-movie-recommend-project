<template>
  <div id="app">
  <nav>
    <router-link :to="{ name: 'watchlist' }">WatchList</router-link>
    <router-link :to="{ name: 'random' }">Random</router-link>
    <router-link :to="{ name: 'movie' }">Movie</router-link>
  </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: black;
}

nav a {
  font-weight: bold;
  color: #ecf2f8;
  text-decoration: none;
  margin-inline: 1rem;
  float: right;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
