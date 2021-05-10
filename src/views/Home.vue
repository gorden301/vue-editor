<template>
  <el-container>
    <el-container>
      <el-header><nav-header></nav-header></el-header>
      <el-container>
        <el-aside width="280px">
          <nav-left></nav-left>
        </el-aside>
        <el-main>
          <nav-main></nav-main>
          <!-- <preview-dialog></preview-dialog> -->
        </el-main>
      </el-container>
    </el-container>
    <el-aside width="360px">
      <nav-right></nav-right>
    </el-aside>
  </el-container>
</template>

<script lang='ts' setup>
import NavHeader from '../components/navHeader/NavHeader.vue'
import NavLeft from '../components/navLeft/NavLeft.vue'
import NavMain from '../components/navMain/NavMain.vue'
import NavRight from '../components/navRight/NavRight.vue'

</script>

<style lang='scss' scoped>
.el-header {
  padding: 0;
}
.el-aside {
  overflow-x: hidden;
}
</style>