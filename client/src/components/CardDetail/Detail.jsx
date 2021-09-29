import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getPokemonDetail } from '../../actions';
import imgTypes from '../../helpers/powerTypesIcon';
import Loader from '../Loader/Loader';
import './detail.scss'

export const Detail = () => {
    const dispatch = useDispatch();
    const pokemonDetail = useSelector(state => state.pokemonDetail);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getPokemonDetail(id))
    }, [dispatch])

    const { sprite, life, types, name, height, attack, defense, speed, weight } = pokemonDetail;

    const truncateString = (str, num) => {
        if (str.length <= num) return str
        return str.slice(0, num) + '...'
    }

    return (
        <>
            {sprite && types && name ?
                <main className="containerDetail">
                    <div className="detailCard">
                        <h1 className="capitalizeText">{name}</h1>
                        <ul>
                            {types.map(type => (
                                <li type="none" key={type.name} >
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
                                        <span className="value">{height / 10}m</span>
                                    </div>
                                </li>
                                <li>
                                    <span className="label">Weight</span>
                                    <div>
                                        <span className="value">{weight / 10}kg</span>
                                    </div>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <p className="titleSection">Statistics</p>
                            <div>
                                <div><span>{`Life: ${life}`}</span></div>
                                <progress max='255' value={life}>{life}</progress>
                            </div>

                            <div>
                                <div><span>{`Attack: ${attack}`}</span></div>
                                <progress max='255' value={attack}>{attack}</progress>
                            </div>

                            <div>
                                <div><span>{`Defense: ${defense}`}</span></div>
                                <progress max='255' value={defense}>{defense}</progress>
                            </div>

                            <div>
                                <div><span>{`Speed: ${speed}`}</span></div>
                                <progress max='255' value={speed}>{speed}</progress>
                            </div>
                        </section>
                        <div>
                            <span>
                                <h5>#{truncateString(id.toString(),4)}</h5>
                            </span>
                        </div>
                    </div>
                </main>
                : <Loader />
            }
        </>
    )
}
