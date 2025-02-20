import { FaArrowLeftLong } from "react-icons/fa6";
import { Container } from "@/shared/core/container/Container";
import { Button } from "@/shared/ui/button/Button";
import Image from "next/image";
import Link from "next/link";
import { Counter } from "@/features/counter/Counter";

export default function PerfumePage() {
  return (
    <div className="py-6">
      <Container>
        <div className="flex flex-col gap-6">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-black/70 w-fit"
          >
            <FaArrowLeftLong />
            <span>Назад</span>
          </Link>
          <div className="flex gap-36">
            <div className="bg-blue-50 w-full">
              <Image
                src="/assets/img/perfume/perfume1.png"
                alt="Perfume1"
                width={600}
                height={7000}
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-light">
                  Amouage Interlude For Men
                </h3>
                <span className="text-md font-light text-gray-400">
                  AMOUAGE
                </span>
              </div>
              <div className="text-2xl font-light">11 000₸</div>
              <div className="font-light">
                ml:
                <div className="flex items-center gap-3">
                  <Button>5</Button>
                  <Button>10</Button>
                </div>
              </div>
              <div className="flex gap-3 items-stretch">
                <Counter />
                <Button className="h-auto ">Купить</Button>
              </div>
              <p className="font-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque repudiandae ipsa praesentium aspernatur. Veritatis
                rerum corrupti vel magni, autem magnam amet, ad totam, quasi
                suscipit repudiandae minus possimus animi quam.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
