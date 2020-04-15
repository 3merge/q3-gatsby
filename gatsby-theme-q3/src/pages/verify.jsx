import React from 'react';
import { Verify as VerifyPreset } from 'q3-ui-forms/lib/presets';
import { LinkTo } from 'q3-admin/lib/components';

export default () => (
  <VerifyPreset>
    <LinkTo destination="reverify" />
  </VerifyPreset>
);
