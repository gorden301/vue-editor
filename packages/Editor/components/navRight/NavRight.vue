<template>
  <div class="right h100 attrs__tab">
    <el-tabs v-model="activeName">
      <el-tab-pane label="组件属性" name="component">
        <component-attrs></component-attrs>
      </el-tab-pane>
      <el-tab-pane label="表单属性" name="from">配置管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import componentAttrs from '../componentAttrs/index.vue'

let activeName = ref<string>('component')
</script>


<style lang='scss' scoped>
.right {
  border-left: 1px solid #f1e8e8;
  overflow-x: hidden;
}
</style>