import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const arrTypes = [ 'bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water'];


export const Form = () => {
    const dispatch = useDispatch();
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
        sprite: ''
    });
    // const [errors, setErrors] = useState({});

    const handleInputChange = event => {
        setInput((prev) => ({...prev, [event.target.name]: event.target.value}));
        // setErrors(validate({...input, [event.target.name]: event.target.value}));
    }

    const handleSubmit = e => {
        e.preventDefault();
        // dispatch(addPokemon(input));
        setInput({
        name: '',
        hp: '',
        attack: '',
        defense: '',
        special_attack: '',
        special_defense: '',
        speed: '',
        weight: '',
        height: '',
        type1: '',
        type2: '',
        sprite: ''
      })
      }
    
    return (
        <div>
            <form onSubmit={e => handleSubmit(e)} className='divCreate'>
                <div className='divInputCreate'>
                    <label className='labelInput'>Name</label>
                    <input 
                        type='text' name='name' onChange={handleInputChange} value={input.name} placeholder='Name of Pokemon' className='inputCreate'/>
                    {/* {errors.name && (
                        // <p>{errors.name}</p>
                    )} */}
                </div>

                <div className='divInputCreate'>
                    <label className='labelInput'>Sprite</label>
                    <input
                        type='url' name='sprite' onChange={handleInputChange} value={input.sprite} placeholder='Sprite of Pokemon' className='inputCreate'/>
                    {/* {errors.sprite && (
                        // <p>{errors.sprite}</p>
                    )} */}
                </div>
                
                <div className='divInputCreate'>
                    <label className='labelInput'>Life</label>
                    <input
                        type='number' name='life' onChange={handleInputChange} value={input.life} placeholder='Life of Pokemon' className='inputCreate'/>
                    {/* {errors.hp && (
                        // <p>{errors.hp}</p>
                    )} */}
                </div>

                <div className='divInputCreate'>
                    <label className='labelInput'>Attack</label>
                    <input
                        type='number' name='attack' onChange={handleInputChange} value={input.attack} placeholder='Attack of Pokemon' className='inputCreate'/>
                    {/* {errors.attack && (
                        // <p>{errors.attack}</p>
                    )} */}
                </div>

                <div className='divInputCreate'>
                    <label className='labelInput'>Defense</label>
                    <input
                        type='number' name='defense' onChange={handleInputChange} value={input.defense} placeholder='Defense of Pokemon' className='inputCreate'/>
                    {/* {errors.defense && (
                        // <p>{errors.defense}</p>
                    )} */}
                </div>


                <div className='divInputCreate'>
                    <label className='labelInput'>Speed</label>
                    <input
                        type='number' name='speed' onChange={handleInputChange} value={input.speed} placeholder='Speed of Pokemon' className='inputCreate'/>
                    {/* {errors.speed && (
                        // <p>{errors.speed}</p>
                    )} */}
                </div>

                <div className='divInputCreate'>
                    <label className='labelInput'>Height</label>
                    <input
                        type='number' name='height' onChange={handleInputChange} value={input.height} placeholder='Height of Pokemon' className='inputCreate'/>
                    {/* {errors.height && (
                        // <p>{errors.height}</p>
                    )} */}
                </div>

                <div className='divInputCreate'>
                    <label className='labelInput'>Weight</label>
                    <input
                        type='number' name='weight' onChange={handleInputChange} value={input.weight} placeholder='Weight of Pokemon' className='inputCreate'/>
                    {/* {errors.weight && (
                        // <p>{errors.weight}</p>
                    )} */}
                </div>

                <div className='divCreateTypes'>
                    <select name='type1' onChange={handleInputChange} className='capitalizeText selectType'>
                    {arrTypes.map(type => 
                        <option value={type} key={type} className='capitalizeText'>{type}</option>
                    )}
                    </select>

                    <select name='type2' onChange={handleInputChange} className='capitalizeText selectType'>
                    {arrTypes.map(type => 
                        <option value={type} key={type} className='capitalizeText'>{type}</option>
                    )}
                    </select>
                </div>

                {input.name && (input.type1 || input.type2) && <button type='submit' className='btnCreate'> Create </button>}
                </form>
        </div>
    )
}
