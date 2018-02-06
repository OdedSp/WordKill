<template>
  <v-container fluid class="container">
    <v-btn color="white" flat fab small @click="goBack">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-layout column align-center v-if="!names.length">
      <h1 class="white--text">How many players?</h1>
      <input type="number" v-model="playerCount" min="3" max="868">
      <v-btn color="success" @click="showNamesInput" flat fab class="check">
        <v-icon>arrow_forward</v-icon>
      </v-btn>
      <span class="errorMsg" v-if="error.count">There is a 3-preson minimum in order to play this game</span>
    </v-layout>
    <v-layout column align-center  v-else>
      <h1 class="white--text">Names?</h1>
      <div v-for="(name, i) in names" class="field">
        <input v-model="names[i]" type="text">
        <v-btn color="error" small flat fab v-if="names.length > 3" @click="remove(name)">
          <v-icon>clear</v-icon>
        </v-btn>
      </div>
      <span class="errorMsg" v-if="error.sameName">Can't use the same name twice</span>
      <span class="errorMsg" v-if="error.blankName">Can't leave a blank name</span>
        <div class="buttons">
        <v-btn color="success" @click="sendNames" flat fab>
          <v-icon>done</v-icon>
        </v-btn>
        <v-btn color="success" @click="addPlayer" flat fab  v-if="names.length < 868">
          <v-icon>add_circle_outline</v-icon>
        </v-btn>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'NewGame',
    data () {
      return {
        playerCount: 3,
        names: [],
        error: {
          count: false,
          blankName: false,
          sameName: false
        }
      }
    },
    methods: {
      sendPlayerCount () {
        this.$store.commit('getNumofPlayers', this.playerCount)
      },
      showNamesInput () {
        if (this.playerCount > 2) {
          for (let i = 0; i < this.playerCount; i++) {
            this.names.push('')
          }
        } else {
          this.error.count = true
          setTimeout(() => {
            this.error.count = false
          }, 3200);
        }
      },
      sendNames () {
        this.checkInputs()
        if (!this.error.blankName && !this.error.sameName) {
          this.$store.dispatch('getPlayers', this.names)
          this.startGame()
        }
      },
      startGame () {
        this.$router.push('/xxxx')
      },
      goBack() {
        if (this.names.length) {
          this.names=[]
        } else {
          this.$router.go(-1)
        }
      },
      remove(nameArg) {
        var nameIdx = this.names.findIndex(name => name === nameArg)
        this.names.splice(nameIdx, 1)
      },
      addPlayer() {
        this.names.push('')
      },
      checkInputs() {
        for (let i = 0; i < this.names.length; i++) {
          let name = this.names[i]
          if (name === '') {
            this.error.blankName = true
            setTimeout(() => {
              this.error.blankName = false
            }, 3200);
          } else if (i < this.names.length) {
            for (let j = i+1; j < this.names.length; j++) {
              if (name === this.names[j]) {
                this.error.sameName = true;
                setTimeout(() => {
                  this.error.sameName = false
                }, 3200);
              }
            }
          }
        }
      }
    }
  }
</script>

<style scoped>

  input {
    background: white;
    padding: 10px;
    margin: 10px;
  }
  
  .errorMsg {
    color: #FF5252;
  }
</style>