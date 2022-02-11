import React from 'react';
import { useTranslation } from 'react-i18next';

function LeasingManagerToProcess() {

    const { t } = useTranslation();

    return (
        <div>
            <p>Leasing Manager {t("toProcess")}</p>
        </div>
    );
}

export default LeasingManagerToProcess;