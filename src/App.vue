<template>
  <v-app id="main">
    <Navigation />

    <v-main class="pa-0">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
// import { mapGetters } from "vuex";
import Navigation from "./components/Navigation.vue"

export default {
  name: 'App',

  components: {
    Navigation
  },
  data: () => ({
    //
  }),
  // computed: {
  //   ...mapGetters(['getSinglePokemonData']),

  //   setBackgroundColor () {
  //     if(this.getSinglePokemonData[0]){
  //       return this.getSinglePokemonData[0].types[0].color
  //     }else{
  //       return 'white'
  //     }
  //   }
  // }
};
</script>

<style scoped>

/* #main{
  background-color: #14023B;
} */

</style>
