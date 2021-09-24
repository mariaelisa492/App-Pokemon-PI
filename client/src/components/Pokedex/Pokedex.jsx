import React, { useEffect, useState } from 'react'
import { CardList } from '../CardList/CardList'
import { TypesPokemon } from '../TypesPokemon/TypesPokemon'

export const Pokedex = ({pokeTotal}) => {

    const [pokeCurrent, setPokeCurrent] = useState(pokeTotal)
    
    useEffect( () => {
        setPokeCurrent(pokeTotal)
    },[pokeCurrent])

    return (
        <div>
            <div><h2>!!Holis¡¡ </h2></div>
            <TypesPokemon pokeTotal={pokeTotal} setPokeCurrent={setPokeCurrent}/>
            <CardList pokeCurrent={pokeCurrent}/>
        </div>
    )
}
