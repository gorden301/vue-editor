import { CSSProperties } from "vue"

export interface Children {
  type: string,
  label?: any,
  value?: any,
}

export interface Config {
  // 子元素
  children?: Children[],
  // 组件类型
  type?: 'input' | 'radio' | 'radio-group' | 'checkbox' | 'checkbox-group'
  | 'input-number' | 'select' | 'option' | 'cascader' | 'switch' | 'slider'
  | 'time-picker' | 'time-select' | 'date-picker' | 'rate' | 'color-picker' | string,
  // 组件特属属性 如密码框 文本域
  attrs?: any,
  // 字段名
  field?: string,
  // 标签名
  label?: string,
  // 占位符
  placeholder?: string,
  // 表单栅格
  col?: number,
  // 标签宽度
  labelWidth?: number,
  // 组件宽度
  componentWidth?: string,
  // 默认值
  value?: any,
  // 前缀
  prepend?: any,
  // 后缀
  append?: any,
  // 前图标
  prefixIcon?: string,
  // 后图标
  suffixIcon?: string,
  // 最多输入
  maxlength?: string,
  // 最少输入
  minlength?: string,
  // 显示标签
  showLabel?: boolean,
  // 能否清空
  clearable?: boolean,
  // 是否只读
  readonly?: boolean,
  // 是否禁用
  disabled?: boolean,
  // 是否必填
  required?: boolean,
  // 是否多选
  multiple?: boolean,
  // 是否带边框
  border?: boolean,
  // 按钮样式
  btnType?: 'radio' | 'radio-button' | 'checkbox' | 'checkbox-button',
  // 尺寸大小
  size?: 'medium' | 'small' | 'mini' | '',
  // 颜色格式
  colorFormat?: 'hsl' | 'hsv' | 'hex' | 'rgb' | '',
  // switch 打开时的文字描述
  activeText?: string
  // switch 关闭时的文字描述
  inactiveText?: string,
  // switch 打开时的值
  activeValue?: string | number | boolean,
  // switch 关闭时的值
  inactiveValue?: string | number | boolean,
  // switch 打开时的背景色
  activeColor?: string,
  // switch 关闭时的背景色
  inactiveColor?: string,
  // 最小值
  min?: number,
  // 最大值
  max?: number
  // 步长	
  step?: number,
  // 是否显示间断点	
  showStops?: boolean,
  // 是否为范围选择	
  range?: boolean,
  // 是否允许半选	
  allowHalf?: boolean,
  // 是否显示辅助文字
  showText?: boolean,
  // 是否显示当前分数
  showScore?: boolean,
  // 精度
  precision?: number,
  // 控制按钮位置	
  controlsPosition?: 'right' | '',
  // 严格模式
  stepStrictly?: boolean,
  // 时间格式 
  format?: string,
  // 是否是范围选择
  isRange?: boolean,
  // 范围选择时开始日期的占位内容
  startPlaceholder?: string,
  // 范围选择时开始日期的占位内容	
  endPlaceholder?: string,
  // 选择范围时的分隔符	
  rangeSeparator?: string,
  // 图标
  icon?: string,
  // 按钮类型
  buttonType?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'
  // 是否朴素按钮	
  plain?: boolean,
  // 是否圆角按钮
  round?: boolean,
  // 是否圆形按钮
  circle?: boolean,
  // 是否加载中状态
  loading?: boolean,
  // 文字
  text?: string,
  // 高度
  height?: number | string
}

export interface Component {
  // 组件名称，需要提前注册到 Vue
  type: 'button' | 'editor' | 'input' | 'radio' | 'radio-group' | 'checkbox' | 'checkbox-group'
  | 'checkbox-button' | 'input-number' | 'select' | 'option' | 'cascader' | 'switch' | 'slider'
  | 'time-picker' | 'time-select' | 'date-picker' | 'rate' | 'color-picker' | 'year' |
  'month' | 'date' | 'dates' | 'wee' | 'datetime' | 'datetimerange' | 'daterange' | 'monthrange',
  // 左侧组件列表中显示的名字
  label: string,
  properties: object,
  // 左侧组件列表中显示的名字
  icon: string,
  // 组件属性配置
  config: Config,
  // 动画列表
  animations?: string[],
  // 事件列表
  events?: Event,
  // 组件样式
  style?: CSSProperties,
  // 元素绑定的属性
  attrs?: Config
}