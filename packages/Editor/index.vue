<template>
    <div>
        <el-container v-if="componentType == 'Editor'">
            <el-container>
                <el-header><nav-header></nav-header></el-header>
                <el-container>
                    <el-aside width="280px">
                        <nav-left></nav-left>
                    </el-aside>
                    <el-main>
                        <nav-main></nav-main>
                        <!-- <preview-dialog></preview-dialog> -->
                    </el-main>
                </el-container>
            </el-container>
            <el-aside width="360px">
                <nav-right></nav-right>
            </el-aside>
        </el-container>
        <!-- <el-container v-else>
            <generate-form></generate-form>
        </el-container> -->
    </div>
</template>
<script lang="ts">
export default { name: "xdEditor" };
</script>
<script lang='ts' setup>
import { computed, nextTick, ref, watchEffect, defineProps } from "vue";
import NavHeader from "./components/navHeader/NavHeader.vue";
import NavLeft from "./components/navLeft/NavLeft.vue";
import NavMain from "./components/navMain/NavMain.vue";
import NavRight from "./components/navRight/NavRight.vue";
// import GenerateForm from "../Generator/index.vue";

const props = defineProps({
    componentType: String,
});
</script>

<style lang='scss' scoped>
.el-header {
    padding: 0;
}
.el-aside {
    overflow-x: hidden;
}
</style>