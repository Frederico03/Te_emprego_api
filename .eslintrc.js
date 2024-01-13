module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'import/no-unresolved': 'off',
    'consistent-return': 'off',
    'no-console': 'off',
    'import/no-uresolved': 'off',
    'no-underscore-dangle': 'off',
    'prefer-promise-rejects-errors': 'off',
    'func-names': 'off',
    'new-cap': 'off',
    'no-shadow': 'off',
    'no-unused-expressions': 'off',
    'no-return-assign': 'off',
    'linebreak-style': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
