<template>
  <div class="container">
    <el-scrollbar>
      <el-form class="scroll" label-width="90px" v-if="currentComponent">
        <el-form-item label="组件类型">
          <el-input
            @input="handleChange(currentComponent)"
            v-model="currentComponent.config.type"
          ></el-input>
        </el-form-item>
        <el-form-item label="字段名">
          <el-input
            placeholder="请输入字段名"
            @input="handleChange(currentComponent)"
            v-model="currentComponent.config.field"
          ></el-input>
        </el-form-item>
        <el-form-item label="标题">
          <el-input
            placeholder="请输入标题"
            @input="handleChange(currentComponent)"
            v-model="currentComponent.config.label"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="占位提示"
          v-if="currentComponent.type !== 'button' &&
          currentComponent.type !== 'editor'"
        >
          <el-input
            @input="handleChange(currentComponent)"
            v-model="currentComponent.config.placeholder"
          ></el-input>
        </el-form-item>
        <el-form-item label="表单栅格" style="padding-right: 10px">
          <el-slider
            :max="24"
            @change="handleChange(currentComponent)"
            v-model="currentComponent.config.col"
          ></el-slider>
        </el-form-item>
        <el-form-item label="标签宽度">
          <el-input-number
            placeholder="请输入标签宽度"
            @change="handleChange(currentComponent)"
            v-model="currentComponent.config.labelWidth"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="组件宽度">
          <el-input
            placeholder="请输入组件宽度"
            @input="handleChange(currentComponent)"
            v-model="currentComponent.config.componentWidth"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="默认值"
          v-if="
            currentComponent.type !== 'time-picker' &&
            currentComponent.type !== 'date-picker' &&
            currentComponent.type !== 'button'
          "
        >
          <el-input
            placeholder="请输入默认值"
            @input="handleChange(currentComponent, 'editor', $event)"
            v-model="currentComponent.config.value"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="默认值"
          v-if="
            currentComponent.type === 'time-picker' ||
            (currentComponent.type === 'date-picker' &&
              currentComponent.type !== 'button')
          "
        >
          <el-input
            placeholder="请输入默认值"
            @input="handleChange(currentComponent)"
            v-model="timeValue"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="前缀"
          v-if="currentComponent.config.label === '单行文本'"
        >
          <el-input
            placeholder="请输入前缀"
            @change="handleChange(currentComponent)"
            v-model="currentComponent.config.prepend"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="后缀"
          v-if="currentComponent.config.label === '单行文本'"
        >
          <el-input
            placeholder="请输入后缀"
            @input="handleChange(currentComponent)"
            v-model="currentComponent.config.append"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="前图标"
          v-if="currentComponent.config.label === '单行文本'"
        >
          <el-input
            placeholder="请输入前图标名字"
            clearable
            @input="handleChange(currentComponent)"
            v-model="currentComponent.config.prefixIcon"
          >
            <template #append>
              <el-button
                size="mini"
                icon="el-icon-thumb"
                @click="showIcon('prefix')"
                >选择</el-button
              >
            </template>
          </el-input>
        </el-form-item>
        <el-form-item
          label="后图标"
          v-if="currentComponent.config.label === '单行文本'"
        >
          <el-input
            placeholder="请输入后图标名字"
            clearable
            @input="handleChange(currentComponent)"
            v-model="currentComponent.config.suffixIcon"
          >
            <template #append>
              <el-button
                size="mini"
                icon="el-icon-thumb"
                @click="showIcon('suffix')"
                >选择</el-button
              >
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="最多输入" v-if="currentComponent.type === 'input'">
          <el-input
            @input="handleChange(currentComponent)"
            placeholder="请输入最多输入"
            v-model="currentComponent.config.maxlength"
          >
            <template #append> 个字符 </template>
          </el-input>
        </el-form-item>
        <template
          v-if="
            currentComponent.type === 'select' ||
            currentComponent.type === 'checkbox-group'
          "
        >
          <el-divider>选项</el-divider>
          <template
            v-for="(item, index) in currentComponent.config.children"
            :key="index"
          >
            <div class="flex a-center mb2">
              <div class="mr1"><i class="el-icon-s-operation"></i></div>
              <div class="mr1">
                <el-input
                  size="small"
                  placeholder="选项名"
                  v-model="item.label"
                ></el-input>
              </div>
              <div class="mr1">
                <el-input
                  size="small"
                  placeholder="选项值"
                  v-model="item.value"
                ></el-input>
              </div>
              <div>
                <el-button
                  size="small"
                  type="danger"
                  circle
                  icon="el-icon-minus"
                  @click="del(item, index)"
                ></el-button>
              </div>
            </div>
          </template>
          <div class="ml1 c-p">
            <i class="el-icon-circle-plus-outline mr1 plus"></i>
            <el-button type="text" @click="addChild">添加选项</el-button>
          </div>
        </template>
        <el-divider
          v-if="
            currentComponent.type === 'select' ||
            currentComponent.type === 'checkbox-group'
          "
        ></el-divider>
        <el-form-item
          label="选项样式"
          v-if="currentComponent.type === 'checkbox-group'"
        >
          <el-radio-group
            @change="handleChange(currentComponent)"
            v-model="currentComponent.config.btnType"
          >
            <el-radio-button size="small" label="checkbox"
              >默认</el-radio-button
            >

            <el-radio-button
              size="small"
              :label="`${currentComponent.config.children[0].type}-button`"
              >按钮</el-radio-button
            >
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="是否带边框"
          v-if="
            currentComponent.type === 'radio-group' ||
            currentComponent.type === 'checkbox-group'
          "
        >
          <el-switch
            @change="handleChange(currentComponent)"
            v-model="currentComponent.config.border"
          ></el-switch>
        </el-form-item>
        <el-form-item
          label="组件尺寸"
          v-if="
            (currentComponent.type === 'radio-group' &&
              currentComponent.config.border) ||
            (currentComponent.type === 'checkbox-group' &&
              currentComponent.config.border) ||
            currentComponent.type === 'color-picker'
          "
        >
          <el-radio-group
            size="mini"
            @change="handleChange(currentComponent)"
            v-model="currentComponent.config.size"
          >
            <el-radio-button label="">默认</el-radio-button>
            <el-radio-button label="medium">中等</el-radio-button>
            <el-radio-button label="small">较小</el-radio-button>
            <el-radio-button label="mini">mini</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="颜色格式"
          v-if="currentComponent.type === 'color-picker'"
        >
          <el-select
            placeholder="请选择颜色格式"
            v-model="currentComponent.config.colorFormat"
          >
            <el-option label="hex" value="hex"></el-option>
            <el-option label="rgb" value="rgb"></el-option>
            <el-option label="hsv" value="hsv"></el-option>
            <el-option label="hsl" value="hsl"></el-option>
          </el-select>
        </el-form-item>
        <template v-if="currentComponent.type === 'switch'">
          <el-form-item label="开启提示">
            <el-input
              @input="handleChange(currentComponent)"
              v-model="currentComponent.config.activeText"
            ></el-input>
          </el-form-item>
          <el-form-item label="关闭提示">
            <el-input
              @input="handleChange(currentComponent)"
              v-model="currentComponent.config.inactiveText"
            ></el-input>
          </el-form-item>
          <el-form-item label="开启值">
            <el-input
              @input="handleChange(currentComponent)"
              v-model="currentComponent.config.activeValue"
            ></el-input>
          </el-form-item>
          <el-form-item label="关闭值">
            <el-input
              @input="handleChange(currentComponent)"
              v-model="currentComponent.config.inactiveValue"
            ></el-input>
          </el-form-item>
          <el-form-item label="开启颜色">
            <el-color-picker
              @change="handleChange(currentComponent)"
              v-model="currentComponent.config.activeColor"
            ></el-color-picker>
          </el-form-item>
          <el-form-item label="关闭颜色">
            <el-color-picker
              @change="handleChange(currentComponent)"
              v-model="currentComponent.config.inactiveColor"
            ></el-color-picker>
          </el-form-item>
        </template>
        <template v-if="currentComponent.type === 'slider'">
          <el-form-item label="最小值">
            <el-input-number
              @change="handleChange(currentComponent)"
              v-model="currentComponent.config.min"
            >
            </el-input-number>
          </el-form-item>
          <el-form-item label="最大值">
            <el-input-number
              @change="handleChange(currentComponent)"
              v-model="currentComponent.config.max"
            >
            </el-input-number>
          </el-form-item>
          <el-form-item label="步长">
            <el-input-number
              @change="handleChange(currentComponent)"
              v-model="currentComponent.config.step"
            >
            </el-input-number>
          </el-form-item>
          <el-form-item label="显示间断点">
            <el-switch
              @change="handleChange(currentComponent)"
              v-model="currentComponent.config.showStops"
            >
            </el-switch>
          </el-form-item>
          <el-form-item label="范围选择">
            <el-switch
              @change="handleChange(currentComponent)"
              v-model="currentComponent.config.range"
            >
            </el-switch>
          </el-form-item>
        </template>
        <template v-if="currentComponent.type === 'time-picker'">
          <el-form-item label="开始占位" v-if="currentComponent.config.isRange">
            <el-input
              v-model="currentComponent.config.startPlaceholder"
              @input="handleChange(currentComponent)"
            ></el-input>
          </el-form-item>
          <el-form-item label="结束占位" v-if="currentComponent.config.isRange">
            <el-input
              v-model="currentComponent.config.endPlaceholder"
              @input="handleChange(currentComponent)"
            ></el-input>
          </el-form-item>
          <el-form-item label="分割符" v-if="currentComponent.config.isRange">
            <el-input
              v-model="currentComponent.config.rangeSeparator"
              @input="handleChange(currentComponent)"
            ></el-input>
          </el-form-item>
          <el-form-item label="时间格式">
            <el-input
              v-model="currentComponent.config.format"
              @input="handleChange(currentComponent)"
            ></el-input>
          </el-form-item>
          <el-form-item label="范围选择">
            <el-switch
              @change="handleChange(currentComponent)"
              v-model="currentComponent.config.isRange"
            ></el-switch>
          </el-form-item>
        </template>
        <template v-if="currentComponent.type === 'date-picker'">
          <el-form-item
            label="日期类型"
            v-if="!currentComponent.config.isRange"
          >
            <el-select
              v-model="currentComponent.config.type"
              @change="handleChange(currentComponent)"
            >
              <el-option label="日(date)" value="date"></el-option>
              <el-option label="周(week)" value="week"></el-option>
              <el-option label="月(month)" value="month"></el-option>
              <el-option label="年(date)" value="year"></el-option>
              <el-option
                label="日期时间(datetime)"
                value="datetime"
              ></el-option>
            </el-select>
          </el-form-item>
          <template v-if="currentComponent.config.isRange">
            <el-form-item label="开始占位">
              <el-input
                v-model="currentComponent.config.startPlaceholder"
                @input="handleChange(currentComponent)"
              ></el-input>
            </el-form-item>
            <el-form-item label="结束占位">
              <el-input
                v-model="currentComponent.config.endPlaceholder"
                @input="handleChange(currentComponent)"
              ></el-input>
            </el-form-item>
            <el-form-item label="分割符" v-if="currentComponent.config.isRange">
              <el-input
                v-model="currentComponent.config.rangeSeparator"
                @input="handleChange(currentComponent)"
              ></el-input>
            </el-form-item>
            <el-form-item label="日期类型">
              <el-select
                v-model="currentComponent.config.type"
                @change="handleChange(currentComponent)"
              >
                <el-option
                  label="日期范围(daterange)"
                  value="daterange"
                ></el-option>
                <el-option
                  label="月范围(monthrange)"
                  value="monthrange"
                ></el-option>
                <el-option
                  label="日期时间范围(datetimerange)"
                  value="datetimerange"
                ></el-option>
              </el-select>
            </el-form-item>
          </template>
          <el-form-item label="时间格式">
            <el-input
              v-model="currentComponent.config.format"
              @input="handleChange(currentComponent)"
            ></el-input>
          </el-form-item>
          <el-form-item label="范围选择">
            <el-switch
              @change="handleChange(currentComponent, 'range')"
              v-model="currentComponent.config.isRange"
            ></el-switch>
          </el-form-item>
        </template>
        <template v-if="currentComponent.type === 'rate'">
          <el-form-item label="最大值">
            <el-input-number
              @change="handleChange(currentComponent)"
              v-model="currentComponent.config.max"
            >
            </el-input-number>
          </el-form-item>
          <el-form-item label="允许半选">
            <el-switch
              @change="handleChange(currentComponent)"
              v-model="currentComponent.config.allowHalf"
            >
            </el-switch>
          </el-form-item>
          <el-form-item label="辅助文字">
            <el-switch
              @change="handleChange(currentComponent)"
              v-model="currentComponent.config.showText"
            >
            </el-switch>
          </el-form-item>
          <el-form-item label="显示分数">
            <el-switch
              @change="handleChange(currentComponent)"
              v-model="currentComponent.config.showScore"
            >
            </el-switch>
          </el-form-item>
        </template>
        <template v-if="currentComponent.type === 'input-number'">
          <el-form-item label="最小值">
            <el-input-number
              placeholder="最小值"
              @change="handleChange(currentComponent)"
              v-model="currentComponent.config.min"
            >
            </el-input-number>
          </el-form-item>
          <el-form-item label="最大值">
            <el-input-number
              placeholder="最大值"
              @change="handleChange(currentComponent)"
              v-model="currentComponent.config.max"
            >
            </el-input-number>
          </el-form-item>
          <el-form-item label="步长">
            <el-input-number
              @change="handleChange(currentComponent)"
              v-model="currentComponent.config.step"
            >
            </el-input-number>
          </el-form-item>
          <el-form-item label="精度">
            <el-input-number
              placeholder="精度"
              @change="handleChange(currentComponent)"
              v-model="currentComponent.config.precision"
            >
            </el-input-number>
          </el-form-item>
          <el-form-item label="按钮位置">
            <el-radio-group v-model="currentComponent.config.controlsPosition">
              <el-radio-button label="">默认</el-radio-button>
              <el-radio-button label="right">右侧</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="严格步数">
            <el-switch
              @change="handleChange(currentComponent)"
              v-model="currentComponent.config.stepStrictly"
            >
            </el-switch>
          </el-form-item>
        </template>
        <template v-if="currentComponent.type === 'button'">
          <el-form-item label="按钮图标">
            <el-input
              placeholder="请输入图标名字"
              clearable
              @input="handleChange(currentComponent)"
              v-model="currentComponent.config.icon"
            >
              <template #append>
                <el-button
                  size="mini"
                  icon="el-icon-thumb"
                  @click="showIcon('')"
                  >选择</el-button
                >
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="按钮文字">
            <el-input
              placeholder="请输入按钮文字"
              v-model="currentComponent.config.text"
              @input="handleChange(currentComponent)"
            ></el-input>
          </el-form-item>
          <el-form-item label="按钮类型">
            <el-select
              placeholder="请选择按钮类型"
              v-model="currentComponent.config.buttonType"
              @change="handleChange(currentComponent)"
            >
              <el-option label="默认按钮" value="default"></el-option>
              <el-option label="主要按钮" value="primary"></el-option>
              <el-option label="成功按钮" value="success"></el-option>
              <el-option label="警告按钮" value="warning"></el-option>
              <el-option label="危险按钮" value="danger"></el-option>
              <el-option label="信息按钮" value="info"></el-option>
              <el-option label="文字按钮" value="text"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="朴素按钮">
            <el-switch
              v-model="currentComponent.config.plain"
              @change="handleChange(currentComponent)"
            ></el-switch>
          </el-form-item>
          <el-form-item label="圆角按钮">
            <el-switch
              v-model="currentComponent.config.round"
              @change="handleChange(currentComponent)"
            ></el-switch>
          </el-form-item>
          <el-form-item label="圆形按钮">
            <el-switch
              v-model="currentComponent.config.circle"
              @change="handleChange(currentComponent)"
            ></el-switch>
          </el-form-item>
        </template>
        <el-form-item label="显示标签">
          <el-switch
            @change="handleChange(currentComponent)"
            v-model="currentComponent.config.showLabel"
          ></el-switch>
        </el-form-item>
        <el-form-item
          label="能否清空"
          v-if="
            currentComponent.type === 'input' ||
            currentComponent.type === 'time-picker'
          "
        >
          <el-switch
            @change="handleChange(currentComponent)"
            v-model="currentComponent.config.clearable"
          ></el-switch>
        </el-form-item>
        <el-form-item label="是否禁用">
          <el-switch
            @change="handleChange(currentComponent)"
            v-model="currentComponent.config.disabled"
          ></el-switch>
        </el-form-item>
        <el-form-item
          label="是否只读"
          v-if="
            currentComponent.type === 'input' ||
            currentComponent.type === 'time-picker' ||
            currentComponent.type === 'date-picker'
          "
        >
          <el-switch
            @change="handleChange(currentComponent)"
            v-model="currentComponent.config.readonly"
          ></el-switch>
        </el-form-item>
        <el-form-item
          label="是否多选"
          v-if="currentComponent.type === 'select'"
        >
          <el-switch
            @change="handleChange(currentComponent)"
            v-model="currentComponent.config.multiple"
          ></el-switch>
        </el-form-item>
        <el-form-item label="是否必填">
          <el-switch
            @change="handleChange(currentComponent)"
            v-model="currentComponent.config.required"
          ></el-switch>
        </el-form-item>
      </el-form>
      <div v-else>暂无组件</div>
    </el-scrollbar>
  </div>
  <el-dialog title="选择图标" v-model="visible" width="60%" top="5vh">
    <el-scrollbar>
      <div class="flex a-center mb2">
        <div class="mr1">请选择图标</div>
        <div>
          <el-input
            prefix-icon="el-icon-search"
            size="small"
            v-model="icon"
            placeholder="请输入图标名称"
          ></el-input>
        </div>
      </div>
      <div
        class="icon flex f-col"
        v-for="(item, index) in iconList"
        :key="index"
        @click="chooseIcon(item)"
      >
        <div class="mb2"><i :class="`el-icon-${item}`"></i></div>
        <div>el-icon-{{ item }}</div>
      </div>
    </el-scrollbar>
  </el-dialog>
</template>

<script lang='ts' setup>
import { computed, ref, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { Children, Component } from '@/types'
import iconList from '@/config/icon'
import dayjs from 'dayjs'

let store = useStore()
let componentList = computed(() => store.state.componentList)
let activeIndex = computed(() => store.state.activeIndex)
let editor = computed(() => store.state.editor)
let currentComponent = ref<Component | null>(null)
let visible = ref<boolean>(false)
let icon = ref<string>('')
/// 图标是前还是后
let position = ref<string>('')

// 获取当前点击的组件
watchEffect(() => {
  if (componentList.value) {
    currentComponent.value = componentList.value[activeIndex.value]
  } else {
    currentComponent.value = null
  }
})

// 显示图标选择器
let showIcon = (p: string) => {
  visible.value = true
  position.value = p
}
// 选择图标
let chooseIcon = (item: string) => {
  if (position.value !== '') {
    let icon = position.value + 'Icon'
    ;(currentComponent.value!.config as any)[icon] = 'el-icon-' + item
  } else {
    currentComponent.value!.config.icon = 'el-icon-' + item
  }
  visible.value = false
  store.commit('setComponentList', componentList.value)
  store.commit('setCurrentComponent', currentComponent.value)
}

// 输入框变化时
let handleChange = (item: Component, name?: string, e?: any) => {
  if (
    (item.type === 'date-picker' && !item.config.isRange) ||
    (item.type === 'date-picker' && item.config.isRange)
  ) {
    item.config.value = ''
  }
  if (name === 'range') {
    if (item.type === 'date-picker' && !item.config.isRange) {
      item.config.type = 'date'
    } else {
      item.config.type = 'daterange'
    }
  }
  if (name === 'editor') {
    editor.value.txt.html(e)
  }
  store.commit('setComponentList', componentList.value)
  store.commit('setCurrentComponent', currentComponent.value)
}

// 添加选项
let addChild = () => {
  if (
    currentComponent.value!.type === 'select' ||
    currentComponent.value!.type === 'checkbox-group'
  ) {
    currentComponent.value!.config.children!.push({
      type: currentComponent.value!.config.children![0].type,
      label: '',
      value: '',
    })
  }
  store.commit('setComponentList', componentList.value)
  store.commit('setCurrentComponent', currentComponent.value)
}

// 删除选项
let del = (item: Children, index: number) => {
  currentComponent.value!.config.children!.splice(index, 1)
  store.commit('setComponentList', componentList.value)
  store.commit('setCurrentComponent', currentComponent.value)
}

// 时间选择的值
let timeValue = computed(() => {
  if (
    currentComponent.value!.type === 'time-picker' ||
    currentComponent.value!.type === 'date-picker'
  ) {
    if (
      currentComponent.value!.config.value &&
      currentComponent.value!.config.value !== ''
    ) {
      if (!Array.isArray(currentComponent.value!.config.value)) {
        return dayjs(currentComponent.value!.config.value!).format(
          currentComponent.value!.config.format
        )
      } else {
        let arr = currentComponent.value!.config.value.map((item: any) => {
          return dayjs(item).format(currentComponent.value!.config.format)
        })
        return arr.join(',')
      }
    } else {
      return ''
    }
  }
})
</script>

<style lang='scss' scoped>
.container {
  padding: 10px 15px 10px 10px;
  overflow-x: hidden;
}
.scroll {
  overflow-x: hidden;
}
.icon {
  text-align: center;
  font-size: 16px;
  display: inline-block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 108px;
  padding: 15px 6px 6px 6px;
  cursor: pointer;
  overflow: hidden;
  width: 25%;
  &:hover {
    background: #eee;
  }
  i {
    font-size: 30px;
  }
}
.plus {
  color: #66b1ff;
  position: relative;
  top: 1px;
}
</style>