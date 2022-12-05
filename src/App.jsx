//https://pokeapi.co/api/v2/pokemon

import {useEffect, useState} from 'react'
import axios from 'axios'

import { ContainerItem, Ul, H1} from './styled'

const App = () =>{

  const [pokemon, setpokemon] = useState([])

  useEffect(() =>{
    dadosDaApiPokemon()

  }, [])

  const dadosDaApiPokemon = () =>{
    let pokemonApi = []
    for ( let i = 1; i < 150; i++){
      pokemonApi.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    axios.all(pokemonApi.map((pokemon) => axios.get(pokemon))).then((res) => setpokemon(res))
  }

  return (
    <ContainerItem>
    <H1>Pokedex</H1>
   
   <div>
    <Ul isVisible={pokemon}>
      {
        pokemon.map((pokemon) =>{
          return(
            <li>
              <di>
              <img src={pokemon.data.sprites.front_shiny} alt={pokemon.name} />
              </di>

              <p>{pokemon.data.id}. {pokemon.data.name}</p>
            </li>
          )

        })
      }
    </Ul>
    </div>    
    </ContainerItem>
  )

}

export default App