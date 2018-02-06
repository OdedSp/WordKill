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
      killer.killCount++
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
      .then(playerObjs => {
        let game = {
          players: playerObjs,
          deathToll: 0
        }
        store.commit('setPlayers', game)
        // GameService.saveGame(game)
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
    isGameOn: state => {
      return (state.deathToll+1 < state.players.length)
    },
    winner: state => {
      if (state.deathToll+1 < state.players.length) {
        let biggestKiller = state.players[0]
        for (let i = 0; i < state.players.length; i++) {
          if (state.players[i].killCount > biggestKiller.killCount) {
            biggestKiller = state.players[i]
          }
        }
        return biggestKiller
      }
      return state.players.find(player => {
        return player.isAlive
      })
    }
  }
})

export default store
