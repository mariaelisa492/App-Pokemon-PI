import React from 'react'
import {Link} from 'react-router-dom'

export const Button = () => {
    return (
        <div>
            <Link to='/home'>
            <button>Let's Go</button>
            </Link>
        </div>
    )
}
