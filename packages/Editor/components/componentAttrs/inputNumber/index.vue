<template>
	<div>
		<el-input-number
            v-model="obj.value"
			@input="handleChange(currentComponent)"
		></el-input-number>
	</div>
</template>
<script lang="ts">
export default { name: "attrInputNumber" };
</script>
<script lang="ts" setup>
import { computed, nextTick, ref, watchEffect, defineProps } from "vue";
import { Children, Component } from "../../../../../src/@types/index";
import { useStore } from "vuex";
import attrHooks from '../attrHooks'

// const { props } = attrHooks() 
let { store, componentList} = attrHooks()
const props:any = defineProps({
	obj: Object,
	currentComponent: Object,
	objKey: String
});
// let store = useStore();
// let componentList = computed(() => store.state.componentList);
// 输入框变化时
let handleChange = (item: Component, name?: string, e?: any) => {
    for(let i in props.currentComponent.properties) {
        props.currentComponent.attrs[i] = props.currentComponent.properties[i].value
    }
	store.commit("setComponentList", componentList.value);
	store.commit("setCurrentComponent", props.currentComponent);
};
</script>
