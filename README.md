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
    // add any overrides if required
  },
};
```

### Using with Prettier

If you're using this plugin with [Prettier](https://prettier.io), add "prettier" at the end of your extends list:

```javascript
module.exports = {
  extends: ["@la-ots/eslint-config", "prettier"],
  rules: {
    // add any overrides if required
  },
};
```

## Running linters

Add the following scripts to your `package.json`:

```javascript
{
  "scripts": {
    "lint:js": "eslint **/*.js",
    "lint:js:fix": "eslint **/*.js --fix"
  }
}
```

Execute scripts:

```bash
npm run lint:js
```
