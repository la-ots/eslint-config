# @la-ots/eslint-config

Standard rules for Javascript using [ESLint](https://eslint.org/) implemented as a common configuration.

## Installation

```bash
npm install --save-dev @la-ots/eslint-config
```

### Configure settings

Create `.eslintrc.js` file with the following content:

```javascript
module.exports = {
  extends: "@la-ots/eslint-config",
  rules: {
    // your custom rules here
  },
};
```

### Using with Prettier

If you're using this plugin with [Prettier](https://prettier.io), add "prettier" at the end of your extends list:

```javascript
module.exports = {
  extends: ["@la-ots/eslint-config", "prettier"],
  rules: {
    // your custom rules
  },
};
```

## Running linters

Add the following scripts to your `package.json`:

```javascript
{
  "scripts": {
    "lint-js": "eslint *.js"
  }
}
```

Execute scripts:

```bash
npm run lint-js
```
