/* eslint-disable import/prefer-default-export, react/prop-types, react/jsx-filename-extension */
import React from 'react';
import { Wrapper } from 'gatsby-theme-q3/components';

export const wrapRootElement = (
  { element },
  themeSettings,
) => <Wrapper {...themeSettings}>{element}</Wrapper>;
