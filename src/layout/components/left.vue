<template>
<el-aside width="200px">
       <el-menu
      default-active="2"
      class="el-menu-vertical-demo" router> 
          <el-menu-item index="/index">
            <i class="el-icon-setting"></i>
            <span slot="title">首页</span>
          </el-menu-item>

          <el-menu-item index="/loan-input">
            <i class="el-icon-setting"></i>
            <span slot="title">贷款申请</span>
          </el-menu-item>

          <el-menu-item index="/input-manager">
            <i class="el-icon-setting"></i>
            <span slot="title">申请管理</span>
          </el-menu-item>

            <el-submenu index="/shenpi">
          <template slot="title">贷款审批</template>
          <el-menu-item index="/shenpi/first">初审</el-menu-item>
          <el-menu-item index="/shenpi/end">终审</el-menu-item>
        </el-submenu>



           <el-menu-item index="/biaoli">
            <i class="el-icon-setting"></i>
            <span slot="title">标的管理</span>
          </el-menu-item>

           <el-menu-item index="/quanli">
            <i class="el-icon-setting"></i>
            <span slot="title">权限管理</span>
          </el-menu-item>
      </el-menu>
  </el-aside>
</template>

<script>

export default {
name:'',
components: {},
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

</style>