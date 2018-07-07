import Vue from 'vue'
import Vuex from 'vuex'

import BlockChain from './modules/block-chain'
import Login from './modules/login'
import InternetTopology from './modules/internet-topology'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    BlockChain,
    Login,
    InternetTopology
  }
})
