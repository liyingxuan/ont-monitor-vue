import Vue from 'vue'
import Vuex from 'vuex'

import InternetTopology from './modules/internet-topology'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    InternetTopology
  }
})
