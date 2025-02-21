"use client";

import { Counter } from "@/features/counter/ui/Counter";
import { perfumes } from "@/shared/constants/perfumes";
import { cn } from "@/shared/core/cn/cn";
import { Container } from "@/shared/core/container/Container";
import { Button } from "@/shared/ui/button/Button";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export default function PerfumePage() {
  const params = useParams();
  const [perfumeInfo] = useState(() =>
    perfumes.find((perfume) => perfume.slug === params.perfumeSlug)
  );
  const [isImgOpen, setIsImgOpen] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);
  const [mill, setMill] = useState<number>(perfumeInfo?.ml[0] ?? 0);

  useEffect(() => {
    if (!perfumeInfo) {
      notFound();
    }
  }, [perfumeInfo]);

  if (!perfumeInfo) return null;

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const handleMillChange = (val: number) => {
    setMill(val);
  };

  return (
    <div className="py-6">
      <div
        onClick={() => setIsImgOpen(false)}
        className={cn(
          "hidden fixed top-0 left-0 w-full bg-black/50 z-40 cursor-zoom-out",
          {
            flex: isImgOpen,
          }
        )}
      >
        <div className="relative flex items-center justify-center w-full h-dvh">
          <Image
            src={perfumeInfo.img}
            alt={perfumeInfo.slug}
            width={960}
            height={960}
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="bg-white cursor-default"
            unoptimized
          />
          <button
            onClick={() => setIsImgOpen(false)}
            className="absolute top-3 right-3 text-4xl invert mix-blend-difference"
          >
            <IoClose />
          </button>
        </div>
      </div>
      <Container>
        <div className="flex flex-col gap-6">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-black/70 w-fit"
          >
            <FaArrowLeftLong />
            <span>Назад</span>
          </Link>
          <div className="flex flex-col md:flex-row agap gap-12 md:gap-20 lg:gap-36">
            <button
              onClick={() => setIsImgOpen(true)}
              className="cursor-zoom-in"
            >
              <div className="bg-blue-50 w-fit h-fit">
                <Image
                  src={perfumeInfo.img}
                  alt={perfumeInfo.slug}
                  width={1080}
                  height={1080}
                  unoptimized
                />
              </div>
            </button>
            <div className="flex flex-col gap-6 md:w-5/6 lg:w-fit">
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-normal">{perfumeInfo.title}</h3>
                <span className="text-md font-light text-gray-400 uppercase">
                  {perfumeInfo.brand}
                </span>
              </div>
              <div className="text-2xl font-light">
                {perfumeInfo.price.toLocaleString()}₸
              </div>
              <div className="font-light flex flex-col gap-1">
                <div className="text-sm">
                  Объем - <span className="font-medium">{mill}</span> мл.
                </div>
                <div className="flex items-center gap-3">
                  {perfumeInfo.ml.map((millCount, index) => (
                    <Button
                      key={index}
                      onClick={() => handleMillChange(millCount)}
                      variant="secondary"
                      className={cn("border w-12", {
                        "border-black font-medium": millCount === mill,
                      })}
                    >
                      {millCount}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 items-stretch">
                <Counter
                  count={count}
                  handleDecrement={handleDecrement}
                  handleIncrement={handleIncrement}
                />
                <Button className="h-auto w-44 text-lg font-light uppercase">
                  Купить
                </Button>
              </div>
              <div className="flex flex-col gap-1">
                <div>Описание:</div>
                <p className="font-light text-sm">{perfumeInfo.description}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
