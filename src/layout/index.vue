<template>
<!-- 左侧 -->
<el-container>
  <Left/>
  <!-- //头部 -->
  <el-container>
<Header/>
<!-- 主体 -->
<Main/>
  </el-container>
</el-container>
</template>

<script>
import { Header,Main,Left} from './components'
export default {
name:'',
components: {
  Header,
  Main,
  Left

},
data() {
return {

};
},
computed: {},
watch: {},
methods: {

},
created() {

},
mounted() {

},
}
</script>
<style scoped>
body{
    padding: 0;
    margin: 0;
}

 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;

  }
  
  .el-aside {
    background-color: #1277eb;
    color: #333;
    text-align: center;
    line-height: 200px;
  
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>