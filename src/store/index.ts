import { createStore } from 'vuex'

export default createStore({
  state: {
    currentComponent: JSON.parse(localStorage.getItem('currentComponent')!) || null,
    componentList: JSON.parse(localStorage.getItem('componentList')!) || [],
    activeIndex: JSON.parse(localStorage.getItem('activeIndex')!) * 1,
    editor: null
  },
  mutations: {
    setCurrentComponent(state, data) {
      state.currentComponent = data
      localStorage.setItem('currentComponent', JSON.stringify(data))
    },
    setComponentList(state, data) {
      state.componentList = data
      localStorage.setItem('componentList', JSON.stringify(data))
    },
    setActiveIndex(state, data) {
      state.activeIndex = data
      localStorage.setItem('activeIndex', String(data))
    },
    setEditor(state, data) {
      state.editor = data
    }
  },
  actions: {
  },
  modules: {
  }
})