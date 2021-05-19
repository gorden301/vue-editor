import { computed, nextTick, ref, watchEffect, defineProps } from "vue";
import { Children, Component } from "../../../../src/@types/index";
import { useStore } from "vuex";

export default function () {
    let store = useStore();
    let componentList = computed(() => store.state.componentList);
    // function handleChange (item: Component, name?: string, e?: any) {
    //     for(let i in props.currentComponent.properties) {
    //         props.currentComponent.attrs[i] = props.currentComponent.properties[i].value
    //     }
    //     store.commit("setComponentList", componentList.value);
    //     store.commit("setCurrentComponent", props.currentComponent);
    // };
    return {
        store,
        componentList,
        // handleChange
    }
}