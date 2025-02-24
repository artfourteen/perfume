"use client";

import type React from "react";

import { useCart } from "@/features/cart/provider/useCart";
import { cn } from "@/shared/core/cn/cn";
import { Button } from "@/shared/ui/button/Button";
import PhoneInput from "@/shared/ui/phoneInput/PhoneInput";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import * as z from "zod";

const orderSchema = z.object({
  fullname: z.string().min(2, "Введите ваше имя"),
  phoneNumber: z
    .string()
    .length(11, "Номер телефона должен содержать 11 цифр") // 7 + 10 digits
    .regex(/^7\d{10}$/, "Введите корректный номер телефона"), // Starts with 7 followed by exactly 10 digits
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

  const [errors, setErrors] = useState<Partial<z.infer<typeof orderSchema>>>(
    {}
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      fullname,
      phoneNumber,
      countryCity,
      address,
    };

    try {
      orderSchema.parse(formData);
      sendWhatsAppMessage();
      setIsOrderModalOpen(false);
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.flatten().fieldErrors);
      }
    }
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
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
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            {errors.fullname && (
              <p className="text-red-500 text-sm">{errors.fullname}</p>
            )}
          </div>

          <div className="space-y-1">
            <PhoneInput
              id="phoneNumber"
              value={phoneNumber}
              onChange={setPhoneNumber}
              error={errors.phoneNumber}
              placeholder="+7 (701) 123-45-67"
              autoComplete="tel"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
            )}
          </div>

          <div className="space-y-1">
            <label htmlFor="countryCity" className="text-sm font-light">
              Страна, Город*
            </label>
            <input
              id="countryCity"
              className={cn("w-full border border-black py-3 px-5 font-light", {
                "border-red-500": errors.countryCity,
              })}
              placeholder="Казахстан, Алматы"
              autoComplete="country"
              value={countryCity}
              onChange={(e) => setCountryCity(e.target.value)}
            />
            {errors.countryCity && (
              <p className="text-red-500 text-sm">{errors.countryCity}</p>
            )}
          </div>

          <div className="space-y-1">
            <label htmlFor="address" className="text-sm font-light">
              Адрес*
            </label>
            <input
              id="address"
              className={cn("w-full border border-black py-3 px-5 font-light", {
                "border-red-500": errors.address,
              })}
              placeholder="ул. Достык, дом 3, кв. 75"
              autoComplete="address-level1"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address}</p>
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
