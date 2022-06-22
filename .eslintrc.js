module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-filename-extension': ['warn', { extensions: ['.js'] }],
    'react/function-component-definition': ['off', { 'arrow-function': 0 }],
    'react/jsx-props-no-spreading': ['off'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
        jsxSingleQuote: true,
        trailingComma: 'all',
      },
    ],
    'jsx-quotes': ['error', 'prefer-single'],
  },
};
