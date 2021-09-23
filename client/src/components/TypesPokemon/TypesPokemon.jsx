import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterType, getPokemonsTypes } from '../../actions';
import { PokemonFiltered } from './PokemonFiltered';
import imgType from '../../helpers/powerTypesIcon';
import './typesPokemon.scss'


export const TypesPokemon = () => {

    const types = useSelector(state => state.pokemonsTypes);
    const pokeFilter = useSelector(state => state.pokemonsFilter)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemonsTypes())
    }, [dispatch])

    

    return (
        <>
        <div className = "divTypes">
            {types.map( (type) => ( (type !== 'unknown' && type !== 'shadow') && 
            <div>
                <button className='typesFilterButton' key={type} type='button' value={type} onChange={(type) => dispatch(filterType(type.target.value))}>
                <div className = "imageType">
                <img src={imgType[type]} alt={`Type: ${type}`}/>
                </div>
                <span className = 'capitalizeText'>{type.replace(/\b[a-z]/g,c=>c.toUpperCase())}</span>
            </button>
            </div>
                
            ))}
        </div>
        <div className='cardList'>
                    {pokeFilter.length>0 && pokeFilter.map((poke) => <div key={poke.id}> 
                            <PokemonFiltered
                                id={poke.id}
                                name={poke.name}
                                sprite={poke.sprite}
                                types={poke.types}
                            />
                    </div>)}
		</div>
        </>
    )
}


