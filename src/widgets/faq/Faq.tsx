"use client";

import { cn } from "@/shared/core/cn/cn";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "Как я могу быть уверенным в подлинности ваших духов?",
    answer:
      "Мы гарантируем, что все наши духи на 100% оригинальные и поставляются только от официальных дистрибьюторов и проверенных поставщиков.",
  },
  {
    question: "Каковы условия возврата и возврата денег?",
    answer:
      "Если вы получили поврежденный или неверный товар, вы можете вернуть его в течение 14 дней с момента получения для полного возврата средств или обмена. Важно, чтобы товар оставался нераспечатанным и в оригинальной упаковке.",
  },
  {
    question: "Сколько времени занимает доставка и сколько она стоит?",
    answer:
      "Сроки доставки зависят от вашего местоположения. Стандартная доставка занимает от 2 до 7 рабочих дней, также доступна экспресс-доставка за дополнительную плату. Точную стоимость можно увидеть при оформлении заказа.",
  },
  {
    question: "Можно ли заказать пробники духов перед покупкой?",
    answer:
      "Да! У нас есть пробные версии ароматов, чтобы вы могли попробовать парфюм перед покупкой полноразмерного флакона. Ознакомьтесь с разделом пробников на нашем сайте.",
  },
];

const FAQItem = ({ item }: { item: FAQItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{item.question}</span>
        <FaAngleDown
          className={cn("w-5 h-5 transition-transform duration-300", {
            "transform rotate-180": isOpen,
          })}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="py-5 px-2 text-gray-600">{item.answer}</p>
      </div>
    </div>
  );
};

export const FAQ = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-light mb-8 text-center">
        Часто задаваемые вопросы
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <FAQItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
