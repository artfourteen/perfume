import { ParfumeCard } from "@/entities/parfume/ui/ParfumeCard";
import { Container } from "@/shared/core/container/Container";

export default function HomePage() {
  return (
    <div className="py-10">
      <Container>
        <div className="grid grid-cols-4 gap-x-3 gap-y-6 place-items-center">
          <ParfumeCard />
          <ParfumeCard />
          <ParfumeCard />
          <ParfumeCard />
          <ParfumeCard />
          <ParfumeCard />
          <ParfumeCard />
          <ParfumeCard />
        </div>
      </Container>
    </div>
  );
}
