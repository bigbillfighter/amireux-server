import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  accounts: require('../assets/json/accounts.json'),
  cardRecord: require('../assets/json/gate_card.json'),
  currentAccount: {
    username: '',
    password: '',

  }
}

const mutations = {
  show_accounts(state){
    console.log(state.accounts)
  },

  set_current_account(state, {account}){
    state.currentAccount.username = account.username.trim()
    state.currentAccount.password = account.password.trim()
  },

}

const actions = {
  showAccounts({commit}) {
    commit('show_accounts');
  },
  setCurrentAccount({commit}, account){
    commit('set_current_account', {account})
  },

}

const getters = {

}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
