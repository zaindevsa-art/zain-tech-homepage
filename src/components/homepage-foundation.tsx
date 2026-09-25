"use client";

import Image from "next/image";
import Link from "next/link";
import { Code2, Megaphone, Menu, Monitor, Smartphone, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "الأنظمة", href: "#zain-systems" },
  { label: "المميزات", href: "#zain-features" },
  { label: "خدماتنا", href: "#zain-digital-services" },
  { label: "التنزيلات", href: "/downloads" },
];

const capabilityIcons = [
  { label: "التسويق", Icon: Megaphone },
  { label: "المواقع", Icon: Monitor },
  { label: "التطبيقات", Icon: Smartphone },
  { label: "البرمجيات", Icon: Code2 },
];

const serviceOffers = [
  {
    id: "marketing",
    service: "التسويق الرقمي",
    packageName: "باقة البداية",
    price: "1,500 ر.س",
    duration: "شهر واحد",
    features: ["12 منشورًا", "12 تصميمًا", "إدارة منصتين"],
    cta: "اطلب الباقة",
  },
  {
    id: "systems",
    service: "الأنظمة",
    packageName: "نظام مخصص",
    price: "عرض مخصص",
    duration: "حسب نطاق المشروع",
    features: ["تحليل سير العمل", "لوحة إدارة", "صلاحيات وتقارير"],
    cta: "اطلب عرضًا",
  },
  {
    id: "websites",
    service: "المواقع",
    packageName: "موقع أعمال مخصص",
    price: "عرض مخصص",
    duration: "حسب المتطلبات",
    features: ["تصميم واجهة", "تطوير متجاوب", "تجهيز للإطلاق"],
    cta: "اطلب عرضًا",
  },
  {
    id: "apps",
    service: "التطبيقات",
    packageName: "تطبيق مخصص",
    price: "عرض مخصص",
    duration: "حسب نطاق المشروع",
    features: ["تجربة مستخدم", "تطوير التطبيق", "اختبار وإطلاق"],
    cta: "اطلب عرضًا",
  },
  {
    id: "software",
    service: "البرمجيات",
    packageName: "برمجية مخصصة",
    price: "عرض مخصص",
    duration: "حسب نطاق المشروع",
    features: ["تحليل الاحتياج", "تطوير مخصص", "دعم وتوسعة"],
    cta: "اطلب عرضًا",
  },
] as const;

export function HomepageFoundation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(serviceOffers[0].id);

  const closeMobileMenu = () => setMobileMenuOpen(false);
  const offer = serviceOffers.find((item) => item.id === selectedService) ?? serviceOffers[0];

  return (
    <main className="zt-home">
      <a className="zt-topbar" href="#zain-digital-services" aria-label="باقة البداية للتسويق الرقمي">
        <span>باقة البداية للتسويق الرقمي — شهر كامل بـ 1,500 ريال</span>
        <span aria-hidden="true">←</span>
      </a>

      <header className="zt-header">
        <div className="zt-container zt-header-inner">
          <Link href="/" className="zt-brand" aria-label="Zain Tech" onClick={closeMobileMenu}>
            <Image
              src="/optimized/logo-220.webp"
              alt="Zain Tech"
              width={220}
              height={132}
              priority
              className="zt-brand-logo"
            />
          </Link>

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
        <div className="zt-container zt-hero-grid">
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

            <div className="zt-hero-capabilities" aria-label="مجالات الحلول والخدمات">
              <div className="zt-capability-icons" aria-label="التسويق والمواقع والتطبيقات والبرمجيات">
                {capabilityIcons.map(({ label, Icon }) => (
                  <span className="zt-capability-icon" key={label} title={label} aria-label={label}>
                    <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                ))}
              </div>

              <div className="zt-capability-copy">
                <strong>10+ حلول وخدمات</strong>
                <p>
                  من التسويق والتصميم إلى البرمجة والأنظمة — منظومة واحدة تساعد مشروعك على الانطلاق والنمو.
                </p>
              </div>
            </div>
          </div>

          <div className="zt-hero-visual">
            <div className="zt-hero-image-shell">
              <Image
                src="/home/hero-businesswoman.webp"
                alt="رائدة أعمال تستخدم حاسبًا محمولًا"
                fill
                priority
                unoptimized
                sizes="(max-width: 960px) 100vw, 50vw"
                className="zt-hero-image"
              />
            </div>

            <div className="zt-offer-card">
              <div className="zt-offer-heading">
                <span>ابدأ بخطوة واضحة</span>
                <small>اختر الخدمة وشاهد التفاصيل المناسبة مباشرة</small>
              </div>

              <div className="zt-offer-fields">
                <label className="zt-offer-field">
                  <span>الخدمة</span>
                  <select
                    value={selectedService}
                    onChange={(event) => setSelectedService(event.target.value as typeof selectedService)}
                    aria-label="اختر الخدمة"
                  >
                    {serviceOffers.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.service}
                      </option>
                    ))}
                  </select>
                </label>

                <div className="zt-offer-field">
                  <span>الباقة</span>
                  <strong>{offer.packageName}</strong>
                </div>
              </div>

              <div className="zt-offer-price">
                <strong>{offer.price}</strong>
                <span>{offer.duration}</span>
              </div>

              <div className="zt-offer-features" aria-label="تفاصيل الخدمة">
                {offer.features.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>

              <a className="zt-offer-cta" href="#contact" aria-label={`${offer.cta} - ${offer.service}`}>
                {offer.cta}
              </a>

              <p className="zt-offer-note">يمكنك أيضًا طلب عرض مخصص لنشاطك</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
