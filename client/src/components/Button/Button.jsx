import React from 'react'
import {Link} from 'react-router-dom'

export const Button = ({link, name}) => {
    return (
        <div>
            <Link to={link}>
            <button>{name}</button>
            </Link>
        </div>
    )
}
