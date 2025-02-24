import { Container } from "@/shared/core/container/Container";
import { FAQ } from "@/widgets/faq/Faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "О нас | Perfume",
};

export default function AboutPage() {
  return (
    <div className="py-6">
      <Container>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl">Парфюманы, привет!</h1>
            <p className="text-xl font-light">
              Добро пожаловать в наш интернет-магазин парфюмерии — место, где
              ароматы превращаются в искусство! Мы предлагаем широкий
              ассортимент оригинальных духов от мировых брендов, а также
              эксклюзивные нишевые ароматы для самых взыскательных ценителей.
              Независимо от того, ищете ли вы свой новый повседневный аромат или
              хотите порадовать близких стильным подарком, у нас вы найдете
              идеальный вариант.
            </p>
            <p className="text-xl font-light">
              Мы заботимся о качестве и подлинности каждого флакона, поэтому
              сотрудничаем только с официальными дистрибьюторами и проверенными
              поставщиками. Быстрая доставка, удобные способы оплаты и программа
              лояльности делают покупки у нас еще приятнее. Откройте для себя
              мир изысканных ароматов и найдите свой идеальный парфюм прямо
              сейчас!
            </p>
          </div>
          <div className="w-72 border-t mx-auto" />
          <FAQ />
        </div>
      </Container>
    </div>
  );
}
