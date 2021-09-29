import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPokemon, getPokemonsTypes } from '../../actions';
import validator from '../Form/helpers/validator'
import swal from 'sweetalert';
import './form.scss';


export const Form = () => {
    const dispatch = useDispatch();
    const pokeTypes = useSelector(state => state.pokemonsTypes);
    const [errors, setErrors] = useState({});
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

    useEffect(() => {
        dispatch(getPokemonsTypes())
    }, [dispatch])

    const handleInputChange = event => {
        setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
        setErrors(validator({ ...input, [event.target.name]: event.target.value }));
    }

    const handleSubmit = event => {
        swal("Excellent!", "You created a new pokemon!", "success")
        event.preventDefault();
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
        <main className="form-container">
            <div className="detailCard">
                <h2 className="title">Create your favorite Pokemon</h2>
            </div>
            <div className="pokemonData">
                <form onSubmit={event => handleSubmit(event)} className='divCreate'>
                    <div className='divInputCreate'>
                        <input
                            type='text' name='name' onChange={handleInputChange} placeholder="Name" value={input.name} required autoComplete='off' className='inputCreate' />
                    </div>
                        {errors.name && (
                            <p className='error-input'>{errors.name}</p>
                        )}

                    <div className='divInputCreate'>
                        <input
                            type='number' name='life' onChange={handleInputChange} value={input.life} placeholder='Life' min="0" max="255" required className='inputCreate' />
                    </div>
                        {errors.life && (
                            <p className='error-input'>{errors.life}</p>
                        )}

                    <div className='divInputCreate'>
                        <input
                            type='number' name='attack' onChange={handleInputChange} value={input.attack} placeholder='Attack' min="0" max="255" required className='inputCreate' />
                    </div>
                        {errors.attack && (
                            <p className='error-input'>{errors.attack}</p>
                        )}

                    <div className='divInputCreate'>
                        <input
                            type='number' name='defense' onChange={handleInputChange} value={input.defense} placeholder='Defense' min="0" max="255" required className='inputCreate' />
                    </div>
                        {errors.defense && (
                            <p className='error-input'>{errors.defense}</p>
                        )}

                    <div className='divInputCreate'>
                        <input
                            type='number' name='speed' onChange={handleInputChange} value={input.speed} placeholder='Speed' min="0" max="255" required className='inputCreate' />
                    </div>
                    {errors.speed && (
                        <p className='error-input'>{errors.speed}</p>
                    )}

                    <div className='divInputCreate'>
                        <input
                            type='number' name='height' onChange={handleInputChange} value={input.height} placeholder='Height' min="0" max="255" required className='inputCreate' />
                    </div>
                    {errors.height && (
                        <p className='error-input'>{errors.height}</p>
                    )}

                    <div className='divInputCreate'>
                        <input
                            type='number' name='weight' onChange={handleInputChange} value={input.weight} placeholder='Weight' min="0" max="255" required className='inputCreate' />
                    </div>
                        {errors.weight && (
                            <p className='error-input'>{errors.weight}</p>
                        )}

                    <div className="dropdown">
                        <select name='type1' onChange={handleInputChange} className='capitalizeText'>
                            <option value="Type One">Type One</option>
                            {pokeTypes.map(type =>
                                <option value={type} key={type} className='capitalizeText'>{type}</option>
                            )}
                        </select>
                    </div>
                    <div className="dropdown">
                        <select name='type2' onChange={handleInputChange} className='capitalizeText'>
                            <option value="Type Two">Type Two</option>
                            {pokeTypes.map(type =>
                                <option value={type} key={type} className='capitalizeText'>{type}</option>
                            )}
                        </select>
                    </div>

                    <div>
                        <button type='submit' className='action-button'> Create </button>
                    </div>

                </form>
            </div>
        </main>
    )
}
