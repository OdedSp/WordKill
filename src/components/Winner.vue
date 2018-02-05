<template>
    <v-container fluid >
        <v-layout column align-center>
            <h1 class="white--text">The winner is <span class="purple--text name">{{winner.name}}!</span></h1>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
       computed: {
           winner() {
               return this.$store.getters.winner
           }
       } 
    }
</script>

<style scoped>
.name {
    text-transform: capitalize;
}
</style>