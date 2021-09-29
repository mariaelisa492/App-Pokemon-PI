import React from 'react';
import {Link} from 'react-router-dom';
import './button.scss'

export const Button = ({link, name, classname}) => {
    return (
        <div>
            <Link to={link}>
                <button className={classname}>{name}</button>
            </Link>
        </div>
    )
};
