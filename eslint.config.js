import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier"; // Ajout du plugin Prettier
import eslintConfigPrettier from "eslint-config-prettier"; // Ajout de la config Prettier pour désactiver les conflits

export default tseslint.config(
    { ignores: ["dist"] },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            "plugin:prettier/recommended", // Intégration de Prettier dans ESLint
            eslintConfigPrettier, // Désactivation des règles ESLint en conflit avec Prettier
        ],
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            prettier: prettier, // Ajout du plugin Prettier
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],
            camelcase: ["error", { properties: "always" }],
            "prettier/prettier": ["error"], // Exécution de Prettier comme règle ESLint
        },
    }
);
