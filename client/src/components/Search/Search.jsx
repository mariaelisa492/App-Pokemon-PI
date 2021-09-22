import React from 'react'
import './search.scss'

export const Search = () => {
    return (
        <div className='search'>
            <form>
                <input
                    placeholder="Search your pokemon"
                    type="text"
                    // value="pokemon"
                    // onChange={event => setSearchText(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
