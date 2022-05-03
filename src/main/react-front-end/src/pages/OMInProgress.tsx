import React from 'react';
import { useTranslation } from 'react-i18next';

function OMInProgress() {

    const { t } = useTranslation('sideNav');

    return (
        <div>
            <p>OM {t("inProgress")}</p>
        </div>
    );
}

export default OMInProgress;