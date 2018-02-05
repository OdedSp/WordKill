<template>
  <v-container fluid >
    <v-layout column align-center>
      <h1 class="white--text">Killword</h1>
      <v-btn flat dark color="info" class="ma-3" @click="startNew">New Game</v-btn>
      <v-btn flat dark color="primary" @click="goToRunning">Running Game</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        newGame: false
      }
    },
    methods: {
      startNew () {
        this.$router.push('/newgame')
      },
      goToRunning() {
        this.$router.push('/xxxx')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @font-face {
    font-family: killer;
    src: url(../assets/fonts/deathrattlebb_reg.ttf);
  }
  h1 {
    font-family: killer;
    font-size: 6em
  }
</style>
