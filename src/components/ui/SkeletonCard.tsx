import { cn } from "lib/utils";

export const SkeletonCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-48 w-80 animate-pulse rounded-2xl border border-slate-200 bg-slate-200 shadow-md md:h-52 md:w-96",
        className
      )}
    />
  );
};
