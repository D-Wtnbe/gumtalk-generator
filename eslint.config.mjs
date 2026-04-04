import nextConfig from "eslint-config-next";

/** @type {import("eslint").Linter.Config[]} */
const config = [
  // Next.js 推奨ルールセット（flat config 形式 - 配列をスプレッド展開）
  ...(Array.isArray(nextConfig) ? nextConfig : [nextConfig]),

  // TypeScript / React カスタムルール
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
      // React 17+ JSX Transform のため不要
      "react/react-in-jsx-scope": "off",
    },
  },

  // 除外ファイル
  {
    ignores: ["*.config.js", "*.config.mjs", ".next/**", "node_modules/**"],
  },
];

export default config;
