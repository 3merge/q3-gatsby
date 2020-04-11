/* eslint-disable import/prefer-default-export, react/prop-types, react/jsx-filename-extension */
import React from 'react';
import { Wrapper } from './components';

export const wrapRootElement = ({ element }, plugin) => (
  <Wrapper {...plugin}>{element}</Wrapper>
);
