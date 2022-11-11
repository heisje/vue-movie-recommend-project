<template>
    <div>
        <h1>MovieView</h1>
        <button @click="test">adaf</button>
        {{  }}
        <article v-for="(value, index) in topRanked" :key="index">
            <MovieCard :movie-data="value"/>
        </article>
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
            this.$store.commit('getTopMovies')
        }
    },
    computed:{
        topRanked(){
            return this.$store.state.topRanked
        }
    }
}
</script>

<style>

</style>