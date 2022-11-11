<template>
    <div>
        <p @click="check" :class="{'is-completed': stat}">
          {{movieTitle}}
        </p>
    </div>
  </template>
  
  <script>
  
  export default {
      name:'WatchListItem',
      props:{
        movieTitle:String,

      },
      data(){
        return{
          stat:false
        }

      },
      computed: {
        
        bucketMovieList(){
          return this.$store.state.bucketMovies
        }
        
      },
      methods:{
        check(){

          if (this.stat){
            this.stat=false

            
          }
          else{
            this.stat=true
          }
        }
        

      },

  }
  </script>
  
  <style>
  .is-completed {
    text-decoration: line-through;
    background-color: rgba(131, 136, 143, 0.212);
    color: grey;
  }
</style>