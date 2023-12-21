module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        'eslint:recommended', // JavaScript rules
        'plugin:@typescript-eslint/recommended', // TypeScript rules
        'plugin:vue/vue3-recommended' // Vue3.js rules
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    "rules": {
        'vue/multi-word-component-names': "off",
        "vue/max-attributes-per-line": "off",
        "vue/html-closing-bracket-newline": "off"
    }
}
