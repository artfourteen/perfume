import { Button } from "@/shared/ui/button/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full flex flex-col gap-3 items-center justify-center py-52">
      <h1 className="text-9xl font-light">404</h1>
      <p className="text-xl">Страница не найдена :(</p>
      <Button asChild>
        <Link href="/">На главную</Link>
      </Button>
    </div>
  );
}
