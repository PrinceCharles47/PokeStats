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

      <v-navigation-drawer absolute temporary v-model="drawer"></v-navigation-drawer>
    </v-container>
  </template>
  
  <script>
  
  export default {
    name: 'App',
  
    data: () => ({
      drawer: false
    }),
  };
  </script>
  
  <style scoped>

  #nav-bar{
    background-color: transparent;
  }
  
  </style>
  