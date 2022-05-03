import React from 'react';
import { useTranslation } from 'react-i18next';

function SignatoryInProgress() {

  const { t } = useTranslation('sideNav');

  return (
    <div>
      <p>Signatory {t("inProgress")}</p>
    </div>
  );
}

export default SignatoryInProgress;