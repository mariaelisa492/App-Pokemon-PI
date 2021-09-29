import React from 'react'
import img from '../../helpers/powerType'
import {Link} from 'react-router-dom'
import './card.scss'

export const Card = ({ id, name, sprite, types }) => {
    return (
        <div className='pokemonCard'>
            <Link to={'detail/' + id}>
                <button>
                    <div>
                        <h3 className='capitalizeText'>{name}</h3>
                        <ul className='typeList'>
                            {types.map(type => (
                                <img src={img[type.name]} alt={`Type: ${type.name}`} key={type.name}/>  //le paso la propiedad como type.name para que renderize cada type
                            ))}
                        </ul>
                    </div>
                    <div className='image'>
                        <img src={sprite}
                            width={200}
                            height={130}
                            alt={name}    
                        />
                    </div>
                </button>
            </Link>
        </div>
    )
}