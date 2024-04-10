module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      parserOpts: {
        plugins: ["jsx"]
      },
      "presets": ["@babel/preset-react"],
    },
  },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "comma-dangle": ["error", "never"],
    quotes: ['error', 'single'],
    'react/prop-types': [0],
    'indent': ['error', 'tab']
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts'],
      parser: '@typescript-eslint/parser', // Использовать парсер TypeScript для JavaScript файлов
      extends: [
        // Добавьте любые расширения, необходимые для TypeScript
        'plugin:@typescript-eslint/recommended',
        ]
    },
  ],
}
