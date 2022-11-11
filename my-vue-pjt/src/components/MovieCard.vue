<template>
  <div>
    <h1>MovieCard</h1>
    {{ movieData }}
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