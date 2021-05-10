<template>
    <div class="header flex a-center j-between">
        <div>
            <el-drawer
                title="表单预览"
                v-model="drawerVisible"
                direction="rtl"
                size="50%"
            >
                <generate-form :drawerVisible="drawerVisible"></generate-form>
            </el-drawer>
        </div>
        <div class="flex a-center action c-p">
            <div class="flex a-center mr2">
                <div class="icon">
                    <i class="el-icon-video-play"></i>
                </div>
                <div @click="previewPage">预览</div>
            </div>
            <div class="flex a-center mr2">
                <div class="icon">
                    <i class="el-icon-view"></i>
                </div>
                <div>查看json</div>
            </div>
            <!-- <div class="flex a-center mr2">
        <div class="icon">
          <i class="el-icon-download"></i>
        </div>
        <div>导出vue文件</div>
      </div> -->
            <!-- <div class="flex a-center mr2">
        <div class="icon">
          <i class="el-icon-edit-outline"></i>
        </div>
        <div>复制代码</div>
      </div> -->
            <div class="flex a-center mr2 delete" @click="del">
                <div class="icon">
                    <i class="el-icon-delete"></i>
                </div>
                <div>清空</div>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { useStore } from "vuex";
import { ElMessage, ElMessageBox } from "element-plus";
import { computed, ref } from "vue";
import GenerateForm from "../GenerateForm/GenerateForm.vue";

let store = useStore();
let componentList = computed(() => store.state.componentList);

// 清空
let del = () => {
    if (componentList.value.length === 0) {
        ElMessage.warning("没有组件列表");
        return;
    } else {
        ElMessageBox.confirm("确定要清空所有组件吗?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
        })
            .then(() => {
                store.commit("setComponentList", []);
                store.commit("setCurrentComponent", null);
                store.commit("setActiveIndex", null);
                localStorage.removeItem("componentList");
                localStorage.removeItem("currentComponent");
                localStorage.removeItem("activeIndex");
                ElMessage({
                    type: "success",
                    message: "清空成功!",
                });
            })
            .catch(() => {
                ElMessage({
                    type: "info",
                    message: "已取消删除",
                });
            });
    }
};
let drawerVisible = ref<boolean>(false);
// 预览
let previewPage = () => {
    drawerVisible.value = true;
};
</script>

<style lang='scss' scoped>
.header {
    position: relative;
    height: 60px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #f1e8e8;
    border-top: none;
    border-left: none;
    padding: 0 15px;
    .logo {
        color: #00afff;
        font-weight: 600;
        font-size: 17px;
        img {
            width: 30px;
            height: 30px;
            vertical-align: top;
            margin-right: 10px;
        }
    }
    .action {
        color: #409eff;
        i {
            margin-right: 10px;
        }
        .delete {
            color: #f56c6c !important;
        }
    }
}
</style>