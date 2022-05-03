import SideBarButton from "./SideBarButton";
import { NavLink } from 'react-router-dom';

function Logo() {
    console.log('logo')
    return (
        <div className="d-flex align-items-center justify-content-between">
            <NavLink to={'/leaseit'} className={'logo d-flex align-items-center'} >
                <img src="/assets/img/logo.png" alt="image"/>
                <span className="d-none d-lg-block">Leaseit</span>
            </NavLink>
            <SideBarButton />
        </div>
    );
}

export default Logo;