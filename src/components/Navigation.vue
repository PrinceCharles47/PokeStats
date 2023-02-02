<template>
    <div>
      <v-app-bar
        app
        dense
        color="white"
        id="nav-bar"
      >
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <span class="font-weight-bold">PokeSTATS</span>
  
        <v-spacer></v-spacer>
  
        <v-btn
          href="https://anime-scene-tracer.pages.dev/"
          target="_blank"
          text
          class="px-0"
        >
          <span>Also try AniTRACE</span>
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer absolute temporary v-model="drawer">

        <v-img src="../assets/zorua.png" contain max-height="100" class="mt-4"></v-img>
        <v-card-title class="d-flex justify-center pt-0 pb-1">Poke<span id="nav-title">STATS</span></v-card-title>

        <v-divider></v-divider>
      
        <v-list nav dense>
          <v-list-item v-for="(item, i) in drawerButtons" :key="i" link :to="item.to">
            <v-list-item-avatar>
              <v-icon class="mr-2">mdi-pokeball</v-icon>
            </v-list-item-avatar>

            <v-list-item-title class="font-weight-bold">
              {{ item.name }}
            </v-list-item-title>
          </v-list-item>
        </v-list>

      </v-navigation-drawer>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'App',
  
    data: () => ({
      drawer: false,
      icon: "../assets/masterball.png",

      drawerButtons: [
        {
          name: "All Generations",
          icon: "../assets/masterball.png",
          to: "pokemons"
        },
        {
          name: "Generation I",
          icon: "../assets/ultraball.png",
          to: "pokemons"
        },
        {
          name: "Generation II",
          icon: "../assets/luxuryball.png",
          to: "pokemons"
        },
        {
          name: "Generation III",
          icon: "../assets/quickball.png",
          to: "pokemons"
        },
        {
          name: "Generation IV",
          icon: "../assets/greatball.png",
          to: "pokemons"
        },
        {
          name: "Generation V",
          icon: "../assets/dive.png",
          to: "pokemons"
        },
        {
          name: "Generation VI",
          icon: "../assets/ultraball.png",
          to: "pokemons"
        },
        {
          name: "Generation VII",
          icon: "../assets/quickball.png",
          to: "pokemons"
        },
        {
          name: "Generation VIII",
          icon: "../assets/greatball.png",
          to: "pokemons"
        }
      ]
      
    })
  };
  </script>
  
  <style scoped>

  /* *{
    border: 1px solid grey;
  } */

  #nav-bar{
    box-shadow: none;
  }

  #nav-title{
    font-weight: bold;
  }
  
  </style>
  