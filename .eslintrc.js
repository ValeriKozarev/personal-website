module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended"
  ],
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "rules": {
    // error only in production
    "no-unused-vars": process.env.NODE_ENV === "production" ? "error" : "warn"
  }
}