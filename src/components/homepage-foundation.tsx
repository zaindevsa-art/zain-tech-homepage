"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "الأنظمة", href: "#zain-systems" },
  { label: "المميزات", href: "#zain-features" },
  { label: "خدماتنا", href: "#zain-digital-services" },
  { label: "التنزيلات", href: "/downloads" },
];

export function HomepageFoundation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <main className="zt-home">
      <a className="zt-topbar" href="#zain-digital-services" aria-label="باقة البداية للتسويق الرقمي">
        <span>باقة البداية للتسويق الرقمي — شهر كامل بـ 1,500 ريال</span>
        <span aria-hidden="true">←</span>
      </a>

      <header className="zt-header">
        <div className="zt-container zt-header-inner">
          <a href="/" className="zt-brand" aria-label="Zain Tech" onClick={closeMobileMenu}>
            <Image
              src="/optimized/logo-220.webp"
              alt="Zain Tech"
              width={220}
              height={132}
              priority
              className="zt-brand-logo"
            />
          </a>

          <button
            type="button"
            className="zt-mobile-menu-button"
            aria-label={mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={mobileMenuOpen}
            aria-controls="zt-main-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X size={22} strokeWidth={1.8} /> : <Menu size={24} strokeWidth={1.8} />}
          </button>

          <nav
            id="zt-main-navigation"
            className={`zt-nav ${mobileMenuOpen ? "is-open" : ""}`}
            aria-label="الأقسام الرئيسية"
          >
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={closeMobileMenu}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="zt-hero-start" aria-labelledby="zt-hero-title">
        <div className="zt-container">
          <div className="zt-hero-copy">
            <span className="zt-eyebrow">تقنية تصنع فرقًا</span>

            <h1 id="zt-hero-title" className="zt-hero-title">
              <span>نحوّل فكرتك</span>
              <span>إلى منظومة رقمية</span>
              <span>تنمو مع أعمالك</span>
            </h1>

            <p className="zt-hero-description">
              مواقع وتطبيقات وتسويق وبرمجيات مخصصة — نأخذ احتياج مشروعك من الفكرة إلى الإطلاق والتطوير
            </p>

            <div className="zt-hero-actions" aria-label="إجراءات البداية">
              <a className="zt-button zt-button-primary" href="#contact">
                ابدأ مشروعك
              </a>
              <a className="zt-button zt-button-secondary" href="#zain-digital-services">
                استكشف حلولنا
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
