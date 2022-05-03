import React from 'react';
import '../translations/i18n';
import { useTranslation} from 'react-i18next';

function Welcome() {

    const { t } = useTranslation('common');

    return (
        <p>{t('welcome')}</p>
    );
}

export default Welcome;