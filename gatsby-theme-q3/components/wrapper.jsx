import React from 'react';
import Provider from 'q3-ui';
import PropTypes from 'prop-types';
import { merge } from 'lodash';
import { ThemeProvider } from '@material-ui/styles';
import FormProviders from 'q3-ui-forms';
import AuthProvider from 'q3-ui-permissions';

const Wrapper = ({ children, theme }) => {
  const mergeWithQ3 = React.useCallback(
    (prevTheme) => merge(prevTheme, theme),
    [theme],
  );

  return (
    <Provider>
      <ThemeProvider theme={mergeWithQ3}>
        <AuthProvider>
          <FormProviders preventDuplicate>
            {children}
          </FormProviders>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
};

Wrapper.propTypes = {
  /**
   * The entire application. This should be a top-level wrapper.
   */
  children: PropTypes.node.isRequired,

  /**
   * See Material UI's documentation for what props go into the theme obj.
   */
  theme: PropTypes.shape({
    palette: PropTypes.object,
    typography: PropTypes.object,
    overrides: PropTypes.object,
  }).isRequired,
};

export default Wrapper;
