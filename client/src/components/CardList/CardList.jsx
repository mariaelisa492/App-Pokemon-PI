import React from 'react'
import { Card } from '../Card/Card'
import './cardList.scss'

export const CardList = ({pokeCurrent}) => {

    return (
        <div className='cardList'>
			{
				pokeCurrent.map(poke => (
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


