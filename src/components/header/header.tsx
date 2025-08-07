import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { JSX, useState } from "react";

export const Header = ({ title }: { title: string }): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/jpn", label: "日本語名詞", icon: "🇯🇵" },
    { href: "/trend", label: "Googleトレンド", icon: "📈" },
    { href: "/phrase", label: "フレーズ", icon: "💬" }
  ];

  return (
    <motion.div 
      className="relative backdrop-blur-md bg-white/10 border-b border-white/20"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <Image 
                  src="/icon.png" 
                  width="48" 
                  height="48" 
                  alt="logo" 
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
              <span className="ml-3 text-xl font-bold font-zenMaru text-gray-800 group-hover:text-gray-600 transition-colors">
                {title}
              </span>
            </Link>
          </div>
          
          {/* デスクトップナビゲーション */}
          <nav className="hidden space-x-6 md:flex">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-100/80 hover:bg-blue-200/80 text-gray-800 hover:text-gray-900 font-medium font-zenMaru transition-all duration-300 backdrop-blur-sm border border-blue-200/50 hover:border-blue-300/70"
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:bg-blue-100/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400/50 transition-colors"
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      <motion.div
        className="md:hidden"
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <div className="px-6 pb-6 space-y-3">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: isOpen ? 0 : -50, opacity: isOpen ? 1 : 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Link
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-100/80 hover:bg-blue-200/80 text-gray-800 font-medium font-zenMaru transition-all duration-300 backdrop-blur-sm border border-blue-200/50"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
