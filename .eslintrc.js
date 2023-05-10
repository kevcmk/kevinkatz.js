module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "next/core-web-vitals",
        "plugin:react/recommended",
        "standard-with-typescript",
        "plugin:prettier/recommended",
    ],
    ignorePatterns: ["src/lib/create-emotion-cache.ts"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "tsconfig.json",
    },
    plugins: ["react"],
    rules: {
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/space-before-function-paren": "off",
        "@typescript-eslint/no-misused-promises": "off",
    },
};
