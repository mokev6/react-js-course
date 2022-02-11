import React from 'react';
import { useTranslation } from 'react-i18next';

function OMInProgress() {

    const { t } = useTranslation();

    return (
        <div>
            <p>OM {t("inProgress")}</p>
        </div>
    );
}

export default OMInProgress;