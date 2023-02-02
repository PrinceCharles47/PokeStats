import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    pokemonBasicDetails: [],
    partialPokemonData: []

  },
  getters: {
    getPokemonBasicDetails(state) {
      return state.pokemonBasicDetails;
    },

    getLoadingState(state){
      return state.loading;
    },

    getPokemonData(state) {
      return state.partialPokemonData;
    }
  },
  mutations: {
    SET_POKEMON_BASIC_DETAILS (state, data) {state.pokemonBasicDetails = data},
    SET_LOADING (state) { state.loading = !state.loading},
    SET_PARTIAL_POKEMON_DATA (state, data) {state.partialPokemonData = data}
  },
  actions: {
    async getPokemonBasicDetails ({commit}) {
      commit('SET_LOADING')

      await fetch ('https://pokeapi.co/api/v2/pokemon-species?limit=905&offset=0', {
        method: 'GET'
      }).then((response) => response.json())
      .then((data) => {
        let pokemonNames = []

        data.results.forEach((pokemon) => {
          pokemonNames.push(pokemon.name);
        })

        return pokemonNames;
      }).then(pokemonArray => {
        let pokemonData = []

        pokemonArray.forEach(pokemon => {
          fetch ('https://pokeapi.co/api/v2/pokemon-species/' + pokemon, {
            method: 'GET'
          }).then((response) => response.json())
          .then(async (data) => {
            let pokemonTypes = []

            await fetch ('https://pokeapi.co/api/v2/pokemon/' + data.id, {
              method: 'GET'
            }).then((response) => response.json())
            .then(data => {
              data.types.forEach((type) => {
                // pokemonTypes.push(type.type.name)


                let typeColors =[
                  {
                    type: 'normal',
                    color: '#a8a878'
                  },
                  {
                    type: 'electric',
                    color: '#f8d030'
                  },
                  {
                    type: 'grass',
                    color: '#76c850'
                  },
                  {
                    type: 'fire',
                    color: '#f08030'
                  },
                  {
                    type: 'water',
                    color: '#6890f0'
                  },
                  {
                    type: 'ground',
                    color: '#e0c068'
                  },
                  {
                    type: 'dragon',
                    color: '#7038f8'
                  },
                  {
                    type: 'fairy',
                    color: '#ee99ac'
                  },
                  {
                    type: 'psychic',
                    color: '#f85888'
                  },
                  {
                    type: 'rock',
                    color: '#b8a076'
                  },
                  {
                    type: 'ice',
                    color: '#98d8d8'
                  },
                  {
                    type: 'ghost',
                    color: '#705898'
                  },
                  {
                    type: 'flying',
                    color: '#a890f0'
                  },
                  {
                    type: 'bug',
                    color: '#a8b890'
                  },
                  {
                    type: 'poison',
                    color: '#a040a0'
                  },
                  {
                    type: 'dark',
                    color: '#413f40'
                  },
                  {
                    type: 'steel',
                    color: '#b8b8d0'
                  },
                  {
                    type: 'fighting',
                    color: '#c03028'
                  }
                ]


                typeColors.forEach(typeColor => {
                  if(type.type.name === typeColor.type){
                    pokemonTypes.push({type: type.type.name, color: typeColor.color})
                  }
                })
              })
            })

            data.genera.forEach((genus) => {
              if(genus.language.name === 'en'){
                
                if(pokemonTypes){
                  pokemonData.push({
                    id: data.id,
                    name: data.name.toUpperCase(),
                    genus: genus.genus,
                    types: pokemonTypes,
                    imageURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + data.id + '.png'
                  })
                }

              }
            })
          })
        })

        return pokemonData;
      })
      .then((pokemonBasicData) => {
        commit('SET_POKEMON_BASIC_DETAILS', pokemonBasicData)
        commit('SET_LOADING')
      })
    },

    async getPartialPokemonData ({commit}, payload) {
      commit('SET_LOADING')

      await fetch ('https://pokeapi.co/api/v2/pokemon-species?limit=' + payload.limit + '&offset=' + payload.offset, {
        method: 'GET'
      }).then((response) => response.json())
      .then((data) => {
        let pokemonNames = []

        data.results.forEach((pokemon) => {
          pokemonNames.push(pokemon.name);
        })

        return pokemonNames;
      }).then(pokemonArray => {
        let pokemonData = []

        pokemonArray.forEach(pokemon => {
          fetch ('https://pokeapi.co/api/v2/pokemon-species/' + pokemon, {
            method: 'GET'
          }).then((response) => response.json())
          .then(async (data) => {
            let pokemonTypes = []

            await fetch ('https://pokeapi.co/api/v2/pokemon/' + data.id, {
              method: 'GET'
            }).then((response) => response.json())
            .then(data => {
              data.types.forEach((type) => {
                // pokemonTypes.push(type.type.name)


                let typeColors =[
                  {
                    type: 'normal',
                    color: '#a8a878'
                  },
                  {
                    type: 'electric',
                    color: '#f8d030'
                  },
                  {
                    type: 'grass',
                    color: '#76c850'
                  },
                  {
                    type: 'fire',
                    color: '#f08030'
                  },
                  {
                    type: 'water',
                    color: '#6890f0'
                  },
                  {
                    type: 'ground',
                    color: '#e0c068'
                  },
                  {
                    type: 'dragon',
                    color: '#7038f8'
                  },
                  {
                    type: 'fairy',
                    color: '#ee99ac'
                  },
                  {
                    type: 'psychic',
                    color: '#f85888'
                  },
                  {
                    type: 'rock',
                    color: '#b8a076'
                  },
                  {
                    type: 'ice',
                    color: '#98d8d8'
                  },
                  {
                    type: 'ghost',
                    color: '#705898'
                  },
                  {
                    type: 'flying',
                    color: '#a890f0'
                  },
                  {
                    type: 'bug',
                    color: '#a8b890'
                  },
                  {
                    type: 'poison',
                    color: '#a040a0'
                  },
                  {
                    type: 'dark',
                    color: '#413f40'
                  },
                  {
                    type: 'steel',
                    color: '#b8b8d0'
                  },
                  {
                    type: 'fighting',
                    color: '#c03028'
                  }
                ]


                typeColors.forEach(typeColor => {
                  if(type.type.name === typeColor.type){
                    pokemonTypes.push({type: type.type.name, color: typeColor.color})
                  }
                })
              })
            })

            data.genera.forEach((genus) => {
              if(genus.language.name === 'en'){
                
                if(pokemonTypes){
                  pokemonData.push({
                    id: data.id,
                    name: data.name.toUpperCase(),
                    genus: genus.genus,
                    types: pokemonTypes,
                    imageURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + data.id + '.png'
                  })
                }

              }
            })
          })
        })

        return pokemonData;
      })
      .then((pokemonBasicData) => {
        // console.log(pokemonBasicData);
        commit('SET_PARTIAL_POKEMON_DATA', pokemonBasicData)
        commit('SET_LOADING')
      })
    }
  },
  modules: {
  }
})
