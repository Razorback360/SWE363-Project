// @ts-check
import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import tsdoc from 'eslint-plugin-tsdoc';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['**/dist/', '**/node_module/'] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2015,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'module',
        tsconfigRootDir: import.meta.dirname,
        project: [
          './tsconfig.eslint.json',
          './client/tsconfig.json',
          './server/tsconfig.json',
        ],
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'eslint-plugin-tsdoc': tsdoc,
    },
  },
);
