<template>
    <div>
        <h1>MovieView</h1>
        <button @click="test">adaf</button>
        <MovieCard/>
    </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue';
export default {
    name:'MovieView',
    data(){
        return {


        }
    },
    components:{
        MovieCard,
    },
    methods: {
        test(){
            this.$store.dispatch('getTopMovies')
        }
        


    },
}
</script>

<style>

</style>