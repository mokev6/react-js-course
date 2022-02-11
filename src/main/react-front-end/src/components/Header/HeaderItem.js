import React from 'react';
import { NavLink } from 'react-router-dom';

function HeaderItem(props) {
    return (
        <li>
            <NavLink to={props.url} className={"dropdown-item d-flex align-items-center"} >
                <i className={`bi ${props.class}`}></i>
                <span>{props.titre}</span>
            </NavLink>
        </li>
    );
}

export default HeaderItem;