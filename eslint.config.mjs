import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint, { plugin } from "typescript-eslint";
import { defineConfig } from "eslint-define-config";

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig({
  files: ["**/*.{js,mjs,cjs,ts}"],
  languageOptions: {
    globals: globals.browser,
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "error",
    "no-console": "warn",
    "no-unused-vars": "warn",
  },
  env: {
    browser: true,
    es6: true,
  },
});
