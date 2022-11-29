const restrictedGlobals = require("confusing-browser-globals");

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-restricted-globals": ["error"].concat(restrictedGlobals),
  },
};
