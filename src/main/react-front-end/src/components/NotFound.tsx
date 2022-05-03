import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function NotFound() {

    const { t } = useTranslation('notFound');

    return (
        <div className="container">
            <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
                <h1>404</h1>
                <h2>{t('error404')}</h2>
                <Link to={'/leaseit'} className="btn">{t('backHome')}</Link>
                <img src="/assets/img/not-found.svg" className="img-fluid py-5" alt="Page Not Found" />
            </section>
        </div>
    );
}

export default NotFound;