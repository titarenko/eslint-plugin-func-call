# eslint-plugin-func-call

Eslint plugin to control function call code style

[![Build Status](https://travis-ci.org/titarenko/eslint-plugin-func-call.svg?branch=master)](https://travis-ci.org/titarenko/eslint-plugin-func-call)

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
npm i eslint --save-dev
```

Next, install `eslint-plugin-func-call`:

```
npm install eslint-plugin-func-call --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-func-call` globally.

## Usage

Add `func-call` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "func-call"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "func-call/opening-newline": ["error", 1]
    }
}
```

## Supported Rules

* `opening-newline` - prohibits insertion of newline after opening brace when function is called with less or `number` of arguments (1 by default)

## License

MIT
