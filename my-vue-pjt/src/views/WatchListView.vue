<template>
    <div>
        <h1>WatchListView</h1>
        <WatchListForm/>
        <WatchListItem/>
    </div>
</template>

<script>
import WatchListForm from '@/components/WatchListForm.vue';
import WatchListItem from '@/components/WatchListItem.vue';
export default {
    name:'WatchListView',
    components:{
        WatchListForm,
        WatchListItem,
    }
}
</script>

<style>

</style>