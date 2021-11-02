module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  plugins: ["@typescript-eslint"],
  ignorePatterns: ["*.cjs", "app/**/*"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2019,
  },
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": ["off", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-non-null-assertion": "off",
    "no-undef": "off",
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
};
