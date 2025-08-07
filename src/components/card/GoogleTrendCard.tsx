import { useGoogleTrendCard } from "components/hooks/card/googleTrendCard";
import { InteractiveCard } from "components/ui/InteractiveCard";
import { googleTrendContents } from "interfaces/sheet";
import { motion } from "framer-motion";
import { JSX, useEffect, useCallback } from "react";

export const GoogleTrendCard = ({
  googleTrendContents,
}: {
  googleTrendContents: googleTrendContents[];
}): JSX.Element => {
  const { item, handleClick } = useGoogleTrendCard(googleTrendContents);

  // 初回レンダリング時にアイテムを取得
  useEffect(() => {
    handleClick();
  }, [handleClick]);

  // カードクリック時の処理（memoizeして安定した参照にする）
  const handleCardFlip = useCallback(() => {
    handleClick();
  }, [handleClick]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="floating-elements" />
      
      <section className="relative z-10 flex h-full flex-col items-center justify-center px-4 py-8">
        <motion.h1 
          className="mb-8 text-4xl md:text-5xl font-bold text-gray-800 text-center font-zenMaru"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-3xl mr-3">📈</span>
          Google検索トレンドのお題
        </motion.h1>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <InteractiveCard
            onFlip={handleCardFlip}
            className="mb-6"
          >
            <div className="text-center p-4 h-full flex flex-col justify-center">
              <motion.div
                key={item?.content}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-2 flex flex-col items-center justify-center h-full"
              >
                <div className="bg-gradient-to-r from-secondary-500 to-accent-500 bg-clip-text text-transparent flex-1 flex flex-col justify-center">
                  <p className="text-responsive-large font-bold font-zenMaru break-words text-center px-2 leading-tight">
                    {item?.content}
                  </p>
                </div>
              </motion.div>
            </div>
          </InteractiveCard>
        </motion.div>

        {/* ニュースリンクセクション */}
        {item?.newsTitle && item?.newsLink && (
          <motion.div
            className="mb-6 w-full max-w-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="text-gray-800 font-zenMaru font-semibold mb-3 flex items-center gap-2">
                <span>📰</span>
                関連ニュース
              </h3>
              <a
                href={item.newsLink}
                target="_blank"
                rel="noreferrer"
                className="block bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-all duration-300 group"
              >
                <p className="text-gray-600 font-zenMaru text-sm leading-relaxed group-hover:text-gray-800">
                  {item.newsTitle}
                </p>
                <div className="flex items-center gap-2 mt-2 text-gray-500 text-xs">
                  <span>🔗</span>
                  <span>クリックで詳細を見る</span>
                </div>
              </a>
            </div>
          </motion.div>
        )}

        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="glassmorphism rounded-xl p-6 max-w-md mx-auto">
            <h3 className="text-gray-800 font-zenMaru font-semibold mb-3">
              💡 使い方
            </h3>
            <p className="text-gray-600 text-sm font-zenMaru">
              カードをクリックして新しいトレンドを表示
              <br />
              話題のトピックで会話を盛り上げよう!
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
