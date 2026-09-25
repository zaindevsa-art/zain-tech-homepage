import Image from "next/image";

const navItems = [
  { label: "الأنظمة", href: "#zain-systems" },
  { label: "المميزات", href: "#zain-features" },
  { label: "خدماتنا", href: "#zain-digital-services" },
  { label: "التنزيلات", href: "/downloads" },
];

export function HomepageFoundation() {
  return (
    <main className="zt-home">
      <a className="zt-topbar" href="#zain-digital-services" aria-label="باقة البداية للتسويق الرقمي">
        <span>باقة البداية للتسويق الرقمي — شهر كامل بـ 1,500 ريال</span>
        <span aria-hidden="true">←</span>
      </a>

      <header className="zt-header">
        <div className="zt-container zt-header-inner">
          <a href="/" className="zt-brand" aria-label="Zain Tech">
            <Image
              src="/optimized/logo-220.webp"
              alt="Zain Tech"
              width={220}
              height={132}
              priority
              className="zt-brand-logo"
            />
          </a>

          <nav className="zt-nav" aria-label="الأقسام الرئيسية">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="zt-hero-start" aria-label="بداية الواجهة الرئيسية">
        <div className="zt-container">
          <span className="zt-eyebrow">تقنية تصنع فرقًا</span>
        </div>
      </section>
    </main>
  );
}
