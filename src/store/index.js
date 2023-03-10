import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    pokemonBasicDetails: [],
    partialPokemonData: [],
    singlePokemonData: [],
    searchedPokemonData: [],

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
    },

    getSinglePokemonData(state) {
      return state.singlePokemonData;
    },

    getSearchedPokemonData(state) {
      return state.singlePokemonData;
    }
  },
  mutations: {
    SET_POKEMON_BASIC_DETAILS (state, data) {state.pokemonBasicDetails = data},
    SET_LOADING (state) { state.loading = !state.loading},
    SET_PARTIAL_POKEMON_DATA (state, data) {state.partialPokemonData = data},
    SET_SINGLE_POKEMON_DATA (state, data) {state.singlePokemonData = data},
    SET_SEARCHED_POKEMON_DATA (state, data) {state.searchedPokemonData = data}
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
    },

    async getSinglePokemonData ({commit}, payload) {
      console.log('payload: ', payload);
      let pokemonData = []

      await fetch ('https://pokeapi.co/api/v2/pokemon/' + payload.id, {
        method: 'GET'
      }).then(response => response.json())
      .then(data => {

        let stats = []

        data.stats.forEach(stat => {
          stats.push({
            name: stat.stat.name,
            value: stat.base_stat
          })
        })

        pokemonData.push({
          id: payload.id,
          name: payload.name,
          types: payload.types,
          imageURL: payload.imageURL,
          genus: payload.genus,
          base_stat: stats
        })

        return pokemonData
      }).then(async (pokemonData) => {

        console.log('pokemon data: ',pokemonData);
        let singlePokemonData = []

        await fetch ('https://pokeapi.co/api/v2/pokemon-species/' + pokemonData[0].id, {
          method: 'GET',
        }).then(response => response.json())
        .then(data => {

          let flavorText = []

          data.flavor_text_entries.forEach(flavorTextEntry => {
            if(flavorTextEntry.language.name  === 'en'){
              flavorText.push({entry: flavorTextEntry.flavor_text})
            }
          })

          singlePokemonData.push({
            id: pokemonData[0].id,
            name: pokemonData[0].name,
            types: pokemonData[0].types,
            imageURL: pokemonData[0].imageURL,
            genus: pokemonData[0].genus,
            base_stat: pokemonData[0].base_stat,
            flavor_text: flavorText[0].entry
          })

        })

        return singlePokemonData
      }).then(singlePokemonData => {
        console.log(singlePokemonData);
        commit('SET_SINGLE_POKEMON_DATA', singlePokemonData)
      })

    },

    async searchPokemon ({commit}, payload) {
      let pokemonInitialData = []

      await fetch ('https://pokeapi.co/api/v2/pokemon-species/' + payload, {
        method: 'GET',
      }).then(response => response.json())
      .then(data => {

        if(data.genera.length){
          data.genera.forEach(genus => {
            if(genus.language.name === 'en'){
              pokemonInitialData.push({
                id: data.id,
                name: data.name,
                genus: genus.genus,
              })
            }
          })
        }else{
          pokemonInitialData.push({
            id: data.id,
            name: data.name,
            genus: 'No Data Available',
          })
        }

        return pokemonInitialData
      }).then( async (pokemonInitialData) => {
        let pokemonData = []

        await fetch ('https://pokeapi.co/api/v2/pokemon/' + pokemonInitialData[0].id, {
          method: 'GET',
        }).then(response => response.json())
        .then(data => {

          let pokemonTypes = []

          data.types.forEach(type => {

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
                pokemonTypes.push({
                  type: type.type.name,
                  color: typeColor.color
                })
              }
            })
          })

          pokemonData.push({
            id: data.id,
            name: pokemonInitialData[0].name.toUpperCase(),
            genus: pokemonInitialData[0].genus,
            types: pokemonTypes,
            imageURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + data.id + '.png'
          })
        })

        return pokemonData
      }).then(pokemonData => {
        console.log(pokemonData);
        commit('SET_PARTIAL_POKEMON_DATA', pokemonData)
      })
    }
  },
  modules: {
  }
})
