module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'func-names': 'off',
    'react/self-closing-comp': 'off',
    'react/prop-types': 'off',
    'import/no-unresolved': 'off',
    'no-console': 'off',
    'no-unused-expressions': 'off',
    'no-restricted-globals': 'off',
    'no-alert': 'off',
  },
};
