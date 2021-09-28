import React from 'react'
import './pokeNotFound.scss'
import poke_not_found from '../../assets/img/notFound.gif'

export const PokeNotFound = () => {
    return (
        <div className="poke-not-found">
            <img 
				src={poke_not_found}
				alt='Pikachu loader'
			/>
            <span className="title">Pokemon not found</span>
        </div> 
    )
}