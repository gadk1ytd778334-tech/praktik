import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";

const MOCK_CATEGORIES = [
  {
    id: 1,
    slug: "headphones",
    title: "Наушники и аудио",
    subtitle: "Беспроводные, с активным шумоподавлением ANC и студийным звуком",
    count: "12 моделей",
    badge: "Популярное",
    gradient: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)",
    accent: "#4f46e5",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  },
  {
    id: 2,
    slug: "smartwatches",
    title: "Смарт-часы и трекеры",
    subtitle:
      "Контроль здоровья, GPS-навигация, AMOLED-экраны и защита от воды",
    count: "8 моделей",
    badge: "Новинки 2026",
    gradient: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)",
    accent: "#059669",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="6" y="6" width="12" height="12" rx="3" />
        <path d="M9 6V3h6v3M9 18v3h6v-3M12 9v3l2 1" />
      </svg>
    ),
  },
  {
    id: 3,
    slug: "accessories",
    title: "Зарядки и аксессуары",
    subtitle: "Мощные GaN-адаптеры, кабели быстрой зарядки и док-станции",
    count: "15 моделей",
    badge: "До -20%",
    gradient: "linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)",
    accent: "#ea580c",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

const MOCK_PRODUCTS = [
  {
    id: 1,
    slug: "studio-pro",
    title: "Беспроводные наушники Studio Pro",
    category: "НАУШНИКИ",
    categorySlug: "headphones",
    price: 12990,
    oldPrice: 15990,
    badge: "ХИТ",
    badgeColor: "#ef4444",
    rating: "4.9",
    reviews: 142,
    specs: ["ANC шумоподавление", "До 36 ч работы", "Bluetooth 5.4"],
    inStock: true,
    bgGradient: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
    illustration: (
      <svg width="110" height="110" viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="60" r="46" fill="rgba(255,255,255,0.08)" />
        <path
          d="M30 68V56C30 39.4315 43.4315 26 60 26C76.5685 26 90 39.4315 90 56V68"
          stroke="#a5b4fc"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <rect x="22" y="58" width="16" height="30" rx="8" fill="#ffffff" />
        <rect x="82" y="58" width="16" height="30" rx="8" fill="#ffffff" />
        <rect x="26" y="63" width="8" height="20" rx="4" fill="#6366f1" />
        <rect x="86" y="63" width="8" height="20" rx="4" fill="#6366f1" />
      </svg>
    ),
  },
  {
    id: 2,
    slug: "series-x",
    title: "Умные часы Series X Titanium",
    category: "СМАРТ-ЧАСЫ",
    categorySlug: "smartwatches",
    price: 18500,
    oldPrice: 21800,
    badge: "-15%",
    badgeColor: "#f97316",
    rating: "4.8",
    reviews: 98,
    specs: ['AMOLED 1.96"', "GPS + ЭКГ", "Влагозащита 5 ATM"],
    inStock: true,
    bgGradient: "linear-gradient(135deg, #064e3b 0%, #047857 100%)",
    illustration: (
      <svg width="110" height="110" viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="60" r="46" fill="rgba(255,255,255,0.08)" />
        <rect
          x="46"
          y="18"
          width="28"
          height="84"
          rx="8"
          fill="#34d399"
          fillOpacity="0.35"
        />
        <rect x="36" y="34" width="48" height="52" rx="14" fill="#ffffff" />
        <rect x="41" y="39" width="38" height="42" rx="10" fill="#065f46" />
        <path
          d="M60 49V60L68 65"
          stroke="#6ee7b7"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 3,
    slug: "gan-65w",
    title: "Быстрая зарядка GaN 65W Pro",
    category: "АКСЕССУАРЫ",
    categorySlug: "accessories",
    price: 3490,
    oldPrice: 4200,
    badge: "ВЫБОР ПОКУПАТЕЛЕЙ",
    badgeColor: "#4f46e5",
    rating: "5.0",
    reviews: 215,
    specs: [
      "3 порта (2xUSB-C, USB-A)",
      "Power Delivery 3.0",
      "Компактный корпус",
    ],
    inStock: true,
    bgGradient: "linear-gradient(135deg, #7c2d12 0%, #c2410c 100%)",
    illustration: (
      <svg width="110" height="110" viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="60" r="46" fill="rgba(255,255,255,0.08)" />
        <rect x="38" y="36" width="44" height="54" rx="10" fill="#ffffff" />
        <rect x="48" y="22" width="6" height="14" rx="2" fill="#fed7aa" />
        <rect x="66" y="22" width="6" height="14" rx="2" fill="#fed7aa" />
        <path d="M62 48L51 64H60L58 78L69 62H60L62 48Z" fill="#ea580c" />
      </svg>
    ),
  },
];
export function generateStaticParams() {
  return [{ slug: "studio-pro" }, { slug: "series-x" }, { slug: "gan-65w" }];
}

export default function HomePage() {
  const query = "";
  const selectedCategory = "";

  const filteredProducts = MOCK_PRODUCTS.filter((item) => {
    const matchesQuery =
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.specs.some((s) => s.toLowerCase().includes(query));

    const matchesCategory =
      !selectedCategory || item.categorySlug === selectedCategory;

    return matchesQuery && matchesCategory;
  });

  return (
    <main
      style={{
        maxWidth: "1240px",
        margin: "0 auto",
        padding: "24px 20px 64px",
      }}
    >
      <section
        style={{
          background:
            "linear-gradient(120deg, #1e293b 0%, #312e81 55%, #4f46e5 100%)",
          borderRadius: "20px",
          padding: "36px 40px",
          color: "#ffffff",
          marginBottom: "32px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "24px",
          boxShadow: "0 12px 30px rgba(79, 70, 229, 0.18)",
        }}
      >
        <div style={{ maxWidth: "620px" }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.16)",
              padding: "6px 14px",
              borderRadius: "999px",
              fontSize: "13px",
              fontWeight: "600",
              marginBottom: "14px",
            }}
          >
            Официальная техника с гарантией 12 месяцев
          </span>
          <h1
            style={{
              fontSize: "34px",
              fontWeight: "800",
              lineHeight: 1.2,
              margin: "0 0 12px",
            }}
          >
            Умные гаджеты и аксессуары нового поколения
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "#e0e7ff",
              lineHeight: 1.5,
              margin: "0 0 22px",
            }}
          >
            Быстрая доставка в день заказа, проверка перед оплатой и актуальные
            модели в наличии.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="#catalog"
              style={{
                background: "#ffffff",
                color: "#312e81",
                padding: "12px 24px",
                borderRadius: "10px",
                fontWeight: "700",
                textDecoration: "none",
                fontSize: "15px",
              }}
            >
              Перейти в каталог
            </a>
            {selectedCategory && (
              <Link
                href="/"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  color: "#ffffff",
                  padding: "12px 20px",
                  borderRadius: "10px",
                  fontWeight: "600",
                  textDecoration: "none",
                  fontSize: "15px",
                }}
              >
                Сбросить фильтр
              </Link>
            )}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "12px",
            minWidth: "250px",
          }}
        >
          {[
            {
              title: "Доставка от 2 часов",
              desc: "Курьером или в пункты выдачи",
            },
            { title: "Кэшбэк до 10%", desc: "Бонусами на следующие покупки" },
            { title: "Поддержка 24/7", desc: "Помощь с подбором и настройкой" },
          ].map((perk, idx) => (
            <div
              key={idx}
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(6px)",
                padding: "12px 16px",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <div style={{ fontWeight: "700", fontSize: "14px" }}>
                {perk.title}
              </div>
              <div
                style={{ fontSize: "12px", color: "#c7d2fe", marginTop: "2px" }}
              >
                {perk.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <h2
            style={{
              fontSize: "22px",
              fontWeight: "700",
              color: "#0f172a",
              margin: 0,
            }}
          >
            Категории товаров
          </h2>
          {selectedCategory && (
            <Link
              href="/"
              style={{
                fontSize: "14px",
                color: "#4f46e5",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Показать все категории ×
            </Link>
          )}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {MOCK_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.slug;
            return (
              <Link
                key={cat.id}
                href={isActive ? "/" : `/?category=${cat.slug}`}
                style={{
                  textDecoration: "none",
                  background: "#ffffff",
                  borderRadius: "16px",
                  padding: "22px",
                  border: isActive
                    ? `2px solid ${cat.accent}`
                    : "1px solid #e2e8f0",
                  boxShadow: isActive
                    ? "0 10px 25px rgba(79,70,229,0.12)"
                    : "0 4px 12px rgba(15,23,42,0.04)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "14px",
                      background: cat.gradient,
                      color: cat.accent,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {cat.icon}
                  </div>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "700",
                      color: cat.accent,
                      background: cat.gradient,
                      padding: "4px 10px",
                      borderRadius: "999px",
                    }}
                  >
                    {cat.badge}
                  </span>
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#0f172a",
                      margin: "0 0 6px",
                    }}
                  >
                    {cat.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#64748b",
                      lineHeight: 1.45,
                      margin: 0,
                    }}
                  >
                    {cat.subtitle}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "12px",
                    borderTop: "1px solid #f1f5f9",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: cat.accent,
                  }}
                >
                  <span>Смотреть товары →</span>
                  <span
                    style={{
                      color: "#94a3b8",
                      fontSize: "13px",
                      fontWeight: "500",
                    }}
                  >
                    {cat.count}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <section id="catalog">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "26px",
                fontWeight: "800",
                color: "#0f172a",
                margin: 0,
              }}
            >
              {query ? `Результаты поиска: «${query}»` : "Популярные товары"}
            </h2>
            <p
              style={{ fontSize: "14px", color: "#64748b", margin: "4px 0 0" }}
            >
              Найдено моделей: {filteredProducts.length}
            </p>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "48px 24px",
              textAlign: "center",
              border: "1px solid #e2e8f0",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#0f172a",
                marginBottom: "8px",
              }}
            >
              По вашему запросу товары не найдены
            </h3>
            <p style={{ color: "#64748b", marginBottom: "20px" }}>
              Попробуйте изменить поисковый запрос или сбросить фильтр
              категорий.
            </p>
            <Link
              href="/"
              style={{
                display: "inline-block",
                background: "#4f46e5",
                color: "#ffffff",
                padding: "10px 20px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Показать все товары
            </Link>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "24px",
            }}
          >
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                style={{
                  background: "#ffffff",
                  borderRadius: "18px",
                  border: "1px solid #e2e8f0",
                  overflow: "hidden",
                  boxShadow: "0 6px 18px rgba(15, 23, 42, 0.05)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Link
                  href={`/product/${product.slug}`}
                  style={{
                    position: "relative",
                    height: "220px",
                    background: product.bgGradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
                  {product.badge && (
                    <span
                      style={{
                        position: "absolute",
                        top: "14px",
                        left: "14px",
                        background: product.badgeColor,
                        color: "#ffffff",
                        fontSize: "11px",
                        fontWeight: "800",
                        padding: "5px 11px",
                        borderRadius: "999px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {product.badge}
                    </span>
                  )}

                  <span
                    style={{
                      position: "absolute",
                      top: "14px",
                      right: "14px",
                      background: "rgba(255,255,255,0.16)",
                      color: "#ffffff",
                      fontSize: "12px",
                      fontWeight: "600",
                      padding: "4px 10px",
                      borderRadius: "8px",
                    }}
                  >
                    ★ {product.rating} ({product.reviews})
                  </span>

                  {product.illustration}
                </Link>

                <div
                  style={{
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        color: "#6366f1",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {product.category}
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#10b981",
                        fontWeight: "600",
                      }}
                    >
                      ● В наличии
                    </span>
                  </div>

                  <Link
                    href={`/product/${product.slug}`}
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#0f172a",
                      textDecoration: "none",
                      lineHeight: 1.35,
                    }}
                  >
                    {product.title}
                  </Link>

                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
                  >
                    {product.specs.map((spec, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: "12px",
                          color: "#475569",
                          background: "#f1f5f9",
                          padding: "4px 9px",
                          borderRadius: "6px",
                          fontWeight: "500",
                        }}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      marginTop: "auto",
                      paddingTop: "14px",
                      borderTop: "1px solid #f1f5f9",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div>
                      {product.oldPrice && (
                        <div
                          style={{
                            fontSize: "13px",
                            color: "#94a3b8",
                            textDecoration: "line-through",
                          }}
                        >
                          {product.oldPrice.toLocaleString("ru-RU")} ₽
                        </div>
                      )}
                      <div
                        style={{
                          fontSize: "21px",
                          fontWeight: "800",
                          color: "#0f172a",
                        }}
                      >
                        {product.price.toLocaleString("ru-RU")} ₽
                      </div>
                    </div>

                    <AddToCartButton product={product} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
