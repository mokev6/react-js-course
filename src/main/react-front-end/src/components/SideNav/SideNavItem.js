import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

function SideNavItem(props) {

  const { t } = useTranslation();
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
              <NavLink to={route.path}>
                <i className="bi bi-circle" /><span>{t(route.name)}</span>
              </NavLink>
            </li>
          )
        }
      </ul>
    </li>
  );
}

export default SideNavItem;