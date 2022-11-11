<template>
    <div>
        <button @click="getRandomMovie">PICK ME PICK ME PICK ME UP</button>
        <h1>RandomView</h1>
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
        console.log(this.$store.state.topRanked)
        this.movie = _.sample(this.$store.state.topRanked)
        console.log(this.movie)
        console.log(1)

        }
    }
}
</script>

<style>

</style>