import React from 'react';
import { PasswordReset as PasswordResetPreset } from 'q3-ui-forms/lib/presets';
import { LinkTo } from 'q3-admin/lib/components';

export default () => (
  <PasswordResetPreset>
    <LinkTo destination="login" />
  </PasswordResetPreset>
);
