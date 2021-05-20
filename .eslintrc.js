module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
  },
  extends: [
    //"plugin:diff/diff", // Alternatively diff/staged for commit only changes
    "eslint:recommended",
    "plugin:regexp/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:sonarjs/recommended",
    "plugin:promise/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:testing-library/dom",
    "plugin:testing-library/react",
    "plugin:prettier/recommended", // Should always be last
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: [
    "react",
    "react-hooks",
    //"only-warn",
    "sonarjs",
    "jest",
    "testing-library",
    "better-styled-components",
    "promise",
    "regexp",
  ],
  rules: {
    "react/react-in-jsx-scope": "off", // React 17+ made this optional
    "better-styled-components/sort-declarations-alphabetically": "warn",
    "promise/prefer-await-to-then": "warn",
    "promise/prefer-await-to-callbacks": "warn",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  },
}
