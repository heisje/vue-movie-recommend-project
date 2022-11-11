<template>
    <div>
        <h1>MovieView</h1>
        <div class="row row-cols-1 row-cols-md-4
         g-4">
            <article v-for="(value, index) in topRanked" :key="index">
                <MovieCard :movie-data="value" class="col"/>
            </article>
        </div>

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