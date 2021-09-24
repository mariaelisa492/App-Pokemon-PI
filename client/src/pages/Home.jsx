import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getPokemons } from '../actions'
import { NavBar } from '../components/NavBar/NavBar'
import { Pokedex } from '../components/Pokedex/Pokedex'

export const Home = () => {

    const dispatch = useDispatch();
    const pokeTotal = useSelector(state => state.pokemonsTotal)

    useEffect( () => {
        dispatch(getPokemons())
    }, [dispatch])

    return (
        <div>
            <NavBar />
            <Pokedex pokeTotal={pokeTotal}/>
        </div>
    )
}
