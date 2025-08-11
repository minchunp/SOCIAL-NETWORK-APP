module.exports = {
   parser: "@typescript-eslint/parser",
   extends: ["eslint:recommended", "@typescript-eslint/recommended"],
   plugins: ["@typescript-eslint"],
   parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      project: "./tsconfig.json",
   },
   rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "prefer-const": "error",
      "no-var": "error",
   },
   ignorePatterns: ["dist/", "node_modules/"],
};
