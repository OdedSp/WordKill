<template>
    <v-container fluid >
        <v-layout column align-center class="approval" v-if="!approved">
            <h1 class="white--text">Are you really <span class="name player purple--text">{{player.name}}</span>?</h1>
            <div class="buttons">
                <v-btn round color="success" @click="approve">Of course I am!</v-btn>
                <v-btn round color="error" @click="goBack">Nope, sorry</v-btn>
            </div>
        </v-layout>
        <v-layout column align-center class="sheet" v-else>
            <h1 class="white--text name player">{{player.name}}</h1>
            <p class="white--text">Your victim is: <span class="name target">{{player.target}}</span></p>
            <p class="white--text">Their KillWord is:  <span class="target">{{player.killWord}}</span></p>
            <v-btn round color="error" @click="killTarget">They're dead, next victim please!</v-btn>
            <v-btn round color="success" @click="goBack">Got it, thanks</v-btn>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                approved: false
            }
        },
        computed: {
            player() {
                var players = this.$store.getters.players
                return players.find(player => {
                    return player.name === this.$route.params.name
                })
            },
            isLastKill() {
                return this.$store.getters.isLastKill
            }
        },
        methods: {
            approve() {
                this.approved = true
            },
            goBack() {
                this.$router.go(-1)
            },
            killTarget() {
                const {name, target} = this.player
                if (this.isLastKill) {
                    this.$store.commit('killPlayer', {name, target})
                    this.$router.push('/winner')
                } else {
                    setTimeout(() => {
                        this.$store.commit('killPlayer', {name, target})
                    }, 1200);
                    this.goBack()
                }
                // this.goBack()
            }
        }
    }
</script>

<style scoped>
p{
    font-size: 1.5em
}
.name {
    text-transform: capitalize;
}
.target {
    color: #FF5252;
}
.buttons {
    margin: 10vh 0
}
</style>