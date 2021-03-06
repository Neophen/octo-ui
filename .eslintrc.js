module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    "no-console":
      process.env.NODE_ENV === "production"
        ? ["error", { allow: ["error"] }]
        : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
  overrides: [
    {
      files: ["**/src/**/*.spec.js?(x)"],
      env: {
        jest: true,
      },
    },
  ],
};
