import React from 'react';
import { useTranslation } from 'react-i18next';

function Welcome() {

    const { t } = useTranslation();

    return (
        <p>{t("welcome")}</p>
    );
}

export default Welcome;