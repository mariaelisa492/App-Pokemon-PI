import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getPokemons } from '../../actions'
import { Card } from '../Card/Card'
import './cardList.scss'


export const CardList = () => {
    const dispatch = useDispatch();
    const pokeTotal = useSelector(state => state.pokemonsTotal)

    useEffect(() => {
        dispatch(getPokemons())
    }, [dispatch])


    return (
        <div className='cardList'>
			{
				pokeTotal.map(poke => (
                <Card 
						key={poke.id}
						id={poke.id}
						name={poke.name}
						sprite={poke.sprite}
						types={poke.types}
					/>
                ))
			}
		</div>
    )
}


