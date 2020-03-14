/* eslint-disable import/prefer-default-export, react/prop-types, react/jsx-filename-extension */
import React from 'react';
import axios from 'axios';
import { i18n } from 'q3-ui-locale';
import { Wrapper } from './components';
import iterateLocaleBundles from './helpers/iterateLocaleBundles';

export const wrapRootElement = (
  { element },
  { baseURL = 'localhost:9000', theme, locale },
) => {
  axios.defaults.baseURL = baseURL;
  iterateLocaleBundles(i18n, locale);

  return <Wrapper theme={theme}>{element}</Wrapper>;
};
