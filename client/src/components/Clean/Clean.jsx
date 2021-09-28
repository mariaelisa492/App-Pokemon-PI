import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../../actions'

export const Clean = () => {
    const pokeFilter = useSelector(state => state.pokemonsFilter);
    const dispatch = useDispatch();

    return (
        <div>
            {(pokeFilter.length > 0 || !Array.isArray(pokeFilter)) &&
                <div className="cleanContainer">
                    <button className="cleanFilter" onClick={() => dispatch(getPokemons())}>Clean</button>
                </div>
            }
        </div>
    )
};
