// eslint.config.js
import { defineConfig } from "eslint/config";

export default defineConfig([
  // TypeScript files
  {
    files: ["**/*.{ts,cts,mts}"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: ["plugin:@typescript-eslint/recommended"],
  },
  // JavaScript files
  {
    files: ["**/*.{js,cjs,mjs}"],
    extends: ["eslint:recommended"],
  },
]);