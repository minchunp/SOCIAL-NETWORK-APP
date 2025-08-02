module.exports = {
   extends: ["expo", "@typescript-eslint/recommended"],
   parser: "@typescript-eslint/parser",
   plugins: ["@typescript-eslint"],
   rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "react-hooks/exhaustive-deps": "warn",
   },
   ignorePatterns: ["dist/", "node_modules/"],
};
