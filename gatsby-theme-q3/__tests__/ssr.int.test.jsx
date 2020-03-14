import React from 'react';
import path from 'path';
import { i18n } from 'q3-ui-locale';
import { wrapRootElement } from '../gatsby-ssr';
import { themeTest as themeTestEn } from '../__fixtures__/en/titles.json';
import { themeTest as themeTestFr } from '../__fixtures__/fr/titles.json';

const getFixture = () =>
  path.resolve(__dirname, '../__fixtures__');

describe('SSR', () => {
  it('should init all content from directory', () => {
    global.mount(
      wrapRootElement(
        { element: <div /> },
        { localeSrc: getFixture() },
      ),
    );

    expect(i18n.t('titles:themeTest')).toMatch(themeTestEn);

    i18n.changeLanguage('fr');
    expect(i18n.t('titles:themeTest')).toMatch(themeTestFr);
  });
});
