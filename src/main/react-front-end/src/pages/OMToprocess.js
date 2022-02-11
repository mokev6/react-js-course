import React from 'react';
import { useTranslation } from 'react-i18next';

function OMToprocess() {

    const { t } = useTranslation();

    return (
        <div>
            <p>OM {t("toProcess")}</p>
        </div>
    );
}

export default OMToprocess;