import React, { useEffect, useState } from 'react';
import { CardList } from '../CardList/CardList';
import { TypesPokemon } from '../TypesPokemon/TypesPokemon';
import {Search} from '../Search/Search';
import { Clear } from '../Clear/Clear';
import { Sort } from '../Sort/Sort';
import './pokedex.scss';


export const Pokedex = ({pokeTotal}) => {
    const [pokeCurrent, setPokeCurrent] = useState(pokeTotal);
    
    useEffect( () => {
        setPokeCurrent(pokeTotal)
    },[pokeTotal])

    return (
        <div className="page-principal">
            <Search setPokeCurrent={setPokeCurrent}/>
            <TypesPokemon setPokeCurrent={setPokeCurrent}/>
            <Sort pokeTotal={pokeTotal} pokeCurrent={pokeCurrent} setPokeCurrent={setPokeCurrent}/>
            <Clear />
            <CardList pokeCurrent={pokeCurrent}/>
        </div>
    )
};
