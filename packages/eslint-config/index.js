module.exports = {
  extends: ['@rocketseat/eslint-config/react', 'plugin:mdx/recommended'],
  settings: {
    "mdx/code-blocks": true,
    // optional, if you want to disable language mapper, set it to `false`
    // if you want to override the default language mapper inside, you can provide your own
    "mdx/language-mapper": {}
  },
  rules: {
    "@typescript-eslint/no-empty-interface": "off"
  }
}