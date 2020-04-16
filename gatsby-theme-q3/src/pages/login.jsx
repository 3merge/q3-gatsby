import React from 'react';
import { Link } from '@reach/router';
import { Trans, useTranslation } from 'react-i18next';
import { Login as LoginPreset } from 'q3-ui-forms/lib/presets';
import Typography from '@material-ui/core/Typography';
import FormBox from '../components/FormBox';

export default () => {
  const { t } = useTranslation();

  return (
    <FormBox
      renderBottom={<LoginPreset />}
      renderTop={
        <>
          <Typography variant="h1" gutterBottom>
            {t('titles:login')}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {t('descriptions:login')}
            <Link to="/password-reset">
              {t('labels:requestNewPassword')}
            </Link>
          </Typography>
          <Typography variant="body2" gutterBottom>
            <Trans i18nKey="descriptions:newUserReverify">
              {t('descriptions:loginReverify')}
              <Link to="/reverify">
                {t('labels:reverifyLink')}
              </Link>
            </Trans>
          </Typography>
        </>
      }
    />
  );
};
