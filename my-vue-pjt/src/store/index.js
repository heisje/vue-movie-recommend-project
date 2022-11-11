import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    topRanked : null,
    bucketMovies : [],
  },
  getters: {
  },
  mutations: {
    getTopMovies(state){
      axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=642cc263c19a3b2f7ab3f2c988a752ab&language=en-US&page=1')
      .then( result=>{
        console.log(result)
        console.log(result.data.results)
        state.topRanked=result.data.results

      }
      
      )
      
    },
    addBucketMovies(state, Title){
      state.bucketMovies.push(Title)
      console.log(state.bucketMovies)
    }
    

  },
  actions: {

  },
  modules: {
  }
})
