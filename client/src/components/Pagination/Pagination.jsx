import React, { useState } from 'react'
import './paginator.scss';

export const Pagination = ({ pokeTotal, setPokeCurrent }) => {
    const cards = 9;
    const [currentPag, setCurrentPag] = useState(0);


    const next = () => {
        const totalPoke = pokeTotal.length
        const next = currentPag + 1
        const index = next * cards
        if (index > totalPoke) return;
        setPokeCurrent([...pokeTotal].splice(index, cards))
        setCurrentPag(next)
    };

    const prev = () => {
        const prev = currentPag - 1
        if (prev < 0) return;
        const index = prev * cards
        setPokeCurrent([...pokeTotal].splice(index, cards))
        setCurrentPag(prev)
    };

    return (
        <div>
            <div className='prev-next'>
                <button onClick={()=>prev()}>Prev</button>
                <label> {currentPag + 1}  </label>
                <button onClick={()=>next()}>Next</button>
            </div>
        </div>
    )
};
