"use client";

import { Counter } from "@/features/counter/Counter";
import { cn } from "@/shared/core/cn/cn";
import { Button } from "@/shared/ui/button/Button";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { IoBagOutline, IoCloseOutline } from "react-icons/io5";
import { PiTrashThin } from "react-icons/pi";
import { TbMoodEmpty } from "react-icons/tb";
import { useCart } from "../provider/useCart";

export const Cart = () => {
  const {
    open,
    setOpen,
    cartItems,
    getTotalPrice,
    getCartPerfumes,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
  } = useCart();

  const cartPerfumes = useMemo(() => getCartPerfumes(), [cartItems]);
  const totalPrice = useMemo(() => getTotalPrice(), [cartItems]);

  return (
    <div
      onClick={() => setOpen(false)}
      className={cn(
        "fixed top-0 left-0 w-full flex justify-end h-full z-40 opacity-0",
        "transition-all bg-black/25 pointer-events-none shadow-md",
        {
          "opacity-100 pointer-events-auto": open,
        }
      )}
    >
      <div className="h-full w-full md:w-2/3 lg:w-1/2 2xl:w-1/3">
        <div
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className={cn(
            "bg-white h-full w-full md:w-2/3 lg:w-1/2 2xl:w-1/3 fixed top-0 -right-full delay-200 transition-all",
            "flex flex-col",
            {
              "right-0": open,
            }
          )}
        >
          <div className="flex items-center justify-between py-4 px-6 border-b shadow-sm">
            <div className="uppercase text-lg flex items-center gap-3">
              <IoBagOutline className="text-2xl" />
              <span>Корзина</span>
              <span>{!!cartItems.length && cartItems.length}</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="flex items-center gap-1 text-lg text-gray-500 hover:text-gray-600 transition-all font-light"
            >
              <span>Закрыть</span>
              <IoCloseOutline className="text-3xl" />
            </button>
          </div>
          <div
            className={cn(
              "flex flex-col flex-1 items-start justify-start overflow-y-auto",
              {
                "flex-row items-center justify-center": cartPerfumes.length < 1,
              }
            )}
          >
            {cartPerfumes.length > 0 ? (
              cartPerfumes.map((perfume, index) => (
                <div
                  key={perfume.id + perfume.cartMl}
                  className={cn("flex items-center gap-3 py-4 px-6 w-full", {
                    "border-b": index !== cartPerfumes.length - 1,
                  })}
                >
                  <div>
                    <Image
                      src={perfume.img}
                      alt={perfume.slug}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex items-center justify-between font-light w-full">
                    <div>
                      <h3 className="font-normal">{perfume.title}</h3>
                      <h4 className="text-gray-400 text-sm">{perfume.brand}</h4>
                      <div className="text-xs">{perfume.cartMl}ml</div>
                    </div>
                    <div className="flex items-center gap-10">
                      <Counter
                        size="sm"
                        count={perfume.cartQuantity}
                        handleDecrement={() =>
                          decrementQuantity(perfume.id, perfume.cartMl)
                        }
                        handleIncrement={() =>
                          incrementQuantity(perfume.id, perfume.cartMl)
                        }
                      />
                      <div className="text-lg">
                        {perfume.price[
                          perfume.ml.indexOf(perfume.cartMl)
                        ].toLocaleString()}
                        ₸
                      </div>
                      <button
                        onClick={() =>
                          removeFromCart(perfume.id, perfume.cartMl)
                        }
                        className="text-2xl text-red-500 hover:text-red-400 transition-all"
                      >
                        <PiTrashThin />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full flex flex-col items-center justify-center gap-1 text-3xl font-light">
                <TbMoodEmpty className="stroke-1 text-9xl" />
                <div className="flex flex-col items-center gap-3">
                  <h3 className="uppercase">Корзина пуста</h3>
                  <Button
                    onClick={() => setOpen(false)}
                    className="uppercase text-lg font-medium"
                    asChild
                  >
                    <Link href="/">В каталог</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
          <div
            className={cn("py-4 px-6 border-t flex flex-col gap-6", {
              hidden: cartPerfumes.length < 1,
            })}
          >
            <div className="uppercase font-medium">Сумма заказа</div>
            <div className="w-full border-t border-dashed border-black" />
            <div className="flex items-center justify-between text-2xl font-light uppercase">
              <div>Итого</div>
              <div>{totalPrice.toLocaleString()}₸</div>
            </div>
            <Button
              onClick={() => setOpen(false)}
              className="text-lg uppercase py-7 font-medium"
            >
              Оформить заказ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
