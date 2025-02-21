import { ParfumeCard } from "@/entities/parfume/ui/ParfumeCard";
import { Filter } from "@/features/filter/Filter";
import { Search } from "@/features/search/ui/Search";
import { Sort } from "@/features/sort/ui/Sort";
import { Container } from "@/shared/core/container/Container";
import { Loader } from "@/shared/ui/loader/Loader";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <div className="py-10">
      <Container>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-5">
            <div className="w-96">
              <Search />
            </div>
            <div className="flex items-center gap-5">
              <Filter />
              <Suspense fallback={<Loader />}>
                <Sort />
              </Suspense>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-6 place-items-center">
            <ParfumeCard />
            <ParfumeCard />
            <ParfumeCard />
            <ParfumeCard />
            <ParfumeCard />
            <ParfumeCard />
            <ParfumeCard />
            <ParfumeCard />
          </div>
        </div>
      </Container>
    </div>
  );
}
