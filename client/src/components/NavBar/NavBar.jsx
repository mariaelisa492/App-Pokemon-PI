import React from 'react'
import { Link } from 'react-router-dom'
import pokebola from '../../assets/img/pokebola.png'
import {Button} from '../Button/Button'
import Logo from '../../assets/img/logoPokemon.png'
import './navBar.scss'

export const NavBar = () => {
    return (
        <header className = 'navBar'>
            <div className = 'return'>
                <Link to={'/main'}> <img src={pokebola} alt="pokepola" height='50' width='50'/></Link>
            </div>

            <div>
                <img 
                src={Logo} 
                width={170}
                height={130}
                alt="PruebaInicio" />
            </div>
            
            <div>
                <Button />
            </div>
        </header>
    )
}
