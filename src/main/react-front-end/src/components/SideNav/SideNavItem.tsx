import React from 'react';
import '../../translations/i18n';
import { NavLink } from 'react-router-dom';
import SideNavLabel from './SideNavLabel';

const SideNavItem: React.FC<{title: string, navName: string, links: {
  path: string;
  name: string;
  component: JSX.Element;
}[]}
> = (props) => {

  console.log('nav item')
  
  return (
    <li className="nav-item">
      <a className="nav-link collapsed" data-bs-target={`#${props.navName}`} data-bs-toggle="collapse" >
        <i className="bi bi-menu-button-wide" /><span>{props.title}</span><i className="bi bi-chevron-down ms-auto" />
      </a>
      <ul id={`${props.navName}`} className="nav-content collapse" data-bs-parent="#sidebar-nav">
        {
          props.links && props.links.map((route, idx) =>
            <li key={idx}>
              <NavLink to={route.path} key={idx}>
                <SideNavLabel name={route.name}/>
              </NavLink>
            </li>
          )
        }
      </ul>
    </li>
  );
}

export default SideNavItem;