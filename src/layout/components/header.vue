<template>
<el-header>

        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(v,i) in list" :key="i" >
                <router-link :to="v.path">{{v.meta.title}}</router-link>
            </el-breadcrumb-item>
           
            </el-breadcrumb>
            
         <el-button type="primary" @click="layout">退出</el-button>
    </el-header>
</template>

<script>
import {removeitem} from '@/api/gettoken'
import {logout} from '@/api/login'
export default {
name:'',
components: {},
data() {
return {
    list:[]
};
},
computed: {},
created(){
this.getBreadcrumb()
},
watch: {
    $route(to,from){
        this.getBreadcrumb()
    }
},  
methods: {
    getBreadcrumb(){
        this.list = this.$route.matched.filter(item =>item.meta && item.meta.title)
    },
   async layout(){
    const {data} = await logout()
    console.log(data)
    if(data.code == 10001){
        removeitem('token')
    this.$router.push('/login')
    }
}
},
created() {

},
mounted() {

},
}
</script>
<style scoped>

</style>