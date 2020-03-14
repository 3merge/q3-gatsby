const path = require('path');

module.exports = {
  extends: [
    'react-3merge'
  ],
  plugins: [
    'module-resolver'
  ],
  rules: {
    'react/no-array-index-key': 0,
    'import/prefer-default-export': 0,
    'import/no-duplicates': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'no-alert': 0,
  },
}
