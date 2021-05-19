<template>
	<div>
		<component
			:is="
				currentComponent.properties.hasOwnProperty('multiple')
					? (currentComponent.properties.multiple.value
						? 'el-checkbox-group'
						: 'el-radio-group')
					: `el-${currentComponent.type}`
			"
			v-model="obj.value"
			@input="handleChange(currentComponent)"
		>
			<draggable
				v-model="obj.options"
				tag="ul"
				group="people"
				item-key="id"
				:sort="false"
				class="content flex a-center f-wrap"
			>
				<template #item="{ element, index }">
					<li style="display:flex;">
						<component
							v-if="currentComponent.type != 'select'"
							:is="`el-${element.type}`"
							:label="element.value"
							style="margin-right: 5px;display:flex;"
						>
							<el-input
								v-model="element.label"
								placeholder="label值"
								style="
									width: '40px;flex:1'
								"
							/>
							<el-input
								v-model="element.value"
								placeholder="value值"
								style="
									width: '40px;flex:1'
								"
							/>
						</component>
						<component
							v-else
							:is="
								currentComponent.properties.multiple.value
									? 'el-checkbox'
									: 'el-radio'
							"
							:label="element.label"
							:value="element.value"
							:key="element.value"
						>
							<el-input
								v-model="element.label"
								placeholder="label值"
								style="
									width: '40px;flex:1'
								"
							/>
							<el-input
								v-model="element.value"
								placeholder="value值"
								style="
									width: '40px;flex:1'
								"
							/>
						</component>
						<i
							class="drag-item"
							style="
                                                    font-size: 16px;
                                                    margin: 0 5px;
                                                    cursor: move;
                                                "
						>
							<i class="iconfont icon-icon_bars" />
						</i>
						<el-button
							type="danger"
							size="small"
							@click="handleOptionsRemove(index)"
						>
							删除
						</el-button>
					</li>
				</template>
			</draggable>
		</component>
		<div style="margin-left: 22px">
			<el-button type="text" @click="handleAddOption">添加选项</el-button>
		</div>
	</div>
</template>
<script lang="ts">
export default { name: "attrOptions" };
</script>
<script lang="ts" setup>
import { computed, nextTick, ref, watchEffect, defineProps, watch } from "vue";
import draggable from "vuedraggable";
import { Children, Component } from "../../../../../src/@types/index";
import { useStore } from "vuex";
import attrHooks from "../attrHooks";

let { store, componentList } = attrHooks();
const props: any = defineProps({
	obj: Object,
	currentComponent: Object,
	objKey: String
});
const copyCurrentComponent = props.currentComponent
// let store = useStore();
// let componentList = computed(() => store.state.componentList);
// 输入框变化时
let handleChange = (item: Component, name?: string, e?: any) => {
	for (let i in props.currentComponent.properties) {
		props.currentComponent.attrs[i] =
			props.currentComponent.properties[i].value;
	}
	store.commit("setComponentList", componentList.value);
	store.commit("setCurrentComponent", props.currentComponent);
};
let handleOptionsRemove = (index: number) => {
	props.obj.options.splice(index, 1);
};
let handleAddOption = () => {
    if(props.currentComponent.properties.hasOwnProperty('multiple')) {
           props.obj.options.push({
                label: "新选项",
                value: "",
                type: "option"
            })         
    } else {
        if(props.currentComponent.type == 'radio-group') {
            props.obj.options.push({
                label: "新选项",
                value: "",
                type: "radio"
            });
        } else {
            props.obj.options.push({
                label: "新选项",
                value: "",
                type: "checkbox"
            });
        }
    }
};
if (copyCurrentComponent.properties.hasOwnProperty("multiple")) {
	watch(
		copyCurrentComponent.properties.multiple,
		(newValue, oldValue) => {
			if(newValue.value) {
				props.obj.value = [];
				// console.log(props.obj.value)
			} else {
				props.obj.value = ''
			}
		}, {
			immediate: true
		}
	);
}
// watchEffect(() => {
// 	debugger;
// 	if (props.currentComponent.properties.hasOwnProperty("multiple")) {
// 		if (props.currentComponent.properties.multiple) {
// 			props.obj.value = [];
// 		} else {
// 			props.obj.value = "";
// 		}
// 	}
// });
</script>
<style lang="scss" scoped>
.el-input {
	width: 80px;
}
.el-radio {
    margin-right:0;
}
</style>
