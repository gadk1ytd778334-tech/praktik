"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const MODAL_CONTENT = {
  about: {
    title: "О магазине гарнитуры Shoply",
    text: "Shoply — специализированный магазин беспроводных наушников с активным шумоподавлением ANC, студийных гарнитур, умных часов и мощных GaN-зарядок с гарантией 12 месяцев.",
  },
  partners: {
    title: "Партнёрам и поставщикам аудиотехники",
    text: "Приглашаем к сотрудничеству бренды персонального аудио, производителей аксессуаров и логистических операторов для расширения сети пунктов выдачи.",
  },
  vacancies: {
    title: "Вакансии в Shoply",
    text: "Ищем консультантов-экспертов по персональному аудио, инженеров сервисного центра и frontend-разработчиков. Резюме: hr@shoply.ru.",
  },
  privacy: {
    title: "Политика обработки персональных данных",
    text: "Ваши контактные данные, адреса доставки и настройки мини-профиля используются исключительно для оформления заказов и работы бонусной программы по 152-ФЗ.",
  },
  salesRules: {
    title: "Правила продаж аудиотехники и гаджетов",
    text: "Вся техника поставляется в заводской упаковке с пломбами. Перед оплатой курьеру вы можете проверить комплектацию, звук и подключение гарнитуры.",
  },
  terms: {
    title: "Правила пользования сайтом",
    text: "Материалы каталога, спецификации гарнитур, обзоры цен на чипы памяти и личный кабинет предназначены для покупателей маркетплейса Shoply.",
  },
  recommendations: {
    title: "Рекомендательные технологии",
    text: "На информационном ресурсе применяются алгоритмы подбора совместимых GaN-зарядок, кабелей и акционных предложений дня на основе просмотренных моделей.",
  },
  serviceCenters: {
    title: "Авторизованные сервисные центры",
    text: "Бесплатная диагностика, замена амбушюр, аккумуляторов и гарантийный ремонт гарнитур проводятся ежедневно с 09:00 до 21:00 по чеку из личного кабинета.",
  },
  howToOrder: {
    title: "Как оформить заказ",
    text: "Выберите гарнитуру или аксессуар в каталоге, добавьте в корзину, при необходимости примените бонусные баллы из профиля и выберите удобный способ получения.",
  },
  payment: {
    title: "Способы оплаты",
    text: "Оплата банковской картой онлайн, через Систему быстрых платежей (СБП) или наличными/картой курьеру после проверки гарнитуры.",
  },
  credits: {
    title: "Рассрочка 0-0-12 на гарнитуры и часы",
    text: "Оформление рассрочки без переплат на срок от 3 до 12 месяцев онлайн за 2 минуты при покупке от 5 000 ₽.",
  },
  delivery: {
    title: "Доставка и примерка перед покупкой",
    text: "Экспресс-доставка курьером в день заказа при оформлении до 16:00, а также самовывоз из пунктов выдачи по всей России.",
  },
  warranty: {
    title: "Обмен, возврат и гарантия 12 месяцев",
    text: "Официальная гарантия 1 год на всю электронику. Обмен или возврат устройства надлежащего качества в течение 14 дней с сохранением заводской упаковки.",
  },
  repairStatus: {
    title: "Проверка статуса ремонта гарнитуры",
    text: "Актуальный статус сервисного обслуживания отображается в разделе «История заказов» вашего личного кабинета или по телефону 8 800 000-00-00.",
  },
  b2b: {
    title: "Корпоративным отделам и call-центрам",
    text: "Оптовые поставки профессиональных гарнитур, спикерфонов и зарядных станций для офисов с выделением НДС и закрывающими документами через ЭДО.",
  },
  invoiceCheck: {
    title: "Проверка счёта для юридических лиц",
    text: "Уточнить статус оплаты счёта и отгрузки партии гарнитур можно по номеру заказа через корпоративный отдел b2b@shoply.ru.",
  },
  giftCards: {
    title: "Подарочные карты Shoply",
    text: "Электронные подарочные сертификаты номиналом от 1 000 до 30 000 ₽ на покупку наушников, смарт-часов и аксессуаров.",
  },
};

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeModal, setActiveModal] = useState(null);

  const goToSection = (e, sectionId) => {
    e.preventDefault();
    if (pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    router.push(`/#${sectionId}`);
  };

  const goToPage = (e, path) => {
    e.preventDefault();
    router.push(path);
  };

  const itemStyle = {
    background: "transparent",
    border: "none",
    padding: 0,
    fontSize: "14px",
    lineHeight: "1.45",
    color: "#cbd5e1",
    textDecoration: "none",
    cursor: "pointer",
    textAlign: "left",
  };
  return (
    <footer
      style={{
        marginTop: "auto",
        background: "#1e1e1e",
        color: "#e2e8f0",
        borderTop: "1px solid #333333",
      }}
    >
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "48px 24px 36px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "48px",
        }}
      >
        {/* Левая колонка: Компания */}
        <div>
          <h4
            style={{
              fontSize: "15px",
              fontWeight: "700",
              color: "#ffffff",
              margin: "0 0 14px",
              paddingBottom: "12px",
              borderBottom: "1px solid #3a3a3a",
            }}
          >
            Компания
          </h4>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <button
              type="button"
              onClick={() => setActiveModal(MODAL_CONTENT.about)}
              style={itemStyle}
            >
              О компании
            </button>
            <a
              href="#market-news"
              onClick={(e) => goToSection(e, "market-news")}
              style={itemStyle}
            >
              Новости рынка: чипы и аудио
            </a>
            <button
              type="button"
              onClick={() => setActiveModal(MODAL_CONTENT.partners)}
              style={itemStyle}
            >
              Партнерам (аренда, сотрудничество)
            </button>
            <button
              type="button"
              onClick={() => setActiveModal(MODAL_CONTENT.vacancies)}
              style={itemStyle}
            >
              Вакансии
            </button>
            <button
              type="button"
              onClick={() => setActiveModal(MODAL_CONTENT.privacy)}
              style={itemStyle}
            >
              Политика компании в отношении обработки персональных данных
            </button>
            <button
              type="button"
              onClick={() => setActiveModal(MODAL_CONTENT.salesRules)}
              style={itemStyle}
            >
              Правила продаж
            </button>
            <button
              type="button"
              onClick={() => setActiveModal(MODAL_CONTENT.terms)}
              style={itemStyle}
            >
              Правила пользования сайта
            </button>
            <button
              type="button"
              onClick={() => setActiveModal(MODAL_CONTENT.recommendations)}
              style={itemStyle}
            >
              На информационном ресурсе применяются рекомендательные технологии
            </button>
            <button
              type="button"
              onClick={() => setActiveModal(MODAL_CONTENT.serviceCenters)}
              style={itemStyle}
            >
              Сервисные центры
            </button>
          </div>
        </div>

        {/* Правый блок: Покупателям (2 колонки) */}
        <div style={{ gridColumn: "span 2" }}>
          <h4
            style={{
              fontSize: "15px",
              fontWeight: "700",
              color: "#ffffff",
              margin: "0 0 14px",
              paddingBottom: "12px",
              borderBottom: "1px solid #3a3a3a",
            }}
          >
            Покупателям
          </h4>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
              gap: "24px",
            }}
          >
            {/* Подколонка 1 */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <button
                type="button"
                onClick={() => setActiveModal(MODAL_CONTENT.howToOrder)}
                style={itemStyle}
              >
                Как оформить заказ
              </button>
              <button
                type="button"
                onClick={() => setActiveModal(MODAL_CONTENT.payment)}
                style={itemStyle}
              >
                Способы оплаты
              </button>
              <button
                type="button"
                onClick={() => setActiveModal(MODAL_CONTENT.credits)}
                style={itemStyle}
              >
                Кредиты и рассрочка
              </button>
              <button
                type="button"
                onClick={() => setActiveModal(MODAL_CONTENT.delivery)}
                style={itemStyle}
              >
                Доставка
              </button>
              <a
                href="/profile"
                onClick={(e) => goToPage(e, "/profile")}
                style={itemStyle}
              >
                Статус заказа
              </a>
              <button
                type="button"
                onClick={() => setActiveModal(MODAL_CONTENT.warranty)}
                style={itemStyle}
              >
                Обмен, возврат, гарантия
              </button>
              <button
                type="button"
                onClick={() => setActiveModal(MODAL_CONTENT.repairStatus)}
                style={itemStyle}
              >
                Проверка статуса ремонта
              </button>
            </div>

            {/* Подколонка 2 */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <button
                type="button"
                onClick={() => setActiveModal(MODAL_CONTENT.b2b)}
                style={itemStyle}
              >
                Юридическим лицам
              </button>
              <button
                type="button"
                onClick={() => setActiveModal(MODAL_CONTENT.invoiceCheck)}
                style={itemStyle}
              >
                Проверка счета
              </button>
              <button
                type="button"
                onClick={() => setActiveModal(MODAL_CONTENT.b2b)}
                style={itemStyle}
              >
                Корпоративные отделы
              </button>
              <button
                type="button"
                onClick={() => setActiveModal(MODAL_CONTENT.giftCards)}
                style={itemStyle}
              >
                Подарочные карты
              </button>
              <a
                href="/profile"
                onClick={(e) => goToPage(e, "/profile")}
                style={itemStyle}
              >
                Бонусная программа и профиль
              </a>
              <a
                href="#sales"
                onClick={(e) => goToSection(e, "sales")}
                style={itemStyle}
              >
                Акции и товары дня
              </a>
              <a
                href="#consultation"
                onClick={(e) => goToSection(e, "consultation")}
                style={itemStyle}
              >
                Подбор гарнитуры и обратная связь
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Нижняя полоса с навигацией и кнопкой наверх */}
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "18px 24px 28px",
          borderTop: "1px solid #333333",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          fontSize: "13px",
          color: "#94a3b8",
        }}
      >
        <span>
          © 2026 Shoply • Магазин гарнитур, аудиотехники и умных аксессуаров
        </span>
        <div style={{ display: "flex", gap: "18px", alignItems: "center" }}>
          <a
            href="#catalog"
            onClick={(e) => goToSection(e, "catalog")}
            style={{ color: "#94a3b8", textDecoration: "none" }}
          >
            Каталог
          </a>
          <a
            href="#categories"
            onClick={(e) => goToSection(e, "categories")}
            style={{ color: "#94a3b8", textDecoration: "none" }}
          >
            Категории
          </a>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              background: "#2d2d2d",
              border: "1px solid #444444",
              borderRadius: "8px",
              padding: "6px 12px",
              color: "#ffffff",
              fontSize: "12px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Наверх ↑
          </button>
        </div>
      </div>

      {/* Модальное окно */}
      {activeModal && (
        <div
          onClick={() => setActiveModal(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.78)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "460px",
              width: "100%",
              background: "#252525",
              color: "#f8fafc",
              border: "1px solid #3f3f46",
              borderRadius: "16px",
              padding: "24px",
              boxShadow: "0 24px 48px rgba(0, 0, 0, 0.6)",
            }}
          >
            <h3
              style={{
                fontSize: "19px",
                fontWeight: "800",
                color: "#ffffff",
                margin: "0 0 10px",
              }}
            >
              {activeModal.title}
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#d4d4d8",
                lineHeight: "1.6",
                margin: "0 0 20px",
              }}
            >
              {activeModal.text}
            </p>
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              style={{
                width: "100%",
                background: "#4f46e5",
                color: "#ffffff",
                border: "none",
                borderRadius: "10px",
                padding: "11px",
                fontSize: "14px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
