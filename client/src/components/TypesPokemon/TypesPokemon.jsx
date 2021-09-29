import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsTypes, filterType} from '../../actions';
import imgType from '../../helpers/powerTypesIcon';
import './typesPokemon.scss'


export const TypesPokemon = ({setPokeCurrent}) => {

    const dispatch = useDispatch();
    const types = useSelector(state => state.pokemonsTypes);
    const pokeFilter = useSelector(state => state.pokemonsFilter)
    
    useEffect(() => {
        dispatch(getPokemonsTypes())
    }, [dispatch])

    useEffect(() => {
        setPokeCurrent(pokeFilter)
    }, [pokeFilter, setPokeCurrent])   //atento cambios filter
    
    
    return (
        <div className = "divTypes">
            {types.map( (type) => 
                <button className='typesFilterButton' key={type} type="button" onClick={() =>dispatch(filterType(type))}>
                    <div className = "imageType">
                        <img src={imgType[type]} alt={`Type: ${type}`}/>
                    </div>
                    <span className = 'capitalizeText'>{type}</span>
                </button>
            )}
        </div>
    )
}


