import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { CardList } from '../CardList/CardList'
import { TypesPokemon } from '../TypesPokemon/TypesPokemon'
import {Search} from '../Search/Search'
import { getPokemons } from '../../actions'
import './pokedex.scss'

export const Pokedex = ({pokeTotal}) => {
    const [pokeCurrent, setPokeCurrent] = useState(pokeTotal);
    const pokeFilter = useSelector(state => state.pokemonsFilter);
    const dispatch = useDispatch();
    
    useEffect( () => {
        setPokeCurrent(pokeTotal)
    },[pokeTotal])

    return (
        <div className="page-principal">
            <Search setPokeCurrent={setPokeCurrent}/>
            <TypesPokemon setPokeCurrent={setPokeCurrent}/>
            {(pokeFilter.length > 0 || !Array.isArray(pokeFilter)) &&
                <div className="cleanContainer">
                <button className="cleanFilter" onClick={() => dispatch(getPokemons())}>Clean</button>
            </div>
            }
            <CardList pokeCurrent={pokeCurrent}/>
        </div>
    )
}
