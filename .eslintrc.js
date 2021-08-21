module.exports = {
  env: {
    node: true,
    jest: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    eqeqeq: 'warn',
    'prettier/prettier': 'error',
    'no-unused-vars': ['error', { args: 'none' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  },
  ignorePatterns: 'dist/*'
};
