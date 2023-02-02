<template>
    <v-container class="mt-15">
      <v-row>
          <v-col v-for="(pokemon, i) in getPokemonBasicDetails" :key="i" cols="6" sm="3" md="2">
            <v-card height="220" to="pokemon-details">
              <v-row class="d-flex flex-column align-center">
                <v-img max-height="100" max-width="100" class="mt-5" :src="pokemon.imageURL"></v-img>
              </v-row>
              <v-row class="d-flex flex-column align-center">
                <v-card-title class="py-2 font-weight-bold">{{ pokemon.name }}</v-card-title>
                <v-card-subtitle class="pt-0 caption">{{ pokemon.genus }}</v-card-subtitle>
                <v-row class="pl-1">
                  <v-chip
                  v-for="(type, i) in pokemon.types"
                  :key="i"
                  class="mr-1 caption white--text font-weight-bold"
                  x-small
                  :style="'background-color: ' + type.color"
                  >
                  {{ type.type.toUpperCase() }}
                  </v-chip>
                </v-row>
              </v-row>
            </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>
  
<script>
import { mapGetters } from 'vuex';

  export default {
  name: 'PokemonDisplay',
  
  data: () => ({

  }),
  computed: {
    ...mapGetters(['getPokemonBasicDetails']),
  }
}
</script>
  
<style scoped>
  
/* *{
  border: solid 1px grey;
} */
  
</style>
  