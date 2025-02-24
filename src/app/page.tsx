import { BrandFilter } from "@/features/filter/brand/BrandFilter";
import { GenderFilter } from "@/features/filter/gender/GenderFilter";
import { SeasonFilter } from "@/features/filter/season/SeasonFilter";
import { Search } from "@/features/search/Search";
import { Sort } from "@/features/sort/Sort";
import { Container } from "@/shared/core/container/Container";
import { PerfumeList } from "@/widgets/perfumeList/PerfumeList";
import { PerfumeListSkeleton } from "@/widgets/perfumeList/PerfumeListSkeleton";
import { SelectedBrandsList } from "@/widgets/selectedBrandsList/SelectedBrandsList";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function HomePage() {
  return (
    <div className="py-10">
      <Container>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
            <div className="w-full lg:w-96">
              <Suspense
                fallback={
                  <div className="w-full">
                    <Skeleton className="h-12" />
                  </div>
                }
              >
                <Search />
              </Suspense>
            </div>
            <div className="w-full lg:w-fit flex items-center flex-wrap justify-between gap-5">
              <div className="flex w-full md:w-fit items-center justify-between md:justify-start gap-5">
                <Suspense
                  fallback={
                    <div className="w-28">
                      <Skeleton className="h-9" />
                    </div>
                  }
                >
                  <GenderFilter />
                </Suspense>
                <Suspense
                  fallback={
                    <div className="w-28">
                      <Skeleton className="h-9" />
                    </div>
                  }
                >
                  <SeasonFilter />
                </Suspense>
              </div>
              <div className="flex w-full md:w-fit items-center justify-between md:justify-start gap-5">
                <Suspense
                  fallback={
                    <div className="w-28">
                      <Skeleton className="h-9" />
                    </div>
                  }
                >
                  <BrandFilter />
                </Suspense>
                <Suspense
                  fallback={
                    <div className="w-48">
                      <Skeleton className="h-9" />
                    </div>
                  }
                >
                  <Sort />
                </Suspense>
              </div>
            </div>
          </div>
          <Suspense
            fallback={
              <div className="flex items-center flex-wrap gap-3">
                <div className="w-28">
                  <Skeleton className="h-6" />
                </div>
                <div className="w-28">
                  <Skeleton className="h-6" />
                </div>
                <div className="w-28">
                  <Skeleton className="h-6" />
                </div>
              </div>
            }
          >
            <SelectedBrandsList />
          </Suspense>
          <Suspense fallback={<PerfumeListSkeleton />}>
            <PerfumeList />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}
