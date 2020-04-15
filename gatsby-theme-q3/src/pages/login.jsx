import React from 'react';
import { Login as LoginPreset } from 'q3-ui-forms/lib/presets';
import { LinkTo } from 'q3-admin/lib/components';

export default () => (
  <LoginPreset>
    <LinkTo destination="password-reset" />
    <LinkTo destination="reverify" />
  </LoginPreset>
);
