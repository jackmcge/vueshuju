<template>
<div class=''>
   <h1>登录页</h1>
 <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="名称" prop="account">
    <el-input v-model="ruleForm.account"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
  <el-input v-model="ruleForm.password" type="password"> </el-input>
  </el-form-item>
  

    <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
  </el-form-item>


  </el-form>
  <el-alert
    title="错误提示的文案"
    type="error"
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    show-icon
    closable
        v-if="flag">
  </el-alert>
</div>
</template>

<script>
import {login} from '@/api/login'
import {setitem} from '@/api/gettoken'
export default {
name:'',
components: {},
data() {
return {
 ruleForm: {
          account: '',
          password: '',
        },
        rules: {
          account: [
            { required: true, message: '请输入名称', trigger: 'blur' },
            { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
          ],
            password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
          ],
},
flag:false
}
},
computed: {},
watch: {},
mounted(){

},
methods: {
 async logininit(){
        const {data} = await login(this.ruleForm)
        console.log(data)
        if(data.code == 20000){
         setitem('token',data.data.token)
          this.$router.push('/home')
        }else{
          this.flag = true;
          setInterval(()=>{
             this.flag =false 
          },2000)
        }
  },
  submitForm(formName) {
         this.$refs[formName].validate((valid) => {
          if (valid) {
            this.logininit()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
},
created() {

},
mounted() {

},
}
</script>
<style scoped lang="scss">

</style>