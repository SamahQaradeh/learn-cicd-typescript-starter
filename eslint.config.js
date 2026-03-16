// eslint.config.js

import { defineConfig } from "eslint/config";

export default defineConfig({
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    // optional custom rules
    "no-unused-vars": "warn",
    "semi": ["error", "always"]
  }
});