import { Suspense } from "react";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";
import SaleConveyorWidget from "@/components/SaleConveyorWidget";
import ProductIcon from "@/components/ProductIcon";
import CatalogSkeleton from "@/components/CatalogSkeleton";
import DailyCultConveyor from "@/components/DailyCultConveyor";

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
    bgGradient: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
    iconLabel: "headphones",
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
    bgGradient: "linear-gradient(135deg, #064e3b 0%, #047857 100%)",
    iconLabel: "watch",
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
    bgGradient: "linear-gradient(135deg, #7c2d12 0%, #c2410c 100%)",
    iconLabel: "charger",
  },
];

async function CatalogContent({ searchParams }) {
  const resolvedParams = (await searchParams) || {};
  const query = (resolvedParams.q || "").toLowerCase().trim();
  const selectedCategory = (resolvedParams.category || "").toLowerCase().trim();

  const filteredProducts = MOCK_PRODUCTS.filter((item) => {
    const matchesQuery =
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);
    const matchesCategory =
      !selectedCategory || item.categorySlug === selectedCategory;
    return matchesQuery && matchesCategory;
  });

  return (
    <>
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
              Сбросить фильтр ×
            </Link>
          )}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
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
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <span
                  style={{
                    alignSelf: "flex-start",
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
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#0f172a",
                    margin: 0,
                  }}
                >
                  {cat.title}
                </h3>
                <p style={{ fontSize: "13px", color: "#64748b", margin: 0 }}>
                  {cat.subtitle}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: "12px",
                    borderTop: "1px solid #f1f5f9",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: cat.accent,
                  }}
                >
                  <span>Смотреть товары →</span>
                  <span>{cat.count}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <section id="catalog">
        <h2
          style={{
            fontSize: "26px",
            fontWeight: "800",
            color: "#0f172a",
            marginBottom: "20px",
          }}
        >
          {query ? `Результаты поиска: «${query}»` : "Популярные товары"} (
          {filteredProducts.length})
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
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
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Link
                href={`/product/${product.slug}`}
                style={{
                  position: "relative",
                  height: "200px",
                  background: product.bgGradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
              >
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
                  }}
                >
                  {product.badge}
                </span>
                <span
                  style={{
                    position: "absolute",
                    top: "14px",
                    right: "14px",
                    background: "rgba(255,255,255,0.16)",
                    color: "#ffffff",
                    fontSize: "12px",
                    padding: "4px 10px",
                    borderRadius: "8px",
                  }}
                >
                  ★ {product.rating} ({product.reviews})
                </span>
                <ProductIcon type={product.iconLabel} size={64} />
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
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    color: "#6366f1",
                  }}
                >
                  {product.category}
                </span>
                <Link
                  href={`/product/${product.slug}`}
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#0f172a",
                    textDecoration: "none",
                  }}
                >
                  {product.title}
                </Link>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {product.specs.map((spec, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: "12px",
                        color: "#475569",
                        background: "#f1f5f9",
                        padding: "4px 9px",
                        borderRadius: "6px",
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
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "13px",
                        color: "#94a3b8",
                        textDecoration: "line-through",
                      }}
                    >
                      {product.oldPrice.toLocaleString("ru-RU")} ₽
                    </div>
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
      </section>
    </>
  );
}

export default function HomePage({ searchParams }) {
  return (
    <main
      style={{
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "24px 20px 64px",
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr) 340px",
        gap: "28px",
        alignItems: "start",
      }}
    >
      <div>
        <section
          style={{
            background:
              "linear-gradient(120deg, #1e293b 0%, #312e81 55%, #4f46e5 100%)",
            borderRadius: "20px",
            padding: "36px 40px",
            color: "#ffffff",
            marginBottom: "32px",
          }}
        >
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
            style={{ fontSize: "34px", fontWeight: "800", margin: "0 0 12px" }}
          >
            Умные гаджеты и аксессуары нового поколения
          </h1>
          <p style={{ fontSize: "16px", color: "#e0e7ff", margin: "0 0 22px" }}>
            Быстрая доставка в день заказа, проверка перед оплатой и актуальные
            модели в наличии.
          </p>
          <a
            href="#catalog"
            style={{
              display: "inline-block",
              background: "#ffffff",
              color: "#312e81",
              padding: "12px 24px",
              borderRadius: "10px",
              fontWeight: "700",
              textDecoration: "none",
            }}
          >
            Перейти в каталог
          </a>
        </section>
        <DailyCultConveyor />

        <Suspense fallback={<CatalogSkeleton />}>
          <CatalogContent searchParams={searchParams} />
        </Suspense>
      </div>

      <SaleConveyorWidget />
    </main>
  );
}
