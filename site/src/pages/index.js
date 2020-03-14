import React from 'react';
import { Seo } from 'gatsby-theme-q3/components';
import { useTranslation } from 'react-i18next';
import Header from 'q3-ui/lib/header';
import Button from '@material-ui/core/Button';

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo title={t('titles:sample')} />
      <Header />
      <Button variant="contained" color="primary">
        {t('labels:lorem')}
      </Button>
    </>
  );
};

export default IndexPage;
