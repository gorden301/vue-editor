<template>
  <el-scrollbar>
    <el-form v-if="componentList && componentList.length">
      <draggable v-model="componentList" group="people" item-key="id">
        <template #item="{ element: item, index }">
          <el-row>
            <el-col :span="item.properties.col.value" class="p-r col">
              <div class="btn p-a">
                <el-tooltip content="复制" placement="top" effect="light">
                  <el-button
                    type="primary"
                    size="mini"
                    circle
                    icon="el-icon-copy-document"
                    @click="copy(item)"
                  ></el-button>
                </el-tooltip>
                <el-tooltip content="删除" placement="top" effect="light">
                  <el-button
                    type="danger"
                    size="mini"
                    circle
                    icon="el-icon-delete"
                    @click="del(item, index)"
                  ></el-button>
                </el-tooltip>
              </div>
              <el-form-item
                class="item"
                :class="{ active: activeIndex === index }"
                :label="item.properties.hideLabel.value ? '' : item.properties.label.value"
                :label-width="
                  item.config.showLabel ? `${item.config.labelWidth}px` : ''
                "
                :required="item.properties.required.value"
                @click="clickItem(item, index)"
              >
                <template
                  v-if="!item.config.children || !item.config.children.length"
                >
                  <component
                    v-if="
                      item.type !== 'color-picker' &&
                      item.type !== 'time-picker' &&
                      item.type !== 'date-picker'
                    "
                    :is="`el-${item.type}`"
                    v-model="item.properties.defaultValue.value"
                    v-bind="item.attrs"
                    :style="{
                      ...item.style,
                      width: item.properties.componentWidth.value,
                    }"
                  >
                    <template #append v-if="item.properties.append && item.properties.append.value">
                      {{ item.properties.append.value }}
                    </template>
                    <template #prepend v-if="item.properties.prepend && item.properties.prepend.value">
                      {{ item.properties.prepend.value }}
                    </template>
                    {{ item.config.text }}
                  </component>
                  <component
                    v-if="item.type === 'color-picker'"
                    :is="`el-${item.type}`"
                    v-model="item.config.value"
                    :color-format="item.config.colorFormat"
                    :size="item.config.size"
                    :style="{
                      ...item.style,
                      width: !item.config.componentWidth.includes('%')
                        ? `${item.config.componentWidth}px`
                        : `${item.config.componentWidth}%`,
                    }"
                    @change="onChange(item)"
                  >
                  </component>
                  <component
                    v-if="item.type === 'date-picker' && !item.config.isRange"
                    :is="`el-${item.type}`"
                    v-model="item.config.value"
                    :format="item.config.format"
                    :disabled="item.config.disabled"
                    :readonly="item.config.readonly"
                    :type="item.config.type"
                    :style="{
                      ...item.style,
                      width: !item.config.componentWidth.includes('%')
                        ? `${item.config.componentWidth}px`
                        : `${item.config.componentWidth}%`,
                    }"
                    @change="onChange(item)"
                  >
                  </component>
                  <component
                    v-if="item.type === 'date-picker' && item.config.isRange"
                    :is="`el-${item.type}`"
                    v-model="item.config.value"
                    :format="item.config.format"
                    :disabled="item.config.disabled"
                    :readonly="item.config.readonly"
                    :type="item.config.type"
                    :rangeSeparator="item.config.rangeSeparator"
                    :start-placeholder="item.config.startPlaceholder"
                    :end-placeholder="item.config.endPlaceholder"
                    :style="{
                      ...item.style,
                      width: !item.config.componentWidth.includes('%')
                        ? `${item.config.componentWidth}px`
                        : `${item.config.componentWidth}%`,
                    }"
                  >
                  </component>
                  <component
                    v-if="item.type === 'time-picker' && !item.config.isRange"
                    :is="`el-${item.type}`"
                    v-model="item.config.value"
                    :format="item.config.format"
                    :disabled="item.config.disabled"
                    :readonly="item.config.readonly"
                    :style="{
                      ...item.style,
                      width: !item.config.componentWidth.includes('%')
                        ? `${item.config.componentWidth}px`
                        : `${item.config.componentWidth}%`,
                    }"
                  >
                  </component>
                  <component
                    v-if="item.type === 'time-picker' && item.config.isRange"
                    :is="`el-${item.type}`"
                    v-model="item.config.value"
                    :format="item.config.format"
                    :disabled="item.config.disabled"
                    :readonly="item.config.readonly"
                    :is-range="item.config.isRange"
                    :rangeSeparator="item.config.rangeSeparator"
                    :start-placeholder="item.config.startPlaceholder"
                    :end-placeholder="item.config.endPlaceholder"
                    :style="{
                      ...item.style,
                      width: !item.config.componentWidth.includes('%')
                        ? `${item.config.componentWidth}px`
                        : `${item.config.componentWidth}%`,
                    }"
                  >
                  </component>
                  <template v-if="item.type === 'editor'">
                    <div id="editor"></div>
                  </template>
                </template>
                <template
                  v-if="item.properties.defaultValue.options && item.properties.defaultValue.options.length"
                >
                  <component
                    :is="`el-${item.type}`"
                    v-model="item.properties.defaultValue.value"
                    v-bind="item.attrs"
                    :style="{
                      ...item.style,
                      width: !item.config.componentWidth.includes('%')
                        ? `${item.config.componentWidth}px`
                        : `${item.config.componentWidth}`,
                    }"
                  >
                    <template
                      v-for="(child, i) in item.properties.defaultValue.options"
                      :key="`${100 + i}`"
                    >
                      <component
                        v-if="child.type === 'option'"
                        :is="`el-${child.type}`"
                        :label="child.label"
                        :value="child.value"
                      ></component>
                      <component
                        v-if="
                          child.type === 'checkbox' || child.type === 'radio'
                        "
                        :is="`el-${child.type}`"
                        :label="child.value"
                        :border="item.properties.border.value"
                        >{{ child.label }}</component
                      >
                    </template>
                  </component>
                </template>
              </el-form-item>
            </el-col>
          </el-row>
        </template>
      </draggable>
    </el-form>
    <div class="info" v-else>从左侧拖入或点选组件进行表单设计</div>
  </el-scrollbar>
</template>

<script lang='ts' setup>
import { useStore } from 'vuex'
import { computed, nextTick, ref, watchEffect } from 'vue'
import { Component } from '../../../../src/@types/index'
import cloneDeep from 'lodash/cloneDeep'
import draggable from 'vuedraggable'
import E from 'wangeditor'

let store = useStore()
let e = ref<boolean>(false)

let componentList = computed({
  get() {
    return store.state.componentList
  },
  set(value) {
    store.commit('setComponentList', value)
  },
})
let activeIndex = computed(() => store.state.activeIndex)

watchEffect(() => {
  componentList.value &&
    ((componentList.value as any) as any).map((item: Component) => {
      // item.attrs = cloneDeep(item.config)
      // delete item.attrs.children
      if (item.type === 'editor' && !e.value) {
        nextTick(() => {
          const editor = new E('#editor')
          editor.create()
          store.commit('setEditor', editor)
          e.value = true
          editor.txt.html(item.config.value)
          editor.config.onchange = function (html: string) {
            item.config.value = html
            store.commit('setComponentList', componentList.value as any)
            store.commit('setCurrentComponent', item)
          }
        })
      }
    })
})

// 点击每一项
let clickItem = (item: Component, index: number) => {
  store.commit('setComponentList', componentList.value as any)
  store.commit('setCurrentComponent', item)
  store.commit('setActiveIndex', index)
}

// 复制
let copy = (item: Component) => {
  let i = cloneDeep(item)
  ;(componentList.value as any).push(i)
  i.properties.field.value = `field${(componentList.value as any).length + 100}`
  store.commit('setActiveIndex', (componentList.value as any).length - 1)
  store.commit('setComponentList', componentList.value as any)
  store.commit('setCurrentComponent', item)
}
// 删除
let del = (item: Component, index: number) => {
  let i = cloneDeep(item)
  ;(componentList.value as any).splice(index, 1)
  if (index === activeIndex.value && index !== 0) {
    store.commit('setActiveIndex', index - 1)
  }
  if (index === activeIndex.value && index === 0) {
    store.commit('setActiveIndex', 0)
  }
  store.commit('setComponentList', componentList.value as any)
  store.commit('setCurrentComponent', item)
}

// 组件值改变
let onChange = (item: Component) => {
  store.commit('setComponentList', componentList.value as any)
  store.commit('setCurrentComponent', item)
}
</script>

<style lang='scss' scoped>
.item {
  margin: 20px 0;
  padding: 30px;
  &:hover {
    background: #f6f7ff;
    border-radius: 6px;
  }
}
.col {
  &:hover {
    .btn {
      display: block;
    }
  }
}
.btn {
  right: 40px;
  top: 8px;
  z-index: 999;
  display: none;
}
.active {
  background: #f6f7ff;
  border-radius: 6px;
}
.info {
  position: absolute;
  top: 46%;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 18px;
  color: #ccb1ea;
  letter-spacing: 4px;
}
</style>