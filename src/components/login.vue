<template>
    <div class="login_container">
    <!-- 登录界面 -->
        <div class="login_box">
            <!-- logo盒子 -->
            <div class="logo">
                <img src="../assets/photos/logo.jpg" alt="">
            </div>
            <!-- 表单区域 -->
            <el-form  ref="loginform_ref" class="login_form" :model="loginform"  :rules="loginform_rules">
                <!-- 用户名 -->
                <el-form-item label="" prop="username" >
                    <el-input  type="text" prefix-icon="iconfont icon-zhanghao" v-model="loginform.username"></el-input>
                </el-form-item>
                <!-- 用户密码 -->
                <el-form-item label="" prop="password">
                    <el-input type="password" prefix-icon="iconfont icon-mima" v-model="loginform.password"></el-input>
                </el-form-item>
                <!-- 登录，重置按钮 -->
                <el-form-item label="" class="btn">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetloginform">重置</el-button>
                    
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            //表单输入框数据绑定对象
            loginform: {
                username:'admin',
                password:'123456'
            },
            //表单验证规则对象
            loginform_rules: {
                username:
                [{required: true, message: '请输入账号', trigger: 'blur'},
                {min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur'}
                ],
                password:
                [{required: true, message: '请输入密码', trigger: 'blur'},
                {min:6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur'}]
            }
        }
    },
    methods:{
        //点击登录对表单的预验证
        login(){
            this.$refs.loginform_ref.validate(async valid =>{
                if(!valid) return;
               const {data:res} = await this.$http.post("login",this.loginform);
                if(res.meta.status!==200)  return this.$message.error('账号或密码错误');
               this.$message.success('登陆成功');
               console.log(res);
            //    将token保存在sessionStorage中
               window.sessionStorage.setItem('token',res.data.token);
            //    登陆后通过路由跳转到home组件页面
               this.$router.push('/home');
              
            })
        },
        //点击重置表单
        resetloginform(){
            this.$refs.loginform_ref.resetFields();
        }

    }   
    
    }
    
</script>
<style scoped>

    .login_container{   
        width: 100%;    
        height: 100%;
        
    }
    
    .logo{
        position: absolute;
        top:-65px ;
        left:250px ;
        transform: translateX(-50%);
        width: 130px;
        height: 130px;
        border: 2px solid skyblue;
        border-radius:50% ;
        
    }
    img{
        width:100%;
        height: 100%;
        border-radius:50% ;
        background: #eee;
    }
    .login_box{
        
        width: 500px;
        height: 300px;
        background-color: skyblue;
        position: relative;
        left:50% ;
        top: 50%;
        transform: translate(-50%,-50%);
        
        border-radius: 20px;
    }
    .login_form{
        width: 400px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
 
    }
    .btn{
        display: flex;
        justify-content: flex-end;
    }
    
</style>