import React from 'react';
import SideNavItem from './SideNavItem';
import { leasingManagerRoutes, OMRoutes, SignatoryRoutes } from '../../routes'
import { useTranslation } from 'react-i18next';

function SideNav() {

    const { t } = useTranslation();

    console.log("nav")

    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <SideNavItem navName="lm-nav" title={t("lmTitre")} links={leasingManagerRoutes} />
                <SideNavItem navName="om-nav" title={t("omTitre")} links={OMRoutes} />
                <SideNavItem navName="signatory-nav" title={t("singnataireTitre")} links={SignatoryRoutes} />
            </ul>
        </aside>
    );
}

export default SideNav;