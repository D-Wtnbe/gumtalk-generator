"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const title =
    pathname === "/jpn"
      ? "日本語名詞"
      : pathname === "/trend"
        ? "Google 検索トレンド"
        : pathname === "/phrase"
          ? "会話フレーズ"
          : "ガムトークジェネレーター";

  const navItems = [
    { href: "/jpn", label: "日本語名詞", icon: "🇯🇵" },
    { href: "/trend", label: "Googleトレンド", icon: "📈" },
    { href: "/phrase", label: "フレーズ", icon: "💬" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="group flex items-center">
              <Image
                src="/icon.png"
                width={40}
                height={40}
                alt="logo"
                className="rounded-lg shadow-sm"
              />
              <span className="font-zenMaru ml-3 text-lg font-bold text-slate-800 transition-colors group-hover:text-primary-600 md:text-xl">
                {title}
              </span>
            </Link>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden space-x-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-zenMaru flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:ring-2 focus:ring-primary-500 focus:outline-none focus:ring-inset"
              aria-label="メニューを開く"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isOpen && (
        <div className="border-t border-slate-200 md:hidden">
          <div className="space-y-2 bg-white px-4 pt-2 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-zenMaru flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 font-medium text-slate-700 transition-colors hover:bg-slate-100"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
