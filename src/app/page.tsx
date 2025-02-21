import { Filter } from "@/features/filter/Filter";
import { Search } from "@/features/search/ui/Search";
import { Sort } from "@/features/sort/ui/Sort";
import { Container } from "@/shared/core/container/Container";
import { Loader } from "@/shared/ui/loader/Loader";
import { PerfumeList } from "@/widgets/perfumeList/PerfumeList";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <div className="py-10">
      <Container>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="w-full md:w-96">
              <Search />
            </div>
            <div className="w-full md:w-fit flex items-center justify-between md:justify-normal gap-5">
              <Filter />
              <Suspense fallback={<Loader />}>
                <Sort />
              </Suspense>
            </div>
          </div>
          <PerfumeList />
        </div>
      </Container>
    </div>
  );
}
