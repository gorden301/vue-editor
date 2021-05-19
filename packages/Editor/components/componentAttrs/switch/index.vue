<template>
	<div>
		<el-switch
			v-model="obj.value"
			@input="handleChange(currentComponent)"
		></el-switch>
	</div>
</template>
<script lang="ts">
export default { name: "attrSwitch" };
</script>
<script lang="ts" setup>
import { computed, nextTick, ref, watchEffect, defineProps } from "vue";
import { Children, Component } from "../../../../../src/@types/index";
import { useStore } from "vuex";
import attrHooks from "../attrHooks";

let { store, componentList } = attrHooks();

const props:any = defineProps({
	obj: Object,
	currentComponent: Object,
	objKey: String
});
// let store = useStore();
// let componentList = computed(() => store.state.componentList);
let handleChange = (item: Component, name?: string, e?: any) => {
	for (let i in props.currentComponent.properties) {
		props.currentComponent.attrs[i] =
			props.currentComponent.properties[i].value;
	}
	store.commit("setComponentList", componentList.value);
	store.commit("setCurrentComponent", props.currentComponent);
};
</script>
