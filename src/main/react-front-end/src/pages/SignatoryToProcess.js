import React from 'react';
import { useTranslation } from 'react-i18next';

function SignatoryToProcess() {

    const { t } = useTranslation();

    return (
        <div>
            <p>Signatory {t("toProcess")}</p>
        </div>
    );
}

export default SignatoryToProcess;