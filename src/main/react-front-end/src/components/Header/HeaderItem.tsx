import React, { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';

type Props = PropsWithChildren<{
    url: string,
    titre: string,
    class: string
}>

function HeaderItem(props: Props) {
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