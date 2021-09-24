import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { CardList } from '../CardList/CardList'
import { TypesPokemon } from '../TypesPokemon/TypesPokemon'
import {Search} from '../Search/Search'
import { getPokemons } from '../../actions'

export const Pokedex = ({pokeTotal}) => {
    const [pokeCurrent, setPokeCurrent] = useState(pokeTotal)
    const dispatch = useDispatch();
    
    useEffect( () => {
        setPokeCurrent(pokeTotal)
    },[pokeTotal])

    return (
        <div>
            <div><h2>Welcome to Pokedéx MariaDev </h2></div>
            <Search setPokeCurrent={setPokeCurrent}/>
            <TypesPokemon setPokeCurrent={setPokeCurrent}/>
            <div className="closeFilter">
                <button onClick={() =>dispatch(getPokemons())}>Clean</button>
            </div>
            <CardList pokeCurrent={pokeCurrent}/>
        </div>
    )
}
