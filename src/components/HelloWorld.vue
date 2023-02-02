<template>
  <v-container fluid class="fill-height container">
    <v-row class="align-center mx-md-10">

      <v-col md="6">

      <v-card id="homepage-text">
        <v-card-title class="text-h3 font-weight-bold white--text mb-5">
          Power Up Your Pokemon Knowledge
        </v-card-title>

        <v-card-subtitle class="white--text subtitle-1">
          Discover all the Pokemon and their power stats, type, and more at your fingertips, a resource for Pokemon fans
        </v-card-subtitle>

        <v-btn class="ml-4" @click="goToPokemonList" :loading="getLoadingState">
          Let's Get Started
        </v-btn>
      </v-card>
        
      </v-col>

      <v-col md="6">
        <v-img src="../assets/gengar.png"></v-img>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'HelloWorld',

    data: () => ({
      
    }),
    methods: {
      ...mapActions(['getPokemonBasicDetails']),

      goToPokemonList() {
        this.$router.push('/pokemons');
      }
    },
    computed: {
      ...mapGetters(['getLoadingState'])
    },
    // created () {
    //   this.getPokemonBasicDetails();
    // }
  }
</script>

<style scoped>

/* *{
  border: solid 1px red;
} */

.container{
  background-color: #14023B;
}

#homepage-text{
  background-color: transparent;
  box-shadow: none;
}

</style>
