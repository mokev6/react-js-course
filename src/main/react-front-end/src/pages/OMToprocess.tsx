import React from 'react';
import { useTranslation } from 'react-i18next';

function OMToprocess() {

    const { t } = useTranslation('sideNav');

    return (
        <div>
            <p>OM {t("toProcess")}</p>
        </div>
    );
}

export default OMToprocess;