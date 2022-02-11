import React from 'react';
import 'flag-icon-css/css/flag-icons.min.css';
import i18n from "i18next";
import { useTranslation } from 'react-i18next';
import cookie from 'js-cookie';

const languages = [
    {
        code: 'fr',
        name: 'Français',
        country_code: 'fr'
    },
    {
        code: 'en',
        name: 'English',
        country_code: 'gb'
    }
];

function Language() {

    const { t } = useTranslation();
    const changeLanguageHandler = code => i18n.changeLanguage(code);
    const currentLanguage = cookie.get('i18next') || 'en';

    return (
        <div className='d-flex justify-content-end'>
            <div className="dropdown">
                <button className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-globe"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow" aria-labelledby="dropdownMenuButton1">
                    <li><span className='dropdown-item-text'>{t('language')}</span></li>
                    {
                        languages.map(({ code, name, country_code }) => (
                            <li key={country_code}>
                                <button className="dropdown-item" onClick={() => changeLanguageHandler(code)} disabled={currentLanguage === code}>
                                    <span className={`flag-icon flag-icon-${country_code} mx-2`} style={{ opacity: currentLanguage === code ? 0.5 : 1 }}></span>
                                    {name}
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Language;