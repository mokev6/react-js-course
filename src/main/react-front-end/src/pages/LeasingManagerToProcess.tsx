import React from 'react';
import { useTranslation } from 'react-i18next';

function LeasingManagerToProcess() {

    const { t } = useTranslation('sideNav');

    return (
        <div>
            <p>Leasing Manager {t("toProcess")}</p>
        </div>
    );
}

export default LeasingManagerToProcess;