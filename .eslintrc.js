module.exports = {
  extends: ['next', 'airbnb', 'next/core-web-vitals', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['.'],
      },
    },
  },
  rules: {
    indent: 'off',

    'react/jsx-filename-extension': [0],
    '@next/next/no-img-element': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-shadow': 'off',
    'no-nested-ternary': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
