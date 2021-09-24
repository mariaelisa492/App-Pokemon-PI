import React from 'react'
import { Card } from '../Card/Card'
import './cardList.scss'

export const CardList = ({pokeCurrent}) => {

    return (
        <div className='cardList'>
			{Array.isArray(pokeCurrent) ?
				pokeCurrent.map(poke => (
                <Card 
						key={poke.id}
						id={poke.id}
						name={poke.name}
						sprite={poke.sprite}
						types={poke.types}
					/>
                ))
			:<Card 
			key={pokeCurrent.id}
			id={pokeCurrent.id}
			name={pokeCurrent.name}
			sprite={pokeCurrent.sprite}
			types={pokeCurrent.types}
		/>}
		</div>
    )
}


