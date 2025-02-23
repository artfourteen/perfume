"use client";

import { useCart } from "@/features/cart/provider/useCart";
import { cn } from "@/shared/core/cn/cn";
import { Button } from "@/shared/ui/button/Button";
import { IoCloseOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const orderSchema = z.object({
  fullname: z.string().min(2, "Введите ваше имя"),
  phoneNumber: z
    .string()
    .regex(/^\+?\d{7,15}$/, "Введите корректный номер телефона"),
  countryCity: z.string().min(2, "Введите страну и город"),
  address: z.string().min(5, "Введите адрес"),
});

export const OrderModal = () => {
  const {
    isOrderModalOpen,
    setIsOrderModalOpen,
    fullname,
    setFullname,
    phoneNumber,
    setPhoneNumber,
    countryCity,
    setCountryCity,
    address,
    setAddress,
    sendWhatsAppMessage,
  } = useCart();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      fullname,
      phoneNumber,
      countryCity,
      address,
    },
  });

  const onSubmit = (data: z.infer<typeof orderSchema>) => {
    setFullname(data.fullname);
    setPhoneNumber(data.phoneNumber);
    setCountryCity(data.countryCity);
    setAddress(data.address);

    localStorage.setItem("fullname", data.fullname);
    localStorage.setItem("phoneNumber", data.phoneNumber);
    localStorage.setItem("countryCity", data.countryCity);
    localStorage.setItem("address", data.address);

    setTimeout(() => {
      sendWhatsAppMessage();
      setIsOrderModalOpen(false);
    }, 100);
  };

  return (
    <dialog
      onClick={() => setIsOrderModalOpen(false)}
      className={cn(
        "fixed z-50 bg-black/25 w-full h-full opacity-0 pointer-events-none transition-all",
        "flex items-center justify-center",
        {
          "opacity-100 pointer-events-auto": isOrderModalOpen,
        }
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full md:w-1/2 xl:w-1/3 bg-white py-10 px-7 flex flex-col items-center gap-5"
      >
        <button
          onClick={() => setIsOrderModalOpen(false)}
          className="absolute top-3 right-3 text-3xl text-black hover:text-black/70 transition-all"
        >
          <IoCloseOutline />
        </button>
        <h2 className="text-3xl font-light uppercase">Оформить заказ</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full"
        >
          <div className="space-y-1">
            <label htmlFor="fullname" className="text-sm font-light">
              Ваше Имя*
            </label>
            <input
              id="fullname"
              className={cn("w-full border border-black py-3 px-5 font-light", {
                "border-red-500": errors.fullname,
              })}
              placeholder="Ержан Мукагали"
              autoComplete="name"
              {...register("fullname")}
            />
            {errors.fullname && (
              <p className="text-red-500 text-sm">{errors.fullname.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <label htmlFor="phoneNumber" className="text-sm font-light">
              Ваш телефон*
            </label>
            <input
              id="phoneNumber"
              className={cn("w-full border border-black py-3 px-5 font-light", {
                "border-red-500": errors.fullname,
              })}
              placeholder="+7 701 123 45 67"
              autoComplete="tel"
              {...register("phoneNumber")}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <label htmlFor="countryCity" className="text-sm font-light">
              Страна, Город*
            </label>
            <input
              id="countryCity"
              className={cn("w-full border border-black py-3 px-5 font-light", {
                "border-red-500": errors.fullname,
              })}
              placeholder="Казахстан, Алматы"
              autoComplete="country"
              {...register("countryCity")}
            />
            {errors.countryCity && (
              <p className="text-red-500 text-sm">
                {errors.countryCity.message}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <label htmlFor="address" className="text-sm font-light">
              Адрес*
            </label>
            <input
              id="address"
              className={cn("w-full border border-black py-3 px-5 font-light", {
                "border-red-500": errors.fullname,
              })}
              placeholder="ул. Достык, дом 3, кв. 75"
              autoComplete="address-level1"
              {...register("address")}
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>

          <Button type="submit" className="py-7 uppercase font-light text-lg">
            Оформить
          </Button>
        </form>
      </div>
    </dialog>
  );
};
