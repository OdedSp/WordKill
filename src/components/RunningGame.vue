<template>
    <v-container fluid >
        <v-layout column align-center>
            <h1 class="white--text">Which one are you?</h1>
            <v-btn v-for="player in players"
                class="player"
                color="purple lighten-2"
                :key="player.id"
                v-html="player.name" 
                @click="seePlayer(player.name)"
                :disabled="!player.isAlive"
                dark
                large></v-btn>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        computed: {
            players() {
                return this.$store.getters.players
            }
        },
        methods: {
            seePlayer(name){
                this.$router.push(`/xxxx/${name}`)
            }
        }
    }
</script>

<style scoped>
    .player {
        margin: 20px
    }
</style>