import React from 'react'
import { NavBar } from '../components/NavBar/NavBar'
import { Search } from '../components/Search/Search'
// import { Link } from 'react-router-dom'
import { CardList } from '../components/CardList/CardList'
import { TypesPokemon } from '../components/TypesPokemon/TypesPokemon'

export const Home = () => {
    return (
        <div>
            <NavBar />
            <div><h2>!!Holis¡¡ </h2></div>
            <Search/>
            <TypesPokemon />
            <CardList />
        </div>
    )
}
