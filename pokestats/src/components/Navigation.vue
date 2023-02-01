<template>
    <v-container>
      <v-app-bar
        app
        dense
        id="nav-bar"
      >
        <v-app-bar-nav-icon @click="drawer = !drawer" dark></v-app-bar-nav-icon>
        <span class="white--text font-weight-bold">PokeSTATS</span>
  
        <v-spacer></v-spacer>
  
        <v-btn
          href="https://anime-scene-tracer.pages.dev/"
          target="_blank"
          plain
          class="px-0"
        >
          <span class="white--text">Also try AniTRACE</span>
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer absolute temporary v-model="drawer">

        <v-img src="../assets/zorua.png" contain max-height="100" class="mt-4"></v-img>
        <v-card-title class="d-flex justify-center pt-0 pb-1">Poke<span id="nav-title">STATS</span></v-card-title>

        <v-divider></v-divider>
      
        <v-list nav dense>
          <v-list-item v-for="(item, i) in drawerButtons" :key="i" link>
            <v-list-item-avatar>
              <v-icon class="mr-2">mdi-pokeball</v-icon>
            </v-list-item-avatar>

            <v-list-item-title class="font-weight-bold">
              {{ item.name }}
            </v-list-item-title>
          </v-list-item>
        </v-list>

      </v-navigation-drawer>
    </v-container>
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
        },
        {
          name: "Generation I",
          icon: "../assets/ultraball.png"
        },
        {
          name: "Generation II",
          icon: "../assets/luxuryball.png"
        },
        {
          name: "Generation III",
          icon: "../assets/quickball.png"
        },
        {
          name: "Generation IV",
          icon: "../assets/greatball.png"
        },
        {
          name: "Generation V",
          icon: "../assets/dive.png"
        },
        {
          name: "Generation VI",
          icon: "../assets/ultraball.png"
        },
        {
          name: "Generation VII",
          icon: "../assets/quickball.png"
        },
        {
          name: "Generation VIII",
          icon: "../assets/greatball.png"
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
    background-color: transparent;
  }

  #nav-title{
    font-weight: bold;
  }
  
  </style>
  