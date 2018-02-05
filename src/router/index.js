import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import NewGame from '@/components/NewGame'
import RunningGame from '@/components/RunningGame'
import PlayerSheet from '@/components/PlayerSheet'
import Winner from '@/components/Winner'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/newgame',
      name: 'NewGame',
      component: NewGame
    },
    {
      path: '/xxxx',
      name: 'RunningGame',
      component: RunningGame
    },
    {
      path: '/xxxx/:name',
      name: 'PlayerSheet',
      component: PlayerSheet
    },
    {
      path: '/winner',
      name: 'Winner',
      component: Winner
    }
  ]
})
