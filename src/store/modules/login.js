import axios from 'axios'
import * as types from "../mutation-type"

export default {
  state: {
    AccountInfo: {
    },
  },
  mutations: {
    [types.SET_LOGIN_INFO](state, payload) {
      state.AccountInfo = payload.info
    }
  },
  actions: {
    setAccountInfo({dispatch, commit},$account) {
      commit({
        type: types.SET_LOGIN_INFO,
        info: $account
      })
    },
    emptyAccountInfo({dispatch, commit}) {
      commit({
        type: types.SET_LOGIN_INFO,
        info: ''
      })
    },
  }
}
