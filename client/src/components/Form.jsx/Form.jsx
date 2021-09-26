import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPokemon, getPokemonsTypes } from '../../actions';
import './form.scss'

export const Form = () => {
    const dispatch = useDispatch();
    const pokeTypes = useSelector(state => state.pokemonsTypes);
    const [input, setInput] = useState({
        name: '',
        life: '',
        attack: '',
        defense: '',
        speed: '',
        weight: '',
        height: '',
        type1: '',
        type2: '',
    });
    // const [errors, setErrors] = useState({});

    useEffect(() => {
        dispatch(getPokemonsTypes())
    }, [dispatch])

    const handleInputChange = event => {
        setInput((prev) => ({...prev, [event.target.name]: event.target.value}));
        // setErrors(validate({...input, [event.target.name]: event.target.value}));
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log("newPoke1", input)
        dispatch(addPokemon(input));
        setInput({
        name: '',
        life: '',
        attack: '',
        defense: '',
        speed: '',
        weight: '',
        height: '',
        type1: '',
        type2: ''
        })
    }
    
    return (
        <div className="form-container">
            <form onSubmit={event => handleSubmit(event)} className='divCreate'>
                <div className='divInputCreate'>
                    <label className='labelInput'>Name</label>
                    <input 
                        type='text' name='name' onChange={handleInputChange} value={input.name} className='inputCreate'/>
                    {/* {errors.name && (
                        // <p>{errors.name}</p>
                    )} */}
                </div>
                
                <div className='divInputCreate'>
                    <label className='labelInput'>Life</label>
                    <input
                        type='number' name='life' onChange={handleInputChange} value={input.life} placeholder='#' min="0" max="255" className='inputCreate'/>
                    {/* {errors.hp && (
                        // <p>{errors.hp}</p>
                    )} */}
                </div>

                <div className='divInputCreate'>
                    <label className='labelInput'>Attack</label>
                    <input
                        type='number' name='attack' onChange={handleInputChange} value={input.attack} placeholder='#' min="0" max="255" className='inputCreate'/>
                    {/* {errors.attack && (
                        // <p>{errors.attack}</p>
                    )} */}
                </div>

                <div className='divInputCreate'>
                    <label className='labelInput'>Defense</label>
                    <input
                        type='number' name='defense' onChange={handleInputChange} value={input.defense} placeholder='#' min="0" max="255" className='inputCreate'/>
                    {/* {errors.defense && (
                        // <p>{errors.defense}</p>
                    )} */}
                </div>


                <div className='divInputCreate'>
                    <label className='labelInput'>Speed</label>
                    <input
                        type='number' name='speed' onChange={handleInputChange} value={input.speed} placeholder='#' min="0" max="255" className='inputCreate'/>
                    {/* {errors.speed && (
                        // <p>{errors.speed}</p>
                    )} */}
                </div>

                <div className='divInputCreate'>
                    <label className='labelInput'>Height</label>
                    <input
                        type='number' name='height' onChange={handleInputChange} value={input.height} placeholder='#' min="0" max="255" className='inputCreate'/>
                    {/* {errors.height && (
                        // <p>{errors.height}</p>
                    )} */}
                </div>

                <div className='divInputCreate'>
                    <label className='labelInput'>Weight</label>
                    <input
                        type='number' name='weight' onChange={handleInputChange} value={input.weight} placeholder='#' min="0" max="255" className='inputCreate'/>
                    {/* {errors.weight && (
                        // <p>{errors.weight}</p>
                    )} */}
                </div>

                <div className='divCreateTypes'>
                    <select name='type1' onChange={handleInputChange} className='capitalizeText selectType'>
                    {pokeTypes.map(type => 
                        <option value={type} key={type} className='capitalizeText'>{type}</option>
                    )}
                    </select>

                    <select name='type2' onChange={handleInputChange} className='capitalizeText selectType'>
                    {pokeTypes.map(type => 
                        <option value={type} key={type} className='capitalizeText'>{type}</option>
                    )}
                    </select>
                </div>

                {input.name && (input.type1 || input.type2) && <button type='submit' className='btnCreate'> Create </button>}
                </form>
        </div>
    )
}
