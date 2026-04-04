/** @type {import("prettier").Config} */
const config = {
  // Tailwind CSS クラスの自動ソート
  plugins: ["prettier-plugin-tailwindcss"],

  // 基本スタイル
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  useTabs: false,
  trailingComma: "es5",
  printWidth: 100,

  // JSX スタイル
  jsxSingleQuote: false,
  bracketSameLine: false,

  // Tailwind プラグイン設定
  tailwindStylesheet: "./src/styles/globals.css",
};

module.exports = config;