<template>
    <v-container class="mt-15">
      <v-row v-if="getPokemonData">
          <v-col v-for="(pokemon, i) in getPokemonData" :key="i" cols="6" sm="3" md="2">
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

      <!-- <v-pagination
      :length="50"
      total-visible="10"
      v-model="page"
      @next="setPaginationData"
      @previous="setPaginationData"
      ></v-pagination> -->

      <v-row class="mb-10">
        <v-btn width="100" @click="setPreviousPageData" text>Previous</v-btn>
        <v-spacer></v-spacer>
        <v-btn width="100" @click="setNextPageData" :disabled="disabled" text>Next</v-btn>
      </v-row>
      
  </v-container>
</template>
  
<script>
import { mapActions, mapGetters } from 'vuex';

  export default {
  name: 'PokemonDisplay',
  
  data: () => ({
    page: 0,
    limit: 18,
    offset: 0,
    initialOffset: 0,
    initialLimit: 18,
    disabled: false
  }),
  methods: {
    ...mapActions(['getPartialPokemonData']),

    setNextPageData () {
      this.page = this.page + 1
      this.offset = this.limit * this.page

      console.log(this.offset + " "  + this.limit);

      if(this.offset >= 900){
        this.disabled = true
      }else{
        this.disabled = false
      }

      this.getPartialPokemonData({limit: this.limit, offset: this.offset})
    },

    setPreviousPageData () {
      
      if(this.page > 0){
        this.page = this.page - 1
      }else{
        this.page = 0
      }

      if(this.offset >= 900){
        this.disabled = false
      }

      if(this.offset > this.initialLimit){
        this.offset = this.offset - this.limit
      }else{
        this.offset = 0
      }

      console.log(this.offset + " "  + this.limit);

      this.getPartialPokemonData({limit: this.initialLimit, offset: this.offset})
    }
  },
  computed: {
    ...mapGetters(['getPokemonBasicDetails', 'getPokemonData']),
  },
  created () {
    this.getPartialPokemonData({limit: this.limit, offset: this.initialOffset})
  }
}
</script>
  
<style scoped>
  
/* *{
  border: solid 1px grey;
} */
  
</style>
  