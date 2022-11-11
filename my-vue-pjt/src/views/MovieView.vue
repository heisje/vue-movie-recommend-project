<template>
    <div>
        <h1>MovieView</h1>
        <MovieCard/>
    </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue';
export default {
    name:'MovieView',
    components:{
        MovieCard,
    }
}
</script>

<style>

</style>