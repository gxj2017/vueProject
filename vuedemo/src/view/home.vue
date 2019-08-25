<template>
    <div>
        首页
    </div>
</template>

<script>
import Api from "../apis/api"
export default {
    data(){
        return {
            title:[]
        }
    },
    created() {
        Api.getHomeData(data =>{
            console.log(data)
        })
    },
}
</script>

<style scoped>

</style>
