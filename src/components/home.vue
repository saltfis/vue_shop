<template>
  <el-container class="container_box">
    <!-- 头部区域 -->
    <el-header height="40px">
      <!-- 头部左区域 -->
      <div class="header_left">
        <img src="../assets/photos/logo.jpg" alt="" />
        <span class="title">电商后台管理系统</span>
      </div>
      <!-- 退出按钮 -->
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 内容区域 -->
    <el-container class="content">
      <!-- 内容之侧栏菜单 -->
      <el-aside width="200px">

      <el-menu
      
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
         <el-menu-item index="1-1">
          <template slot="title">
          <i class="el-icon-location"></i>
          <span>选项1</span>
          </template>
         </el-menu-item>
         
      </el-submenu>
      <el-submenu>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
         <el-menu-item index="1-1">
          <template slot="title">
          <i class="el-icon-location"></i>
          <span>选项1</span>
          </template>
         </el-menu-item>
         
      </el-submenu>
      <el-submenu>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
         <el-menu-item index="1-1">
          <template slot="title">
          <i class="el-icon-location"></i>
          <span>选项1</span>
          </template>
         </el-menu-item>
          <el-menu-item index="1-1">
          <template slot="title">
          <i class="el-icon-location"></i>
          <span>选项2</span>
          </template>
         </el-menu-item>
         
      </el-submenu>
      <el-submenu>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
         <el-menu-item index="1-1">
          <template slot="title">
          <i class="el-icon-location"></i>
          <span>选项1</span>
          </template>
         </el-menu-item>
          <el-menu-item index="1-1">
          <template slot="title">
          <i class="el-icon-location"></i>
          <span>选项2</span>
          </template>
         </el-menu-item>
          <el-menu-item index="1-1">
          <template slot="title">
          <i class="el-icon-location"></i>
          <span>选项3</span>
          </template>
         </el-menu-item>
         
      </el-submenu>
      <el-submenu>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
         <el-menu-item index="1-1">
          <template slot="title">
          <i class="el-icon-location"></i>
          <span>选项1</span>
          </template>
         </el-menu-item>
         
      </el-submenu>
    </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  // 退出功能：基于token方式实现退出功能，只需清除本地token，那么后续请求就不会携带token，需要登录再生成一个token值
  methods:{
    logout(){
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
};
</script>
<style scoped>
.container_box {
  width: 100%;
  height: 100%;
}
/*头部区域*/
.el-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: darkgoldenrod;
}
.header_left {
  display: flex;
  align-items: center;
}
img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.el-aside {
  background: skyblue;
}
.el-main {
  background: coral;
}
</style>
