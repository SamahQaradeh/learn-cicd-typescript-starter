// eslint.config.js
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // JavaScript files
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: ["js"],               // if you want js plugin
    extends: ["plugin:js/recommended"],
    languageOptions: {
      globals: globals.node,
    },
  },
  // TypeScript files
  {
    files: ["**/*.{ts,mts,cts}"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: ["plugin:@typescript-eslint/recommended"],
    languageOptions: {
      globals: globals.node,
    },
  },
]);