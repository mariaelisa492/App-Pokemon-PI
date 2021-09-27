import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getPokemonName} from '../../actions'
import logoLupa from '../../assets/img/lupa.png'

import './search.scss'

export const Search = ({setPokeCurrent}) => {
    const dispatch = useDispatch();
    const pokeFilter = useSelector(state => state.pokemonsFilter)
    const [inputValue, setInputValue] = useState("");


    const handleInputChange = (e)=>{
        setInputValue(e.target.value)         
              //obtengo todo lo que entra en el input
    }

    const handleClick = () =>{
        dispatch(getPokemonName(inputValue))
        setInputValue("");
}

    useEffect(() => {
        setPokeCurrent(pokeFilter)
    }, [pokeFilter, setPokeCurrent])

    return (
        <div className='search'>
            <div>
                <input
                    placeholder="Search your pokemon"
                    type="text"
                    value = {inputValue}              //el value se va actualizando
                    onChange = {handleInputChange} 
                />
                <button type="button" onClick={handleClick}><img src={logoLupa} width="50" height="50" alt="search pokemon"/></button>
            </div>
        </div>
    )
}



// const handleSubmit = (e) =>{
//     e.preventDefault();         //previene que se recargue la pagina con el submit(recibe el evento del enter)
//     console.log('handleSubmit')
//         if (inputValue.trim().length > 2){
//             setCategories(cats => [inputValue, ...cats,]);
//             setInputValue('');
//         }
// }