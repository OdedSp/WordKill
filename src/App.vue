<template>
  <v-app class="blue-grey darken-4 app-body">
    <v-toolbar app :clipped-left="clipped" dark>
      <a @click="goHome" class="white--text">KillWord</a>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
      dark
    >
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app dark>
      <span>&copy; Oded Spitzer 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      fixed: false,
      right: true,
      rightDrawer: false
    }
  },
  name: 'App',
  created() {
    var game = JSON.parse(localStorage.getItem('game'))
    if (game) {
      this.$store.commit('setPlayers',game)
    }
  },
  methods: {
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  @font-face {
    font-family: killer;
    src: url(./assets/fonts/deathrattlebb_reg.ttf);
  }
  .app-body {
    height: 100%;
  }
  a {
    font-family: killer;
    font-size: 3em;
    color: white
  }
</style>