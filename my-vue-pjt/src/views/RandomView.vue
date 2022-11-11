<template>
    <div>
        <button @click="getRandomMovie">PICK ME PICK ME PICK ME UP</button>
        <div class="d-grid gap-4 col-4 mx-auto">
            <div v-if="movie" class="card" style="width: 100%;">
                <img :src="`https://image.tmdb.org/t/p/original/${ movie.poster_path }`" class="card-img-top" alt="PICK A MOVIE">
            <div class="card-body">
                <h4 class="card-title fw-bold">{{ movie.title }}</h4>
            </div>
      </div>          
    </div>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    name:'RandomView',
    data(){
    return {
      movie: "",
    }
    },
    methods: {
        getRandomMovie() {
        this.movie = _.sample(this.$store.state.topRanked)
        }
    }
}
</script>

<style>
</style>