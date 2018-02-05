import GameService from './services/GameService'
import Vue from 'vue'
import Vuex from 'vuex'
import index from 'vuex';
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    players: null,
    deathToll: 0
  },
  mutations: {
    setPlayers (state, payload) {
      state.players = payload.players;
      state.deathToll = payload.deathToll;
      localStorage.setItem('game', JSON.stringify(state))
    },
    killPlayer(state, payload) {
      var target = state.players.find(player => {
        return player.name === payload.target
      })
      var killer = state.players.find(player => {
        return player.name === payload.name
      })
      killer.target = target.target
      killer.killWord = target.killWord
      state.deathToll++
      target.isAlive = false
      target.target = null
      target.killWord = null
      console.log(state.players);
      localStorage.setItem('game', JSON.stringify(state))
    }
  },
  actions: {
    getPlayers (context, names) {
      GameService.getPlayerObjs(names)
      .then(res => {
        store.commit('setPlayers', {players: res, deathToll: 0})
      })
    }
  },
  getters: {
    players: state => {
      return state.players
    },
    isLastKill: state => {
      return (state.deathToll+2 === state.players.length)
    },
    winner: state => {
      return state.players.find(player => {
        return player.isAlive
      })
    }
  }
})

export default store
