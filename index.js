module.exports = {
  extends: [
    '@antfu',
    'plugin:import/recommended',
    'plugin:markdown/recommended',
    'plugin:md/recommended',
    'plugin:prettier/recommended',
    'plugin:yml/standard',
    'plugin:yml/prettier',
  ],
  plugins: ['unused-imports'],
  overrides: [
    {
      files: ['*.md'],
      parser: 'markdown-eslint-parser',
      rules: {
        'prettier/prettier': ['error', { parser: 'markdown' }],
      },
    },
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
    },
  ],
  rules: {
    'no-console': 'off',
  },
}
