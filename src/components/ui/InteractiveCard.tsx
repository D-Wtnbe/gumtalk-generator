import { motion } from 'framer-motion';

interface InteractiveCardProps {
  children: React.ReactNode;
  onFlip?: () => void;
  className?: string;
}

export const InteractiveCard = ({
  children,
  onFlip,
  className = '',
}: InteractiveCardProps) => {
  const handleFlip = () => {
    onFlip?.();
  };

  return (
    <motion.div
      className={`card-container cursor-pointer ${className}`}
      onClick={handleFlip}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      style={{ transformOrigin: "center center" }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <div className="card w-80 h-48 md:w-96 md:h-52">
        <div className="card-face card-front flex items-center justify-center">
          {children}
        </div>
      </div>
    </motion.div>
  );
};
