import { ParfumeCard } from "@/entities/parfume/ui/ParfumeCard";
import { perfumes } from "@/shared/constants/perfumes";

export const PerfumeList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-6 place-items-center">
      {perfumes.map((perfume) => (
        <ParfumeCard key={perfume.id} {...perfume} />
      ))}
    </div>
  );
};
