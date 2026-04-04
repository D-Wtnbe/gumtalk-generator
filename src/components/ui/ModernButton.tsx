"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";
import { cn } from "lib/utils";

interface ModernButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}

export const ModernButton = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
}: ModernButtonProps) => {
  const variants = {
    primary: "bg-primary-600 hover:bg-primary-500",
    secondary: "bg-secondary-600 hover:bg-secondary-500",
    accent: "bg-accent-600 hover:bg-accent-500",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      className={cn(
        variants[variant],
        sizes[size],
        "font-zenMaru rounded-xl font-semibold text-white shadow-md transition-colors",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        className
      )}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
};
