"use client";
import { motion } from "motion/react";
import { cn } from "lib/utils";

interface InteractiveCardProps {
  children: React.ReactNode;
  onFlip?: () => void;
  className?: string;
}

export const InteractiveCard = ({ children, onFlip, className = "" }: InteractiveCardProps) => {
  const handleFlip = () => {
    onFlip?.();
  };

  return (
    <motion.button
      type="button"
      className={cn(
        "card-container block w-full cursor-pointer appearance-none border-none bg-transparent p-0 text-left",
        className
      )}
      onClick={handleFlip}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      style={{ transformOrigin: "center center" }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <div className="card h-48 w-80 md:h-52 md:w-96">
        <div className="card-face card-front flex items-center justify-center">{children}</div>
      </div>
    </motion.button>
  );
};
