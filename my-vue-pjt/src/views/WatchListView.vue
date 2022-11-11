<template>
    <div>
        <h1>Bogo Chiffon Movie</h1>
        <input type="text">
        <input type="submit" value="Add">

        <WatchListForm/>
        <WatchListItem/>
    </div>
</template>

<script>
import WatchListForm from '@/components/WatchListForm.vue';
import WatchListItem from '@/components/WatchListItem.vue';
export default {
    name:'WatchListView',
    data(){
        return{
            title: null,
        }
        
    },
    computed: {

    },
    components:{
        WatchListForm,
        WatchListItem,
    },
    methods:{
        addMovie(){


        },
    }
}
</script>

<style>

</style>