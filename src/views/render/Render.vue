<template>
  <div>
    <!-- <el-button type="primary">生成代码</el-button> -->
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { Component } from '@/types'

let store = useStore()
let componentList = computed(() => store.state.componentList)
let formStr = ref<string>('')
let fornItemStr = ref<string>('')

watch(
  () => componentList.value,
  (val) => {
    if (val && val.length > 0) {
      val.map((item: Component) => {
        fornItemStr.value += `
        <el-form-item :required=${item.config.required}>
         <el-${item.type} 
          ${item.config.disabled ? `:disabled=${item.config.disabled}` : ''}
          ${item.config.readonly ? `:readonly=${item.config.readonly}` : ''}
          >
          </el-${item.type}>
        </el-form-item>
      `
      })
    }
    // console.log(fornItemStr.value)
  },
  { deep: true }
)
</script>

<style scoped lang='scss'>
</style>