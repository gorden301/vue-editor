<template>
  <div class="left h100">
    <draggable
      v-model="componentList"
      group="people"
      @start="start"
      @end="end"
      item-key="id"
      :sort="false"
      class="content flex a-center f-wrap"
    >
      <template #item="{ element, index }">
        <div
          class="flex a-center j-center item"
          :data-index="index"
          @click="clickItem(element, index)"
        >
          <div class="icon">
            <i :class="element.icon"></i>
          </div>
          <div class="text">
            {{ element.label }}
          </div>
        </div>
      </template>
    </draggable>
    <!-- <render></render> -->
  </div>
</template>

<script lang='ts' setup>
import { Component } from '../../@types/index'
import { componentList } from '../../config/componentList'
import draggable from 'vuedraggable'
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import { computed } from 'vue'
import cloneDeep from 'lodash/cloneDeep'
// import render from '@/views/render/Render.vue'

let store = useStore()

let components = computed(() => store.state.componentList)

// 开始移动的坐标
let startX = ref<number>(0)
// 结束之后的坐标
let endX = ref<number>(0)
// 当前元素下标
let index = ref<number>(-1)

// 点击每一项
let clickItem = (item: Component) => {
  let i = cloneDeep(item)
  components.value.push(i)
  i.config.field = `field${components.value.length + 100}`
  store.commit('setActiveIndex', components.value.length - 1)
  store.commit('setComponentList', components.value)
  store.commit('setCurrentComponent', item)
}
// 开始拖拽元素
let start = (e: any) => {
  index.value = e.originalEvent.target.dataset.index * 1
  startX.value = e.originalEvent.pageX
}
// 结束拖拽元素
let end = (e: any) => {
  endX.value = e.originalEvent.pageX
  // 元素拖拽到编辑区域
  if (
    endX.value - startX.value > 320 - startX.value &&
    endX.value - startX.value < document.body.clientWidth - 640
  ) {
    componentList[index.value].config.field = `field${
      components.value.length + 100
    }`
    // 把当前元素添加进组件列表
    let i = cloneDeep(componentList[index.value])
    components.value.push(i)
    // 设置当前点击的下标
    i.config.field = `field${components.value.length + 100}`
    store.commit('setActiveIndex', components.value.length - 1)
    store.commit('setComponentList', components.value)

    store.commit('setCurrentComponent', componentList[index.value])
  }
}
</script>

<style lang='scss' scoped>
.left {
  border-right: 1px solid #f1e8e8;
  .content {
    padding: 20px;
    .item {
      padding: 8px 10px;
      background: #f6f7ff;
      font-size: 12px;
      cursor: move;
      border: 1px dashed #f6f7ff;
      border-radius: 3px;
      width: 36%;
      margin: 3% 2%;
      .icon {
        margin-right: 5px;
      }
    }
  }
}
.components-item {
  display: inline-block;
  width: 48%;
  margin: 1%;
  transition: transform 0ms !important;
}
.dragClass {
  cursor: move !important;
}
.title {
  margin: 10px 0 0px 20px;
  font-size: 14px;
}
</style>