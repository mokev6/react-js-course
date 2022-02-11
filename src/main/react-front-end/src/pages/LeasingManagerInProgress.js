import React from 'react';
import { useTranslation } from 'react-i18next';

function LeasingManagerInProgress() {

    const { t } = useTranslation();
    console.log('ghdfkjghfdk')

    return (
        <div>
            <p> Leasing Manager {t("inProgress")}</p>
        </div>
    );
}

export default LeasingManagerInProgress;