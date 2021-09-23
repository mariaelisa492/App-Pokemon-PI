import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonDetail } from '../../actions';
import { NavBar } from '../NavBar/NavBar';
import imgTypes from '../../helpers/powerTypesIcon';
import { Button } from '../Button/Button';
import './detail.scss'

export const Detail = ({match}) => {
const dispatch = useDispatch();
const pokemonDetail = useSelector(state => state.pokemonDetail);

useEffect(() => {
    dispatch(getPokemonDetail(match.params.id))
}, [dispatch])

const {id, sprite, life, types, name, height, attack, defense,  speed, weight} = pokemonDetail;

    return (
        <>
            <NavBar />
            {sprite && types && name ?
            <main  className="containerDetail">
                <div className = "detailCard">
                        <h3 className="capitalizeText">{name}</h3>
                        <ul className="typelist">
                                {types.map(type => (
                                    <li type="none" key={type.name} className="typeName">
                                        <img className = "imgTypes" src={imgTypes[type.name]} alt={`Type: ${type.name}`}/>
                                        {type.name.replace(/\b[a-z]/g,c=>c.toUpperCase())}
                                    </li>
                                ))}
                            </ul>
                <div>
                <img src={sprite} width={300} height={200} alt={name}/>
                </div>


                </div>
            </main>
            : <Button />
            }
        </>
    )
}
