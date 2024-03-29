const EXTENSIONS = ['.js', '.ts', 'tsx'];

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint'],
  settings: {
    'import/extensions': EXTENSIONS,
    'import/parsers': {
      '@typescript-eslint/parser': EXTENSIONS,
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
      node: {
        extensions: EXTENSIONS,
      },
    },
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'no-shadow': 'off',
    'no-param-reassign': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
  },
  overrides: [
    {
      files: './src/**/*.test.{ts,tsx}',
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'max-classes-per-file': 'off',
      },
    },
  ],
};
