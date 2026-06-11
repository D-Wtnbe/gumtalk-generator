import eslintJs from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import eslintReact from "@eslint-react/eslint-plugin";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

/** @type {import("eslint").Linter.Config[]} */
const config = [
  // ESLint 推奨ルール
  eslintJs.configs.recommended,

  // typescript-eslint 推奨ルール
  ...tseslint.configs.recommended,

  // @eslint-react: React 19 + TypeScript 向け推奨プリセット（eslint-plugin-react の後継）
  {
    files: ["**/*.{ts,tsx}"],
    ...eslintReact.configs["recommended-type-checked"],
    languageOptions: {
      ...eslintReact.configs["recommended-type-checked"].languageOptions,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // React Hooks ルール
  {
    plugins: {
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
    },
  },

  // Next.js 専用ルール（eslint-config-next の代わりに直接 @next/eslint-plugin-next を使用）
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },

  // TypeScript / カスタムルール
  {
    rules: {
      // 未使用変数を警告（アンダースコア始まりは除外）
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      // console.log を警告（console.error/warn は許可）
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },

  // 除外ファイル
  {
    ignores: ["*.config.js", "*.config.mjs", ".next/**", "node_modules/**"],
  },
];

export default config;
