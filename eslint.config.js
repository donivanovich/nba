// @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'

export default [
  {
    ignores: [
      'eslint.config.js',
      'prettier.config.js',
      '.output/**',
      'node_modules/**',
      'dist/**',
    ],
  },
  ...tanstackConfig,
  {
    rules: {
      'import/no-cycle': 'off',
      'import/order': 'off',
      'sort-imports': 'off',
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/require-await': 'off',
      'pnpm/json-enforce-catalog': 'off',
    },
  },
]