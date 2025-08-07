import Link from "next/link";
import { Header } from "components/header/header";
import { ModernButton } from "components/ui/ModernButton";
import { getJapaneseNounContents } from "data/remote/japaneseNounApi";
import { GetServerSideProps } from "next";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 浮遊する背景要素 */}
      <div className="floating-elements" />
      
      {/* メインコンテンツ */}
      <div className="relative z-10">
        <Header title="ホーム" />
        
        <motion.div 
          className="text-center px-4 mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 font-zenMaru"
            animate={{ 
              textShadow: [
                '0 0 10px rgba(59, 130, 246, 0.3)',
                '0 0 20px rgba(59, 130, 246, 0.5)',
                '0 0 10px rgba(59, 130, 246, 0.3)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ガムトーク
            <br />
            <span className="text-3xl md:text-5xl text-gray-700">ジェネレーター</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 font-zenMaru font-medium max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            カードに表示されたお題について話をするゲーム
            <br />
            <span className="text-sm text-gray-500">カードをめくって、新しい話題を見つけよう!</span>
          </motion.p>
        </motion.div>

        <motion.div 
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link href="/jpn">
            <ModernButton variant="primary" size="lg" className="w-full md:w-auto min-w-[280px]">
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl">🇯🇵</span>
                <div className="text-left">
                  <div>日本語名詞</div>
                  <div className="text-sm opacity-80">ランダムで1つ</div>
                </div>
              </div>
            </ModernButton>
          </Link>
          
          <Link href="/trend">
            <ModernButton variant="secondary" size="lg" className="w-full md:w-auto min-w-[280px]">
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl">📈</span>
                <div className="text-left">
                  <div>Google検索トレンド</div>
                  <div className="text-sm opacity-80">最新のトピックから1つ</div>
                </div>
              </div>
            </ModernButton>
          </Link>
          
          <Link href="/phrase">
            <ModernButton variant="accent" size="lg" className="w-full md:w-auto min-w-[280px]">
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl">💬</span>
                <div className="text-left">
                  <div>会話フレーズ</div>
                  <div className="text-sm opacity-80">ランダムで1つ</div>
                </div>
              </div>
            </ModernButton>
          </Link>
        </motion.div>

        {/* 説明セクション */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="glassmorphism rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 font-zenMaru">
              遊び方
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-gray-600">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl mb-3">1️⃣</div>
                <h3 className="font-semibold mb-2">カテゴリ選択</h3>
                <p className="text-sm">上のボタンから好きなカテゴリを選ぼう</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl mb-3">2️⃣</div>
                <h3 className="font-semibold mb-2">カードをフリップ</h3>
                <p className="text-sm">カードをクリックしてお題を確認</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl mb-3">3️⃣</div>
                <h3 className="font-semibold mb-2">トークを楽しもう</h3>
                <p className="text-sm">表示されたお題について自由に話そう</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const japaneseNounContents = await getJapaneseNounContents();
  return {
    props: {
      japaneseNounContents: japaneseNounContents,
    },
  };
};
