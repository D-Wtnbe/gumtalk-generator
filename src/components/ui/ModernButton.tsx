import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ModernButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

export const ModernButton = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false
}: ModernButtonProps) => {
  const variants = {
    primary: 'bg-gradient-to-br from-primary-500 to-primary-700 hover:from-primary-400 hover:to-primary-600',
    secondary: 'bg-gradient-to-br from-secondary-500 to-secondary-700 hover:from-secondary-400 hover:to-secondary-600',
    accent: 'bg-gradient-to-br from-accent-500 to-accent-700 hover:from-accent-400 hover:to-accent-600'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      className={`
        ${variants[variant]}
        ${sizes[size]}
        ${className}
        font-zenMaru font-semibold text-white rounded-xl
        shadow-lg backdrop-blur-sm border border-white/20
        transition-all duration-300 ease-out
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { 
        scale: 1.02,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
      }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.button>
  );
};
