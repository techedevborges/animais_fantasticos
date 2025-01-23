import globals from "globals";
import pluginJs from "@eslint/js";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  js.configs.recommended,
  eslintConfigPrettier,

  {
    rules: {
      "no-console": 0,
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "no-multiple-empty-lines": "error",
      "eol-last": ['error', 'always'],
      semi: ["error", "always"],
      "no-trailing-spaces": "error",
      "operator-assignment": "error",
      "no-inner-declarations": [
        "error",
        "functions",
        { blockScopedFunctions: "disallow" },
      ]

    }
  }
];