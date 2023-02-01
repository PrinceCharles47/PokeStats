<template>
  <v-container>
    <v-row class="align-center">

      <v-col md="6">

      <v-card id="homepage-text">
        <v-card-title class="text-h3 font-weight-bold white--text mb-5">
          Power Up Your Pokemon Knowledge
        </v-card-title>

        <v-card-subtitle class="white--text subtitle-1">
          Discover all the Pokemon and their power stats, type, and more at your fingertips, a resource for Pokemon fans
        </v-card-subtitle>

        <v-btn class="ml-4">
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
  export default {
    name: 'HelloWorld',

    data: () => ({
      
    }),
  }
</script>

<style scoped>

/* *{
  border: solid 1px white;
} */

#homepage-text{
  background-color: transparent;
  box-shadow: none;
}

</style>
