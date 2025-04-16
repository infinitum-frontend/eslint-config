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
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/non-nullable-type-assertion-style": "off",
  },
  plugins: ["react"],
};
