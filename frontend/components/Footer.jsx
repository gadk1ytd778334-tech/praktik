"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const MODAL_CONTENT = {
  about: {
    title: "О платформе UnifiedStack",
    text: "UnifiedStack — игровая экосистема нового поколения, объединяющая магазин лицензионных цифровых копий, облачный гейминг с минимальным пингом и единый профиль игрока.",
  },
  developers: {
    title: "Разработчикам и издателям",
    text: "Публикуйте игры в каталоге UnifiedStack, подключайте облачный запуск без скачивания и управляйте релизами через единый кабинет партнёра.",
  },
  vacancies: {
    title: "Карьера в UnifiedStack",
    text: "Ищем инженеров облачной инфраструктуры (WebRTC / GPU-кластеры), Next.js-разработчиков и комьюнити-менеджеров. Резюме: jobs@unifiedstack.gg.",
  },
  privacy: {
    title: "Защита данных и безопасность аккаунта",
    text: "Данные профиля, история транзакций внутреннего кошелька и сохранения облачных сессий защищены JWT-авторизацией и шифрованием.",
  },
  digitalSales: {
    title: "Правила покупки цифровых копий",
    text: "Лицензионные игры и дополнения (DLC) закрепляются за вашим аккаунтом навсегда сразу после оплаты и доступны для запуска в библиотеке.",
  },
  terms: {
    title: "Пользовательское соглашение",
    text: "Условия использования магазина цифровых товаров, облачных игровых серверов, кастомизации мини-профиля и системы достижений UnifiedStack.",
  },
  recommendations: {
    title: "Рекомендательные алгоритмы витрины",
    text: "На платформе UnifiedStack применяются алгоритмы подбора игр дня, скидок недели и облачных тарифов на основе ваших жанровых предпочтений.",
  },
  serverStatus: {
    title: "Статус серверов и дата-центров",
    text: "Все кластеры облачного гейминга (Москва, Санкт-Петербург, Екатеринбург, Новосибирск) работают штатно. Средняя задержка: 11 мс, аптайм 99.98%.",
  },
  howToBuy: {
    title: "Как купить игру или подписку",
    text: "Выберите игру в каталоге или конвейере скидок, добавьте в корзину, оплатите с внутреннего кошелька или картой — игра мгновенно появится в вашей библиотеке.",
  },
  payment: {
    title: "Способы пополнения и оплаты",
    text: "Пополнение кошелька UnifiedStack без комиссии через СБП, банковские карты, а также оплата накопленными бонусными баллами.",
  },
  cloudTariffs: {
    title: "Тарифы облачного гейминга",
    text: "Запускайте требовательные AAA-игры в 4K 120 FPS даже на слабом ноутбуке или смартфоне. Доступны почасовые пакеты и безлимитные подписки.",
  },
  activation: {
    title: "Мгновенная активация в библиотеке",
    text: "Цифровые копии не требуют ожидания доставки — доступ к скачиванию или облачному запуску открывается в течение 3 секунд после оплаты.",
  },
  refunds: {
    title: "Возврат цифровых копий",
    text: "Вы можете оформить возврат средств на кошелёк UnifiedStack в течение 14 дней с момента покупки, если время в игре составляет менее 2 часов.",
  },
  techSupport: {
    title: "Диагностика пинга и лаунчера",
    text: "Проверьте скорость соединения до ближайшего облачного узла и настройки битрейта в разделе технической поддержки 24/7.",
  },
  cyberClubs: {
    title: "Киберспортивным клубам и аренам",
    text: "Специальные корпоративные лицензии, выделенные облачные слоты для турниров и централизованное управление аккаунтами для компьютерных клубов.",
  },
  invoiceCheck: {
    title: "Закрывающие документы для партнёров",
    text: "Проверка счетов и актов для киберспортивных организаций и турнирных операторов по номеру договора: b2b@unifiedstack.gg.",
  },
  giftCodes: {
    title: "Подарочные коды и ваучеры",
    text: "Подарите другу пополнение кошелька UnifiedStack или любую игру из каталога — цифровой сертификат придёт мгновенно.",
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
        {/* Левая колонка: Платформа */}
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
            Платформа
          </h4>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <button
              type="button"
              onClick={() => setActiveModal(MODAL_CONTENT.about)}
              style={itemStyle}
            >
              О платформе UnifiedStack
            </button>
            <a
              href="#market-news"
              onClick={(e) => goToSection(e, "market-news")}
              style={itemStyle}
            >
              Пульс рынка: чипы и железо
            </a>
            <button
              type="button"
              onClick={() => setActiveModal(MODAL_CONTENT.developers)}
              style={itemStyle}
            >
              Разработчикам и издателям игр
            </button>
            <button
              type="button"
              onClick={() => setActiveModal(MODAL_CONTENT.vacancies)}
              style={itemStyle}
            >
              Вакансии в команде
            </button>
            <button
              type="button"
              onClick={() => setActiveModal(MODAL_CONTENT.privacy)}
              style={itemStyle}
            >
              Политика безопасности и защиты аккаунта
            </button>
            <button
              type="button"
              onClick={() => setActiveModal(MODAL_CONTENT.digitalSales)}
              style={itemStyle}
            >
              Правила покупки цифровых копий
            </button>
            <button
              type="button"
              onClick={() => setActiveModal(MODAL_CONTENT.terms)}
              style={itemStyle}
            >
              Пользовательское соглашение
            </button>
            <button
              type="button"
              onClick={() => setActiveModal(MODAL_CONTENT.recommendations)}
              style={itemStyle}
            >
              На платформе применяются рекомендательные технологии
            </button>
            <button
              type="button"
              onClick={() => setActiveModal(MODAL_CONTENT.serverStatus)}
              style={itemStyle}
            >
              Статус серверов облачного гейминга
            </button>
          </div>
        </div>

        {/* Правый блок: Игрокам (2 колонки как на скриншоте) */}
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
            Игрокам
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
                onClick={() => setActiveModal(MODAL_CONTENT.howToBuy)}
                style={itemStyle}
              >
                Как купить игру или подписку
              </button>
              <button
                type="button"
                onClick={() => setActiveModal(MODAL_CONTENT.payment)}
                style={itemStyle}
              >
                Пополнение кошелька и оплата
              </button>
              <button
                type="button"
                onClick={() => setActiveModal(MODAL_CONTENT.cloudTariffs)}
                style={itemStyle}
              >
                Тарифы облачного гейминга
              </button>
              <button
                type="button"
                onClick={() => setActiveModal(MODAL_CONTENT.activation)}
                style={itemStyle}
              >
                Мгновенная активация
              </button>
              <a
                href="/profile"
                onClick={(e) => goToPage(e, "/profile")}
                style={itemStyle}
              >
                Моя библиотека и заказы
              </a>
              <button
                type="button"
                onClick={() => setActiveModal(MODAL_CONTENT.refunds)}
                style={itemStyle}
              >
                Возврат цифровых копий
              </button>
              <button
                type="button"
                onClick={() => setActiveModal(MODAL_CONTENT.techSupport)}
                style={itemStyle}
              >
                Проверка пинга и лаунчера
              </button>
            </div>

            {/* Подколонка 2 */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <button
                type="button"
                onClick={() => setActiveModal(MODAL_CONTENT.cyberClubs)}
                style={itemStyle}
              >
                Киберспортивным клубам
              </button>
              <button
                type="button"
                onClick={() => setActiveModal(MODAL_CONTENT.invoiceCheck)}
                style={itemStyle}
              >
                Проверка договора клуба
              </button>
              <button
                type="button"
                onClick={() => setActiveModal(MODAL_CONTENT.cyberClubs)}
                style={itemStyle}
              >
                Турнирные лицензии
              </button>
              <button
                type="button"
                onClick={() => setActiveModal(MODAL_CONTENT.giftCodes)}
                style={itemStyle}
              >
                Подарочные коды
              </button>
              <a
                href="/profile"
                onClick={(e) => goToPage(e, "/profile")}
                style={itemStyle}
              >
                Оформление мини-профиля
              </a>
              <a
                href="#sales"
                onClick={(e) => goToSection(e, "sales")}
                style={itemStyle}
              >
                Скидки и предложения дня
              </a>
              <a
                href="#consultation"
                onClick={(e) => goToSection(e, "consultation")}
                style={itemStyle}
              >
                Поддержка и подбор
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Нижняя полоса с быстрой навигацией по разделам и кнопкой наверх */}
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
        <span>© 2026 UnifiedStack • Игровая платформа и облачный гейминг</span>
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
          <a
            href="/profile"
            onClick={(e) => goToPage(e, "/profile")}
            style={{ color: "#94a3b8", textDecoration: "none" }}
          >
            Профиль
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
