import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPokemons } from '../actions';
import { NavBar } from '../components/NavBar/NavBar';
import { Pokedex } from '../components/Pokedex/Pokedex';
import Loader from '../components/Loader/Loader'

export const Home = () => {

    const dispatch = useDispatch();
    const pokeTotal = useSelector(state => state.pokemonsTotal)

    useEffect( () => {
        dispatch(getPokemons())
    }, [dispatch])

    return (
        <div>
            <NavBar />
            {pokeTotal.length > 0 ? <Pokedex pokeTotal={pokeTotal}/> : <Loader/>}
        </div>
    )
}
