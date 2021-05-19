interface Attrs {
    [propName: string]: any
}

export const defaultAttrs: Attrs =  {
    'field': {
        name: "字段名",
        type: "string",
        value: "单行文本",
        ui: {
            widget: "AttrInput"
        }
    },
    'hideLabel': {
        name: "是否隐藏标题",
        type: "boolean",
        value: false,
        ui: {
            widget: "AttrSwitch"
        }
    },
    'componentWidth': {
        name: "组件宽度",
        type: "string",
        value: "100%",
        ui: {
            widget: "AttrInput"
        }
    },
    'disabled': {
        name: "是否禁用",
        type: "boolean",
        value: false,
        ui: {
            widget: "AttrSwitch"
        }
    },
    'required': {
        name: "是否必填",
        type: 'boolean',
        value: false,
        ui: {
            widget: "AttrSwitch"
        }
    },
    'col': {
        name: "表单栅格",
        type: 'number',
        value: 24,
        ui: {
            widget: "AttrSlider"
        }
    }
}