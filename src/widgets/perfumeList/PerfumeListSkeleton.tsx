import { cn } from "@/shared/core/cn/cn";
import Skeleton from "react-loading-skeleton";

export const PerfumeListSkeleton = () => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        "xl:grid-cols-4 gap-x-5 gap-y-6 place-items-center"
      )}
    >
      <div className="w-full">
        <Skeleton className="h-[450px]" />
      </div>
      <div className="w-full">
        <Skeleton className="h-[450px]" />
      </div>
      <div className="w-full">
        <Skeleton className="h-[450px]" />
      </div>
      <div className="w-full">
        <Skeleton className="h-[450px]" />
      </div>
    </div>
  );
};
