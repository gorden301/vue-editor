import xdEditor from './components/xdEditor.vue';

const components = [xdEditor];

const install = (Vue: any) => {
  if ((install as any).installed) return;
  (install as any).installed = true;
  components.map((component) => {
    Vue.component(component.name, component);
  });
};
// 这一步判断window.Vue是否存在，因为直接引用vue.min.js， 它会把Vue绑到Window上，直接引用打包好的js才能正常跑起来。
if (typeof window !== 'undefined' && (window as any).Vue) {
  // window.Vue.use(install)
  install((window as any).Vue);
}

xdEditor.install = install

export default xdEditor;