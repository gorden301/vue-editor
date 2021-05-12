import xdEditor from './index.vue'
(xdEditor as any).install = (Vue: any) => {
  Vue.component(xdEditor.name, xdEditor);
};
export default xdEditor;