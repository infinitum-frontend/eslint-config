module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "standard-with-typescript",
    "plugin:storybook/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    "space-before-function-paren": "off",
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    quotes: [
      "warn",
      "single",
      {
        avoidEscape: true,
      },
    ],
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: false,
      },
    ],
  },
  plugins: ["react"],
};
