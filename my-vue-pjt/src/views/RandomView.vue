<template>
    <div>
        <div class="d-grid gap-4 col-4 mx-auto">
            <button class="btn btn-outline-secondary" @click="getRandomMovie">PICK</button>
            <div v-if="movie" style="width: 100%;">
                <img :src="`https://image.tmdb.org/t/p/original/${ movie.poster_path }`" style="width: 100%;" alt="PICK A MOVIE">
                <h4 style="margin:1rem;">{{ movie.title }}</h4>
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
            console.log(this.movie)
            this.movie = _.sample(this.$store.state.topRanked)
        }
    }
}
</script>

<style>
.btn {
  margin-top: 1rem;  
}
</style>