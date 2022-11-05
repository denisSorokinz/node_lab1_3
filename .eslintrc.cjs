module.exports = {
  env: {
    browser: false,
    es2021: true,
  },
  extends: ["google", "plugin:sonarjs/recommended", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
