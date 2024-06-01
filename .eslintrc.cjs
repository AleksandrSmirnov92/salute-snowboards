module.exports = {
  root: true,
  env: {  browser: true,
    es6: true,
    jest: true},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ["react", "@typescript-eslint", "jest"],
  rules: {
    "react/react-in-jsx-scope": "off"
  }

}
