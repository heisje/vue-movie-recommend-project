<template>
  <div class="card">
    <img :src="`https://image.tmdb.org/t/p/original/${ movieData.poster_path }`" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ movieData.title }}</h5>
      <p class="card-text">{{ movieData.vote_average }}</p>
    </div>
  </div>
</template>

<script>
export default {
    name:'MovieCard',
    props:{
        movieData:Object,
    }
}
</script>

<style>

</style>