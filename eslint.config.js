import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      // Supplies react/jsx-uses-vars, without which ESLint does not count
      // JSX member expressions like <motion.div> as a use of `motion`.
      react.configs.flat.recommended,
      // Vite uses the automatic JSX runtime, so React need not be in scope.
      react.configs.flat['jsx-runtime'],
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    settings: {
      react: { version: 'detect' },
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      // This project does not use PropTypes and has no TypeScript; requiring
      // them would flag every presentational component for no real benefit.
      'react/prop-types': 'off',
    },
  },
])
