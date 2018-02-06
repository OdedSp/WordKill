<template>
    <v-container fluid >
        <v-layout column align-center>
            <h1 class="white--text">Which one are you?</h1>
            <v-btn class="player" v-for="player in players" color="purple lighten-2"
                :key="player.id"
                @click="seePlayer(player.name)"
                :disabled="!player.isAlive"
                dark
                large>
                <div class="button-content">
                    <!-- <img :src="'https://api.adorable.io/avatars/40/spitzer.png'" alt=""/> -->
                    <span>{{player.name}}</span>
                </div>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        created() {
            if (!this.isGameOn) {
                this.$router.push('/winner')
            }
        },
        computed: {
            players() {
                return this.$store.getters.players
            },
            isGameOn() {
                return this.$store.getters.isGameOn
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
    /* .player {
        margin: 20px;
    } */
    .button-content {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img{
        border-radius: 50%;
        height: 20px;  
    }
</style>