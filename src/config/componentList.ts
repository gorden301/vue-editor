import { Component } from '../@types/index'
export const componentList: Component[] = [
  {
    type: 'input',
    label: '单行文本',
    icon: 'el-icon-document',
    properties: {},
    config: {
      label: '单行文本',
      placeholder: '请输入单行文本',
      value: '',
      field: '',
      labelWidth: 100,
      componentWidth: '100%',
      col: 24,
      prepend: null,
      append: null,
      prefixIcon: '',
      suffixIcon: '',
      maxlength: '',
      showLabel: true,
      clearable: true,
      readonly: false,
      disabled: false,
      required: true
    }
  },
  {
    type: 'input',
    label: '多行文本',
    properties: {},
    icon: 'el-icon-document',
    config: {
      label: '多行文本',
      attrs: {
        type: 'textarea',
      },
      field: '',
      placeholder: '请输入多行文本',
      value: '',
      labelWidth: 100,
      componentWidth: '100%',
      col: 24,
      prepend: null,
      append: null,
      prefixIcon: '',
      suffixIcon: '',
      maxlength: '',
      showLabel: true,
      clearable: true,
      readonly: false,
      disabled: false,
      required: true
    }
  },
//   {
//     type: 'input',
//     label: '密码框',
//     icon: 'el-icon-document',
//     config: {
//       attrs: {
//         'show-password': true
//       },
//       label: '密码框',
//       field: '',
//       placeholder: '请输入密码',
//       value: '',
//       labelWidth: 100,
//       componentWidth: '100%',
//       col: 24,
//       prepend: null,
//       append: null,
//       prefixIcon: '',
//       suffixIcon: '',
//       maxlength: '',
//       showLabel: true,
//       clearable: true,
//       readonly: false,
//       disabled: false,
//       required: true
//     }
//   },
//   {
//     type: 'input-number',
//     label: '计数器',
//     icon: 'el-icon-plus',
//     config: {
//       label: '计数器',
//       field: '',
//       placeholder: '计数器',
//       value: 0,
//       labelWidth: 100,
//       componentWidth: '100%',
//       col: 24,
//       min: undefined,
//       max: undefined,
//       step: 1,
//       precision: undefined,
//       controlsPosition: '',
//       stepStrictly: false,
//       showLabel: true,
//       disabled: false,
//       required: true,
//     }
//   },
  {
    type: 'select',
    label: '下拉选择',
    properties: {},
    icon: 'el-icon-bottom',
    attrs: {},
    style: {
      width: '100%'
    },
    config: {
      label: '下拉选择',
      field: '',
      placeholder: '请选择',
      value: null,
      labelWidth: 100,
      componentWidth: '100%',
      col: 24,
      showLabel: true,
      clearable: true,
      disabled: false,
      required: true,
      multiple: false,
      children: [
        {
          type: 'option',
          label: '选项1',
          value: '1'
        },
        {
          type: 'option',
          label: '选项2',
          value: '2'
        },
      ]
    }
  },
  {
    type: 'checkbox-group',
    label: '多选框组',
    properties: {},
    icon: 'el-icon-s-grid',
    attrs: {},
    style: {
      width: '100%'
    },
    config: {
      label: '多选框组',
      field: '',
      placeholder: '请选择',
      value: [],
      labelWidth: 100,
      componentWidth: '100%',
      col: 24,
      showLabel: true,
      disabled: false,
      required: true,
      border: false,
      btnType: 'checkbox',
      size: '',
      children: [
        {
          type: 'checkbox',
          label: '选项1',
          value: '1',
        },
        {
          type: 'checkbox',
          label: '选项2',
          value: '2',
        },
      ]
    }
  },
  {
    type: 'radio-group',
    label: '单选框组',
    icon: 'el-icon-check',
    attrs: {},
    properties: {},
    style: {
      width: '100%'
    },
    config: {
      label: '单选框组',
      field: '',
      placeholder: '请选择',
      value: '',
      labelWidth: 100,
      componentWidth: '100%',
      col: 24,
      showLabel: true,
      disabled: false,
      required: true,
      border: false,
      btnType: 'radio',
      size: '',
      children: [
        {
          type: 'radio',
          label: '选项1',
          value: '1',
        },
        {
          type: 'radio',
          label: '选项2',
          value: '2',
        },
      ]
    }
  },
//   {
//     type: 'color-picker',
//     label: '颜色选择器',
//     icon: 'el-icon-folder-add',
//     config: {
//       label: '颜色选择器',
//       value: '',
//       field: '',
//       labelWidth: 100,
//       componentWidth: '100%',
//       col: 24,
//       colorFormat: '',
//       showLabel: true,
//       disabled: false,
//       required: true,
//       size: '',
//     }
//   },
  {
    type: 'switch',
    label: '开关',
    properties: {},
    icon: 'el-icon-switch-button',
    config: {
      label: '开关',
      value: '',
      field: '',
      labelWidth: 100,
      componentWidth: '100%',
      col: 24,
      showLabel: true,
      disabled: false,
      required: true,
      activeValue: 'true',
      inactiveValue: 'false',
      activeText: '',
      inactiveText: '',
      activeColor: '#409EFF',
      inactiveColor: '#C0CCDA'
    }
  },
  {
    type: 'slider',
    label: '滑块',
    icon: 'el-icon-right',
    properties: {},
    config: {
      label: '滑块',
      value: 0,
      field: '',
      labelWidth: 100,
      componentWidth: '100%',
      col: 24,
      showLabel: true,
      disabled: false,
      required: true,
      min: 0,
      max: 100,
      step: 1,
      showStops: false,
      range: false
    }
  },
  {
    type: 'rate',
    label: '评分',
    properties: {},
    icon: 'el-icon-star-off',
    config: {
      label: '评分',
      value: 0,
      field: '',
      labelWidth: 100,
      componentWidth: '100%',
      col: 24,
      showLabel: true,
      disabled: false,
      required: true,
      max: 5,
      allowHalf: false,
      showText: false,
      showScore: false
    }
  },
  {
    type: 'time-picker',
    label: '时间选择器',
    icon: 'el-icon-timer',
    properties: {},
    config: {
      label: '时间选择器',
      placeholder: '请选择时间',
      value: '',
      field: '',
      labelWidth: 100,
      componentWidth: '100%',
      col: 24,
      showLabel: true,
      disabled: false,
      required: true,
      readonly: false,
      clearable: true,
      format: 'HH:mm:ss',
      isRange: false,
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间',
      rangeSeparator: '-'
    }
  },
  {
    type: 'date-picker',
    label: '日期选择器',
    icon: 'el-icon-date',
    properties: {},
    config: {
      label: '日期选择器',
      placeholder: '请选择日期',
      value: '',
      field: '',
      type: 'date',
      labelWidth: 100,
      componentWidth: '100%',
      col: 24,
      showLabel: true,
      disabled: false,
      required: true,
      readonly: false,
      clearable: true,
      format: 'YYYY-MM-DD',
      isRange: false,
      startPlaceholder: '开始日期',
      endPlaceholder: '结束日期',
      rangeSeparator: '-',
    }
  },
//   {
//     type: 'button',
//     label: '按钮',
//     icon: 'el-icon-thumb',
//     config: {
//       label: '按钮',
//       value: '',
//       field: '',
//       labelWidth: 100,
//       componentWidth: '100%',
//       col: 24,
//       showLabel: true,
//       disabled: false,
//       required: true,
//       buttonType: 'default',
//       plain: false,
//       round: false,
//       circle: false,
//       loading: false,
//       size: '',
//       text: '按钮',
//       icon: ''
//     }
//   },
//   {
//     type: 'editor',
//     label: '编辑器',
//     icon: 'el-icon-edit',
//     config: {
//       label: '编辑器',
//       field: '',
//       labelWidth: 100,
//       componentWidth: '100%',
//       col: 24,
//       showLabel: true,
//       required: true,
//       height: 300
//     }
//   },
]