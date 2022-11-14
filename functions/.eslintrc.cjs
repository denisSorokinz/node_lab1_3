module.exports = {
  root: true,
  extends: ["custom"],
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
  ],
};