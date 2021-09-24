import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsTypes } from '../../actions';
import imgType from '../../helpers/powerTypesIcon';
import './typesPokemon.scss'


export const TypesPokemon = ({pokeTotal, setPokeCurrent}) => {

    const types = useSelector(state => state.pokemonsTypes);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPokemonsTypes())
    }, [dispatch])
    
    const handlerChange = (type) => {
        const pokeFilter = pokeTotal.filter(poke => poke.types.map(type => type.name)[0] === type || poke.types.map(type => type.name)[1] === type)
        setPokeCurrent(pokeFilter)
    }

    return (
        <div className = "divTypes">
            {types.map( (type) => ( (type !== 'unknown' && type !== 'shadow') && 
                <button className='typesFilterButton' key={type} type="button" onClick={() => handlerChange(type)}>
                    <div className = "imageType">
                        <img src={imgType[type]} alt={`Type: ${type}`}/>
                    </div>
                    <span className = 'capitalizeText'>{type}</span>
                </button>
            ))}
        </div>
    )
}


