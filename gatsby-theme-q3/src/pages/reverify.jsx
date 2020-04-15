import React from 'react';
import { Reverify as ReverifyPreset } from 'q3-ui-forms/lib/presets';
import { LinkTo } from 'q3-admin/lib/components';

export default () => (
  <ReverifyPreset>
    <LinkTo destination="verify" />
  </ReverifyPreset>
);
