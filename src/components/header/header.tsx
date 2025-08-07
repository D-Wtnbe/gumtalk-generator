import Link from "next/link";
import Image from "next/image";
import { JSX } from "react";

export const Header = ({ title }: { title: string }): JSX.Element => (
  <div className="relative bg-white">
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link href="/" className="flex items-center">
            <Image src="/icon.png" width="54" height="54" alt="logo" />
            <span className="h-8 w-auto sm:h-10">{title}</span>
          </Link>
        </div>
        <nav className="hidden space-x-10 md:flex">
          <Link
            href="/jpn"
            className="text-base font-medium text-gray-700 hover:text-blue-700 transition-colors"
          >
            日本語名詞
          </Link>
          <Link
            href="/trend"
            className="text-base font-medium text-gray-700 hover:text-blue-700 transition-colors"
            aria-current="page"
          >
            Googleトレンド
          </Link>
          <Link
            href="/phrase"
            className="text-base font-medium text-gray-700 hover:text-blue-700 transition-colors"
            aria-current="page"
          >
            フレーズ
          </Link>
        </nav>
      </div>
    </div>
    <div className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
      <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
        <div className="space-y-6 py-6 px-5">
          <div className="grid grid-cols-2 gap-y-4 gap-x-8">
          <Link
            href="/jpn"
            className="text-base font-medium text-gray-700 hover:text-blue-700 transition-colors"
          >
            日本語名詞
          </Link>
          <Link
            href="/trend"
            className="text-base font-medium text-gray-700 hover:text-blue-700 transition-colors"
            aria-current="page"
          >
            Googleトレンド
          </Link>
          <Link
            href="/phrase"
            className="text-base font-medium text-gray-700 hover:text-blue-700 transition-colors"
            aria-current="page"
          >
            フレーズ
          </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
