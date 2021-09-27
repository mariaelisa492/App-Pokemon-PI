import React from 'react'
import Logo from '../assets/img/logoPokemon.png'
import {Button} from '../components/Button/Button'


export const Main = () => {
    return (
        <div>
            <img src={Logo} alt="PruebaInicio" />
            <Button link={'/home'} name={"Let's Go"} classname={"primary"}/>
        </div>
    )
}
