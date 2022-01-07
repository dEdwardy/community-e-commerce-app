import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id:'main',
  state:() =>({
    uinfo:null,
    title:'Hello'
  }),
  getters: {
    uinfo:() => this.uinfo
  },
  mutations: {

  },
  actions:{

  }
})