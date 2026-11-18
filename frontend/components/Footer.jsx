"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const HELP_INFO = {
  delivery: {
    title: "Доставка заказов",
    text: "Бесплатная экспресс-доставка курьером в день заказа при оформлении до 16:00. Также доступен самовывоз из пунктов выдачи по всей России.",
  },
  payment: {
    title: "Способы оплаты",
    text: "Оплата банковской картой онлайн, через Систему быстрых платежей (СБП) или наличными/картой курьеру после проверки устройства.",
  },
  returns: {
    title: "Гарантия и возврат",
    text: "Официальная гарантия 12 месяцев на всю электронику. Обмен или возврат товара надлежащего качества в течение 14 дней без лишних вопросов.",
  },
};

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const [modalData, setModalData] = useState(null);
  const [copiedText, setCopiedText] = useState("");

  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    if (pathname === "/") {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    router.push(`/#${sectionId}`);
  };

  const handleCopy = (e, value, label) => {
    e.preventDefault();
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(value);
      setCopiedText(`${label} скопирован: ${value}`);
      setTimeout(() => setCopiedText(""), 2500);
    }
  };

  const linkStyle = {
    background: "transparent",
    border: "none",
    padding: 0,
    fontSize: "15px",
    color: "#94a3b8",
    textDecoration: "none",
    cursor: "pointer",
    textAlign: "left",
  };

  return (
    <footer
      style={{
        marginTop: "auto",
        background: "#0f172a",
        color: "#cbd5e1",
        borderTop: "1px solid #1e293b",
      }}
    >
      <div
        style={{
          maxWidth: "1160px",
          margin: "0 auto",
          padding: "56px 24px 44px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "40px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h4
            style={{
              fontSize: "14px",
              fontWeight: "800",
              letterSpacing: "0.06em",
              color: "#ffffff",
              margin: "0 0 4px",
            }}
          >
            МАГАЗИН
          </h4>
          <a
            href="#catalog"
            onClick={(e) => handleSmoothScroll(e, "catalog")}
            style={linkStyle}
          >
            Каталог
          </a>
          <a
            href="#categories"
            onClick={(e) => handleSmoothScroll(e, "categories")}
            style={linkStyle}
          >
            Категории
          </a>
          <a
            href="#sales"
            onClick={(e) => handleSmoothScroll(e, "sales")}
            style={linkStyle}
          >
            Акции
          </a>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h4
            style={{
              fontSize: "14px",
              fontWeight: "800",
              letterSpacing: "0.06em",
              color: "#ffffff",
              margin: "0 0 4px",
            }}
          >
            ПОМОЩЬ
          </h4>
          <button
            type="button"
            onClick={() => setModalData(HELP_INFO.delivery)}
            style={linkStyle}
          >
            Доставка
          </button>
          <button
            type="button"
            onClick={() => setModalData(HELP_INFO.payment)}
            style={linkStyle}
          >
            Оплата
          </button>
          <button
            type="button"
            onClick={() => setModalData(HELP_INFO.returns)}
            style={linkStyle}
          >
            Возврат
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h4
            style={{
              fontSize: "14px",
              fontWeight: "800",
              letterSpacing: "0.06em",
              color: "#ffffff",
              margin: "0 0 4px",
            }}
          >
            КОНТАКТЫ
          </h4>
          <a
            href="#phone"
            onClick={(e) => handleCopy(e, "8 800 000-00-00", "Телефон")}
            style={linkStyle}
          >
            8 800 000-00-00
          </a>
          <a
            href="#email"
            onClick={(e) => handleCopy(e, "hello@shoply.ru", "Email")}
            style={linkStyle}
          >
            hello@shoply.ru
          </a>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1160px",
          margin: "0 auto",
          padding: "20px 24px 32px",
          borderTop: "1px solid #1e293b",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "13px",
          color: "#64748b",
        }}
      >
        <span>© 2026 Shoply</span>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            background: "transparent",
            border: "none",
            color: "#94a3b8",
            fontSize: "13px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Наверх ↑
        </button>
      </div>

      {modalData && (
        <div
          onClick={() => setModalData(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15, 23, 42, 0.78)",
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
              maxWidth: "440px",
              width: "100%",
              background: "#1e293b",
              color: "#f8fafc",
              border: "1px solid #334155",
              borderRadius: "18px",
              padding: "24px",
              boxShadow: "0 24px 48px rgba(0, 0, 0, 0.5)",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "800",
                color: "#ffffff",
                margin: "0 0 10px",
              }}
            >
              {modalData.title}
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#cbd5e1",
                lineHeight: "1.6",
                margin: "0 0 20px",
              }}
            >
              {modalData.text}
            </p>
            <button
              type="button"
              onClick={() => setModalData(null)}
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

      {copiedText && (
        <div
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 100000,
            background: "#059669",
            color: "#ffffff",
            padding: "10px 18px",
            borderRadius: "10px",
            fontSize: "13px",
            fontWeight: "700",
          }}
        >
          ✓ {copiedText}
        </div>
      )}
    </footer>
  );
}
