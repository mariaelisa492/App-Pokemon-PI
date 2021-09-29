import React, { useEffect, useState } from 'react';
import { CardList } from '../CardList/CardList';
import { TypesPokemon } from '../TypesPokemon/TypesPokemon';
import {Search} from '../Search/Search';
import { Clean } from '../Clean/Clean';
import { Sort } from '../Sort/Sort';
import { Pagination } from '../Pagination/Pagination';
import {PokeNotFound} from '../pokeNotFound/PokeNotFound'
import './pokedex.scss';


export const Pokedex = ({pokeTotal}) => {
    const cards = 9;
    const [pokeCurrent, setPokeCurrent] = useState(pokeTotal);   //lo cargo
    
    useEffect( () => {
        setPokeCurrent([...pokeTotal].splice(0,cards))  //copia del poketotal
    },[pokeTotal])

    return (
        <div className="page-principal">
            <Search setPokeCurrent={setPokeCurrent}/>
            <TypesPokemon setPokeCurrent={setPokeCurrent}/>
            <Sort pokeTotal={pokeTotal} pokeCurrent={pokeCurrent} setPokeCurrent={setPokeCurrent}/>
            <Clean />
            {(pokeCurrent.length > 0 || (pokeCurrent.name !== undefined && pokeCurrent.name !== 'Error'))? <CardList pokeCurrent={pokeCurrent}/> : <PokeNotFound/>}
            <Pagination pokeTotal={pokeTotal} setPokeCurrent={setPokeCurrent}/>
        </div>
    )
};
