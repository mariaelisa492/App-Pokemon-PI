import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getPokemonDetail } from '../../actions';
import imgTypes from '../../helpers/powerTypesIcon';
import { Button } from '../Button/Button';
import './detail.scss'

export const Detail = () => {
    const dispatch = useDispatch();
    const pokemonDetail = useSelector(state => state.pokemonDetail);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getPokemonDetail(id))
    }, [dispatch])

    const { sprite, life, types, name, height, attack, defense, speed, weight } = pokemonDetail;

    return (
        <>
            {sprite && types && name ?
                <main className="containerDetail">
                    <div className="detailCard">
                        <h3 className="capitalizeText">{name}</h3>
                        <ul className="typelist">
                            {types.map(type => (
                                <li type="none" key={type.name} className="typeName">
                                    <img className="imgTypes" src={imgTypes[type.name]} alt={`Type: ${type.name}`} />
                                    {type.name.replace(/\b[a-z]/g, c => c.toUpperCase())}
                                </li>
                            ))}
                        </ul>
                        <div>
                            <img src={sprite} width={300} height={200} alt={name} />
                        </div>
                    </div>
                    <div className="pokemonData">
                        <section>
                            <p className="titleSection">Pokedex Data</p>
                            <ul type="none" className="pokedexDataList">
                                <li>
                                    <span className="label">Height</span>
                                    <div>
                                        <span className="value">{height/10}m</span>
                                    </div>
                                </li>
                                <li>
                                    <span className="label">Weight</span>
                                    <div>
                                        <span className="value">{weight/10}kg</span>
                                    </div>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <p className="titleSection">Statistics</p>
                            <div className='divSStats'>
                                <div className='divSpanStats'><span>{`Life: ${life}`}</span></div>
                                <progress max='255' value={life} className='divPStats'>{life}</progress>
                            </div>

                            <div className='divSStats'>
                                <div className='divSpanStats'><span>{`Attack: ${attack}`}</span></div>
                                <progress max='255' value={attack} className='divPStats'>{attack}</progress>
                            </div>

                            <div className='divSStats'>
                                <div className='divSpanStats'><span>{`Defense: ${defense}`}</span></div>
                                <progress max='255' value={defense} className='divPStats'>{defense}</progress>
                            </div>

                            <div className='divSStats'>
                                <div className='divSpanStats'><span>{`Speed: ${speed}`}</span></div>
                                <progress max='255' value={speed} className='divPStats'>{speed}</progress>
                            </div>
                        </section>
                    </div>
                </main>
                : <Button />
            }
        </>
    )
}
