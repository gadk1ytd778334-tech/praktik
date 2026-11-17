"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ProductIcon from "@/components/ProductIcon";

const INITIAL_ORDERS = [
  {
    id: "SHP-8492",
    date: "15 ноября 2026",
    status: "Доставлен",
    statusColor: "#059669",
    statusBg: "#ecfdf5",
    total: 12990,
    items: [
      {
        title: "Беспроводные наушники Studio Pro",
        qty: 1,
        price: 12990,
        icon: "headphones",
      },
    ],
  },
  {
    id: "SHP-7910",
    date: "02 ноября 2026",
    status: "В пути (курьер)",
    statusColor: "#4f46e5",
    statusBg: "#eef2ff",
    total: 21990,
    items: [
      {
        title: "Умные часы Series X Titanium",
        qty: 1,
        price: 18500,
        icon: "watch",
      },
      {
        title: "Быстрая зарядка GaN 65W Pro",
        qty: 1,
        price: 3490,
        icon: "charger",
      },
    ],
  },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("orders");
  const [savedToast, setSavedToast] = useState(false);

  const [user, setUser] = useState({
    name: "Александр Волков",
    email: "a.volkov@shoply.ru",
    phone: "+7 (927) 555-34-12",
    city: "г. Маркс, пр-т Ленина, д. 42, кв. 18",
    bonus: 1450,
    level: "Gold Статус • Кэшбэк 7%",
  });

  useEffect(() => {
    const saved = localStorage.getItem("shoply_profile");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const id = setTimeout(
          () => setUser((prev) => ({ ...prev, ...parsed })),
          0
        );
        return () => clearTimeout(id);
      } catch {
        // игнорируем ошибку парсинга
      }
    }
  }, []);

  const handleSaveProfile = (e) => {
    e.preventDefault();
    localStorage.setItem("shoply_profile", JSON.stringify(user));
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 2500);
  };

  return (
    <main
      style={{
        maxWidth: "1160px",
        margin: "0 auto",
        padding: "28px 20px 64px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <div>
          <Link
            href="/"
            style={{
              fontSize: "13px",
              fontWeight: "700",
              color: "#4f46e5",
              textDecoration: "none",
            }}
          >
            ← Вернуться в магазин
          </Link>
          <h1
            style={{ fontSize: "30px", fontWeight: "800", margin: "6px 0 0" }}
          >
            Личный кабинет покупателя
          </h1>
        </div>
        <span
          style={{
            background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
            color: "#ffffff",
            fontSize: "12px",
            fontWeight: "800",
            padding: "6px 14px",
            borderRadius: "999px",
          }}
        >
          {user.level}
        </span>
      </div>

      {/* Верхняя карточка профиля и бонусов */}
      <section
        style={{
          background:
            "linear-gradient(125deg, #0f172a 0%, #1e1b4b 55%, #312e81 100%)",
          borderRadius: "20px",
          padding: "28px 32px",
          color: "#ffffff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "28px",
          boxShadow: "0 16px 36px rgba(15, 23, 42, 0.16)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "68px",
              height: "68px",
              borderRadius: "18px",
              background: "linear-gradient(135deg, #4f46e5 0%, #818cf8 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "26px",
              fontWeight: "900",
              color: "#ffffff",
              flexShrink: 0,
            }}
          >
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2
              style={{
                fontSize: "22px",
                fontWeight: "800",
                color: "#ffffff",
                margin: "0 0 4px",
              }}
            >
              {user.name}
            </h2>
            <p style={{ fontSize: "14px", color: "#cbd5e1", margin: 0 }}>
              {user.email} • {user.phone}
            </p>
          </div>
        </div>

        <div
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            borderRadius: "16px",
            padding: "14px 22px",
            textAlign: "right",
          }}
        >
          <div
            style={{ fontSize: "12px", color: "#c7d2fe", fontWeight: "600" }}
          >
            Бонусный баланс (1 балл = 1 ₽)
          </div>
          <div
            style={{ fontSize: "26px", fontWeight: "900", color: "#fbbf24" }}
          >
            {user.bonus.toLocaleString("ru-RU")} баллов
          </div>
        </div>
      </section>
      {/* Переключатель вкладок профиля */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "24px",
          flexWrap: "wrap",
        }}
      >
        {[
          {
            key: "orders",
            label: `История заказов (${INITIAL_ORDERS.length})`,
          },
          { key: "settings", label: "Личные данные и адрес" },
          { key: "bonuses", label: "Привилегии и кэшбэк" },
        ].map((tab) => {
          const active = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              style={{
                padding: "10px 18px",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: "700",
                border: active ? "1px solid #4f46e5" : "1px solid #cbd5e1",
                background: active ? "#4f46e5" : "#ffffff",
                color: active ? "#ffffff" : "#0f172a",
                cursor: "pointer",
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Вкладка 1: История заказов */}
      {activeTab === "orders" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {INITIAL_ORDERS.map((order) => (
            <article
              key={order.id}
              style={{
                background: "#ffffff",
                borderRadius: "18px",
                border: "1px solid #e2e8f0",
                padding: "22px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "10px",
                  paddingBottom: "14px",
                  borderBottom: "1px solid #f1f5f9",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <span style={{ fontSize: "17px", fontWeight: "800" }}>
                    Заказ #{order.id}
                  </span>
                  <span style={{ fontSize: "13px", color: "#64748b" }}>
                    от {order.date}
                  </span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "14px" }}
                >
                  <span
                    style={{
                      background: order.statusBg,
                      color: order.statusColor,
                      fontSize: "12px",
                      fontWeight: "800",
                      padding: "5px 12px",
                      borderRadius: "999px",
                    }}
                  >
                    {order.status}
                  </span>
                  <span style={{ fontSize: "18px", fontWeight: "800" }}>
                    {order.total.toLocaleString("ru-RU")} ₽
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {order.items.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <span
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "10px",
                          background: "#1e1b4b",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <ProductIcon type={item.icon} size={20} />
                      </span>
                      <span style={{ fontSize: "14px", fontWeight: "600" }}>
                        {item.title} × {item.qty}
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "700",
                        color: "#64748b",
                      }}
                    >
                      {item.price.toLocaleString("ru-RU")} ₽
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Вкладка 2: Настройки личных данных */}
      {activeTab === "settings" && (
        <form
          onSubmit={handleSaveProfile}
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            border: "1px solid #e2e8f0",
            padding: "26px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "18px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ fontSize: "13px", fontWeight: "700" }}>
              ФИО получателя
            </label>
            <input
              type="text"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              required
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ fontSize: "13px", fontWeight: "700" }}>
              Электронная почта
            </label>
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ fontSize: "13px", fontWeight: "700" }}>
              Телефон для курьера
            </label>
            <input
              type="tel"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              required
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ fontSize: "13px", fontWeight: "700" }}>
              Адрес доставки по умолчанию
            </label>
            <input
              type="text"
              value={user.city}
              onChange={(e) => setUser({ ...user, city: e.target.value })}
            />
          </div>

          <div style={{ gridColumn: "1 / -1", marginTop: "6px" }}>
            <button
              type="submit"
              style={{
                background: "#4f46e5",
                color: "#ffffff",
                border: "none",
                borderRadius: "10px",
                padding: "12px 24px",
                fontSize: "14px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Сохранить изменения профиля
            </button>
          </div>
        </form>
      )}

      {/* Вкладка 3: Программа лояльности */}
      {activeTab === "bonuses" && (
        <div
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            border: "1px solid #e2e8f0",
            padding: "26px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <h3 style={{ fontSize: "19px", fontWeight: "800", margin: 0 }}>
            Ваши привилегии: {user.level}
          </h3>
          <p style={{ fontSize: "14px", color: "#64748b", margin: 0 }}>
            Начисляем 7% баллами с каждой покупки техники. Баллами можно
            оплатить до 30% следующего заказа в корзине.
          </p>
          <div
            style={{ fontSize: "14px", fontWeight: "700", color: "#059669" }}
          >
            ✓ Бесплатная экспресс-доставка в день заказа активна
          </div>
        </div>
      )}

      {savedToast && (
        <div
          role="status"
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 9999,
            background: "#059669",
            color: "#ffffff",
            padding: "12px 20px",
            borderRadius: "12px",
            fontSize: "14px",
            fontWeight: "700",
            boxShadow: "0 12px 30px rgba(5, 150, 105, 0.35)",
          }}
        >
          ✓ Данные профиля сохранены
        </div>
      )}
    </main>
  );
}
