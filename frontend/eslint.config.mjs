import js from '@eslint/js';
import ts from 'typescript-eslint';
import react from 'eslint-plugin-react';
import hooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
// Keep React, hooks and TypeScript checks without the vulnerable fast-glob/braces
// chain in eslint-config-next. Next build remains the framework/type-check gate.
export default ts.config(
  { ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts', 'public/assets/vendor/**'] },
  js.configs.recommended,
  ...ts.configs.recommended,
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  { files: ['src/**/*.{ts,tsx}'], plugins: { react, 'react-hooks': hooks },
    settings: { react: { version: 'detect' } },
    rules: { ...react.configs.recommended.rules, ...react.configs['jsx-runtime'].rules,
      ...hooks.configs.recommended.rules, 'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }] } },
);
