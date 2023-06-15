const { configure, presets } = require('eslint-kit')

module.exports = configure({
  presets: [
    presets.react({ version: '18.0' }),
    presets.effector(),
    presets.prettier(),
    presets.typescript(),
  ],
  extend: {
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      'unicorn/number-literal-case': 'off',
      'no-case-declarations': 'off',
    },
  }
})
