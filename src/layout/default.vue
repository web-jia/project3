<template>
<div class="default">
  <el-container>
    <el-header>
        <m-header />
    </el-header>
    <el-container>
      <el-aside width="200px">
          <left-menu />
      </el-aside>
      <el-main>
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
  </div>
</template>
<script>
import MHeader from '@/components/header/nav.vue'
import LeftMenu from '@/components/Menu/leftmenu.vue'

export default {
    components:{
        MHeader,
        LeftMenu,
    }
};
</script>
<style scoped>
.el-container {
  height: 100%;
}
.el-header {
  background-color: #20a0ff;
  color: #333;
  line-height: 60px;
}
.el-aside {
  display: block;
  position: absolute;
  left: 0;
  top: 63px;
  bottom: 0;
  overflow-y: hidden;
}
.el-main{
    display: block;
    position: absolute;
    left: 200px;
    top: 63px;
    bottom: 0;
}
</style>