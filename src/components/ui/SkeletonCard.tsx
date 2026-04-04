import { cn } from "lib/utils";

export const SkeletonCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "w-80 h-48 md:w-96 md:h-52 bg-slate-200 shadow-md rounded-2xl animate-pulse border border-slate-200",
        className
      )}
    />
  );
};
