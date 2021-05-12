import Gernerator from './index.vue'
(Gernerator as any).install = (Vue: any) => {
  Vue.component(Gernerator.name, Gernerator);
};
export default Gernerator;