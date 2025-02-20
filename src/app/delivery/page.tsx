import { Container } from "@/shared/core/container/Container";
import { Socials } from "@/shared/ui/socials/Socials";

export default function DeliveryPage() {
  return (
    <div className="py-6">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl">Доставка Товара</h2>
            <p className="text-xl font-light">
              Доставка по Астане и Алмате - день в день, Яндекс.Курьер Доставка
              по Казахстану от 2 дней.
            </p>
            <p className="text-xl font-light">
              Доставка заказов осуществляется компанией СДЭК.
            </p>
            <p className="text-xl font-light">
              Тарифы и условия доставки зависят от города получателя и размера
              покупки.
            </p>
            <p className="text-xl font-light">
              Продавец обязуется передать товар на доставку не позднее, чем
              через два рабочих дня после поступления оплаты на расчетный счет
              продавца.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl">Возврат Товара</h2>
            <p className="text-xl font-light">
              Парфюмерно-косметическая продукция входит в перечень
              непродовольственных товаров не подлежащих возврату и обмену.
              (Согласно Закону РК от 04 мая 2010г. №274-IV «О защите прав
              потребителей»).
            </p>
            <p className="text-xl font-light">
              В случае возникновения проблемы Покупатель вправе направить в
              течение 14 дней претензию в свободной форме в по WhatsApp номеру
              +7 (708) 223-92-68.
            </p>
          </div>
          <div className="w-72 border-t mx-auto" />
          <div className="flex flex-col items-center gap-3 w-1/2 mx-auto">
            <p className="text-center text-lg mx-auto font-light">
              Подписывайтесь на нас в Instagram, и следите за интересными
              парфюмерными обзорами, распаковками и советами.
            </p>
            <Socials />
          </div>
        </div>
      </Container>
    </div>
  );
}
