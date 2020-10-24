module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
    es2021: true,
  },
  plugins: ['react', '@typescript-eslint'],
  extends: ['plugin:prettier/recommended'],
  ignorePatterns: ['node_modules/', '.vscode/', 'dist/'],
  rules: {},
};
