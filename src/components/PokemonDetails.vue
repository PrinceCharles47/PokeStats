<template>
    <div class="mt-12 white--text">
      <v-row class="my-1 mx-0">
        <v-spacer></v-spacer>
        <v-btn text to="pokemons" class="white--text">Go Back</v-btn>
      </v-row>

      <v-container>
        <v-row
        v-if="pokemonData" 
        class="
        justify-center
        mb-5
        flex-column-reverse
        flex-md-row
        "
        >
          <v-col class="d-flex flex-column justify-center" md="5">
            <v-card-title class="text-h4 pl-0 py-0">#{{ pokemonData.id }}</v-card-title>
            <v-card-title class="text-h3 font-weight-bold pl-0">{{ pokemonData.name }}</v-card-title>
            
            <div>
              <v-chip v-for="(type, i) in pokemonData.types"
              :key="i"
              class="mr-2 font-weight-bold white--text"
              :color="type.color"
              small
              >

              {{ type.type.toUpperCase() }}
            
              </v-chip>
            </div>

            <v-card-subtitle class="pl-0 pb-1 mt-5 text-h6 font-weight-bold">DESCRIPTION</v-card-subtitle>
            <p>{{ pokemonData.flavor_text }}</p>

          </v-col>

          <v-col :style="'background-color: ' + pokemonData.types[0].color" md="4">
            <v-img :src="pokemonData.imageURL" max-height="375" contain></v-img>
          </v-col>
        </v-row>

        <v-divider></v-divider>
        <v-row class="justify-center">
          <v-col md="9 py-0">
            <v-card-subtitle class="pl-0 pb-0 text-h6 font-weight-bold">BASE STATS</v-card-subtitle>
          </v-col>
        </v-row>

        <v-row class="justify-center mb-10">
          
          <v-col md="3" cols="12" sm="6" class="pb-sm-0">
            <v-card-subtitle class="overline pl-0 py-0">{{ pokemonData.base_stat[0].name }}: {{ pokemonData.base_stat[0].value }}</v-card-subtitle>
            <v-progress-linear
            height="10"
            :value="(pokemonData.base_stat[0].value / 255) * 100"
            :color="pokemonData.types[0].color"
            ></v-progress-linear>

            <v-card-subtitle class="overline pl-0 py-0">{{ pokemonData.base_stat[1].name }}: {{ pokemonData.base_stat[1].value }}</v-card-subtitle>
            <v-progress-linear
            height="10"
            :value="(pokemonData.base_stat[1].value / 255) * 100"
            :color="pokemonData.types[0].color"
            ></v-progress-linear>

          </v-col>
          <v-col md="3" cols="12" sm="6" class="pb-sm-0 pt-0 pt-sm-3">
            <v-card-subtitle class="overline pl-0 py-0">{{ pokemonData.base_stat[2].name }}: {{ pokemonData.base_stat[2].value }}</v-card-subtitle>
            <v-progress-linear
            height="10"
            :value="(pokemonData.base_stat[2].value / 255) * 100"
            :color="pokemonData.types[0].color"
            ></v-progress-linear>

            <v-card-subtitle class="overline pl-0 py-0">{{ pokemonData.base_stat[3].name }}: {{ pokemonData.base_stat[3].value }}</v-card-subtitle>
            <v-progress-linear
            height="10"
            :value="(pokemonData.base_stat[3].value / 255) * 100"
            :color="pokemonData.types[0].color"
            ></v-progress-linear>

          </v-col>
          <v-col md="3" cols="12" sm="12" class="d-flex flex-sm-row flex-md-column flex-column pt-0 pt-md-3">
            <v-col class="py-0 pl-0 pr-0 pr-sm-3 px-md-0">
              <v-card-subtitle class="overline pl-0 py-0">{{ pokemonData.base_stat[4].name }}: {{ pokemonData.base_stat[4].value }}</v-card-subtitle>
              <v-progress-linear
              height="10"
              :value="(pokemonData.base_stat[4].value / 255) * 100"
              :color="pokemonData.types[0].color"
              ></v-progress-linear>
            </v-col>

            <v-col class="py-0 pr-0 pl-0 pl-sm-3 px-md-0">
              <v-card-subtitle class="overline pl-0 py-0">{{ pokemonData.base_stat[5].name }}: {{ pokemonData.base_stat[5].value }}</v-card-subtitle>
              <v-progress-linear
              height="10"
              :value="(pokemonData.base_stat[5].value / 255) * 100"
              :color="pokemonData.types[0].color"
              ></v-progress-linear>
            </v-col>

          </v-col>
        </v-row>
      </v-container>
    </div>
</template>
  
<script>
import { mapGetters } from 'vuex';

  export default {
  name: 'PokemonDetails',
  
  data: () => ({

  }),
  computed: {
    ...mapGetters(['getSinglePokemonData']),

    pokemonData () {
      return this.getSinglePokemonData[0]
    }
  }
}
</script>
  
<style scoped>
  
/* *{
  border: solid 1px grey;
} */
  
</style>
  