<template>
    <div>
        <h1>Bogo Chiffon Movie</h1>
        <input type="text"  v-model="inputTitle" @keyup.enter="addMovie">
        <input type="submit" value="Add" @click="addMovie">

        <WatchListForm/>
        <WatchListItem v-for="(movie,index) in bucketMovieList"
        v-bind:key="index"
        :movie-title='movie'/>
    </div>
</template>

<script>
import WatchListForm from '@/components/WatchListForm.vue';
import WatchListItem from '@/components/WatchListItem.vue';
export default {
    name:'WatchListView',
    data(){
        return{
            inputTitle:null,
       
        }
        
    },
    computed: {

        bucketMovieList(){
            return this.$store.state.bucketMovies
        }
    
    },
    components:{
        WatchListForm,
        WatchListItem,
    },
    methods:{
        addMovie(){
            if (this.inputTitle){

                this.$store.commit('addBucketMovies',this.inputTitle)
                this.inputTitle=null
            }


        },
    }
}
</script>

<style>

</style>