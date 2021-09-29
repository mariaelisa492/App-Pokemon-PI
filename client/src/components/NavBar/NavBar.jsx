import React from 'react'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import pokebola from '../../assets/img/pokebola.png'
import { Button } from '../Button/Button'
import { getPokemons } from '../../actions'
import Logo from '../../assets/img/logoPokemon.png'
import './navBar.scss'

export const NavBar = () => {
    const dispatch = useDispatch();
    return (
        <header className='navBar'>
            <div className='return'>
                <Link to={'/main'}> <img src={pokebola} alt="pokepola" height='70' width='70' /></Link>
            </div>
            <div>
                <Link to={'/home'}>
                    <button className='homeButton' type="button" onClick={() =>dispatch(getPokemons())}>
                    <img className = 'imgHome'
                        src={Logo}
                        width={290}
                        height={210}
                        alt="PruebaInicio" />
                    </button>
                    
                </Link>
            </div>
            <div>
                <Button link={'/create'} name={"Create"} classname={"secundary"}/>
            </div>
        </header>
    )
}
