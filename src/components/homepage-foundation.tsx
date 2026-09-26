"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Code2, Megaphone, Menu, Monitor, Smartphone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import socialMediaNetworkAnimation from "../../social media network.json";

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

const infrastructureTechnologies = [
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  },
  {
    name: "Microsoft Azure",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
  },
  {
    name: "Google Cloud",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
  },
  {
    name: "Oracle Cloud",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  },
  {
    name: "Cloudflare",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg",
  },
] as const;

const servicePathCards = [
  {
    id: "software",
    label: "البرمجيات",
    title: "برمجيات تُبنى حول طريقة عملك",
    description:
      "حوّل الإجراءات المتكررة والعمليات المشتتة إلى تجربة رقمية واحدة، مصممة حول احتياج مشروعك وقابلة للتوسع مع نموه.",
    tags: ["لوحات تحكم", "أتمتة", "حلول مخصصة"],
    cta: "استكشف البرمجيات",
    href: "#contact",
    Icon: Code2,
    featured: true,
  },
  {
    id: "marketing",
    label: "التسويق",
    title: "تسويق يحوّل الظهور إلى طلب حقيقي",
    description:
      "نبني حضورك بخطة واضحة ومحتوى متناسق ورسالة تصل للعميل الصحيح، بدل أن يبقى التسويق مجرد نشر بلا نتيجة.",
    tags: ["استراتيجية", "محتوى", "إدارة منصات"],
    cta: "استكشف التسويق",
    href: "#contact",
    Icon: Megaphone,
    featured: false,
  },
  {
    id: "systems",
    label: "الأنظمة",
    title: "أنظمة تمنح فريقك وقتًا وتحكمًا أكبر",
    description:
      "أدوات عملية تساعدك على تنظيم التواصل والبيانات والعمل اليومي، لتنجز أسرع وتدير التفاصيل من مكان أوضح.",
    tags: ["Zain Sender", "Zain Data", "Fast Social"],
    cta: "استكشف الأنظمة",
    href: "#zain-systems",
    Icon: Monitor,
    featured: false,
  },

] as const;

type LottieAnimationInstance = {
  destroy: () => void;
  setSpeed?: (speed: number) => void;
};

type LottieApi = {
  loadAnimation: (options: {
    container: Element;
    renderer: "svg";
    loop: boolean;
    autoplay: boolean;
    animationData: unknown;
    rendererSettings?: { preserveAspectRatio?: string };
  }) => LottieAnimationInstance;
};

const lottieScriptSrc = "https://cdn.jsdelivr.net/npm/lottie-web@5.12.2/build/player/lottie.min.js";

function SocialMediaNetworkGraphic({ isVisible }: { isVisible: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animation: LottieAnimationInstance | null = null;
    let disposed = false;

    const mountAnimation = () => {
      if (disposed || !containerRef.current) return;

      const lottie = (window as typeof window & { lottie?: LottieApi }).lottie;
      if (!lottie) return;

      containerRef.current.replaceChildren();
      animation = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: JSON.parse(JSON.stringify(socialMediaNetworkAnimation)),
        rendererSettings: { preserveAspectRatio: "xMidYMid meet" },
      });
      animation.setSpeed?.(0.9);
    };

    const existingScript = document.querySelector<HTMLScriptElement>('script[data-zain-lottie="true"]');

    if ((window as typeof window & { lottie?: LottieApi }).lottie) {
      mountAnimation();
    } else if (existingScript) {
      existingScript.addEventListener("load", mountAnimation, { once: true });
    } else {
      const script = document.createElement("script");
      script.src = lottieScriptSrc;
      script.async = true;
      script.dataset.zainLottie = "true";
      script.addEventListener("load", mountAnimation, { once: true });
      document.head.appendChild(script);
    }

    return () => {
      disposed = true;
      existingScript?.removeEventListener("load", mountAnimation);
      animation?.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`zt-social-network-animation ${isVisible ? "is-visible" : ""}`}
      aria-label="رسم متحرك لشبكة التواصل الاجتماعي"
      role="img"
    />
  );
}

type OfferCategory = "systems" | "marketing" | "software";

const offerCategories = [
  { id: "systems", label: "الأنظمة" },
  { id: "marketing", label: "التسويق" },
  { id: "software", label: "البرمجيات" },
] as const;

const systemNames = ["Zain Sender", "Zain Data", "Nova Archive", "Fast Social"] as const;
type SystemName = (typeof systemNames)[number];
type SystemPlan = { id: string; label: string; price: number };

const systemPricing: Record<SystemName, readonly SystemPlan[]> = {
  "Zain Sender": [
    { id: "trial", label: "مجاني 3 أيام", price: 0 },
    { id: "monthly", label: "شهر", price: 350 },
    { id: "quarterly", label: "3 أشهر", price: 1200 },
    { id: "semiannual", label: "6 أشهر", price: 1650 },
    { id: "yearly", label: "سنة", price: 2000 },
  ],
  "Zain Data": [
    { id: "trial", label: "مجاني 3 أيام", price: 0 },
    { id: "monthly", label: "شهر", price: 350 },
    { id: "quarterly", label: "3 أشهر", price: 1200 },
    { id: "semiannual", label: "6 أشهر", price: 1650 },
    { id: "yearly", label: "سنة", price: 2000 },
  ],
  "Nova Archive": [{ id: "lifetime", label: "مدى الحياة", price: 1350 }],
  "Fast Social": [
    { id: "trial", label: "مجاني 3 أيام", price: 0 },
    { id: "monthly", label: "شهر", price: 449 },
    { id: "quarterly", label: "3 أشهر", price: 800 },
    { id: "semiannual", label: "6 أشهر", price: 1800 },
    { id: "yearly", label: "سنة", price: 2800 },
  ],
};

const marketingPackages = [
  {
    id: "starter",
    name: "باقة البداية",
    duration: "شهر واحد",
    price: 1500,
    originalPrice: null,
    monthlyLabel: null,
    features: ["إدارة منصتين تواصل اجتماعي", "خطة محتوى شهرية", "12 منشورًا شهريًا"],
  },
  {
    id: "growth",
    name: "باقة النمو",
    duration: "3 أشهر",
    price: 4200,
    originalPrice: 4500,
    monthlyLabel: "متوسط 1,400 ريال شهريًا",
    features: ["إدارة 2 إلى 3 منصات", "استراتيجية محتوى لمدة 3 أشهر", "16 منشورًا شهريًا"],
  },
  {
    id: "professional",
    name: "باقة الاحتراف",
    duration: "6 أشهر",
    price: 7800,
    originalPrice: 9000,
    monthlyLabel: "متوسط 1,300 ريال شهريًا",
    features: ["إدارة 3 منصات", "استراتيجية تسويق متكاملة", "20 منشورًا شهريًا"],
  },
] as const;

const softwareSolutions = ["لوحات تحكم", "أتمتة", "حلول مخصصة"] as const;

function formatPrice(price: number) {
  return price === 0 ? "مجاني" : `${price.toLocaleString("ar-SA")} ريال`;
}

export function HomepageFoundation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [offerCategory, setOfferCategory] = useState<OfferCategory>("systems");
  const [selectedSystem, setSelectedSystem] = useState<SystemName>("Zain Sender");
  const [selectedSystemPlan, setSelectedSystemPlan] = useState<string>("trial");
  const [selectedMarketingPackage, setSelectedMarketingPackage] =
    useState<(typeof marketingPackages)[number]["id"]>("starter");
  const [selectedSoftwareSolution, setSelectedSoftwareSolution] = useState<(typeof softwareSolutions)[number]>(
    softwareSolutions[0]
  );
  const socialShowcaseRef = useRef<HTMLElement>(null);
  const [socialShowcaseVisible, setSocialShowcaseVisible] = useState(false);

  useEffect(() => {
    const node = socialShowcaseRef.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setSocialShowcaseVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setSocialShowcaseVisible(true);
        observer.disconnect();
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);
  const systemPlans = systemPricing[selectedSystem];
  const activeSystemPlan = systemPlans.find((plan) => plan.id === selectedSystemPlan) ?? systemPlans[0];
  const activeMarketingPackage =
    marketingPackages.find((pkg) => pkg.id === selectedMarketingPackage) ?? marketingPackages[0];

  const handleCategoryChange = (category: OfferCategory) => {
    setOfferCategory(category);
  };

  const handleSystemChange = (system: SystemName) => {
    setSelectedSystem(system);
    setSelectedSystemPlan(systemPricing[system][0].id);
  };

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
            <a
              className="zt-nav-distributor"
              href="/programs/reseller"
              onClick={closeMobileMenu}
              aria-label="لوحة دخول الموزعين"
            >
              لوحة دخول الموزعين
            </a>
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
            <div className="zt-hero-image-wrap">
              <div className="zt-hero-image-shell">
                <Image
                  src="/home/hero-businesswoman.png"
                  alt="رائدة أعمال تستخدم حاسبًا محمولًا"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 960px) 100vw, 50vw"
                  className="zt-hero-image"
                />
              </div>

              <div className="zt-hero-assurances" aria-label="مزايا العمل مع زين تك">
                <div className="zt-assurance-item">
                  <span className="zt-assurance-mark zt-assurance-check" aria-hidden="true">✓</span>
                  <strong>حلول مبنية حول احتياج مشروعك</strong>
                </div>
                <div className="zt-assurance-item">
                  <span className="zt-assurance-mark" aria-hidden="true">◇</span>
                  <strong>دعم وتطوير قابل للتوسع بعد الإطلاق</strong>
                </div>
              </div>
            </div>

            <div className="zt-offer-card">
              <div className="zt-offer-heading">
                <span>ابدأ بخطوة واضحة</span>
                <small>اختر القسم ثم حدّد الخيار المناسب لتظهر لك التفاصيل مباشرة</small>
              </div>

              <label className="zt-offer-field zt-offer-category-field">
                <span>القسم</span>
                <select
                  value={offerCategory}
                  onChange={(event) => handleCategoryChange(event.target.value as OfferCategory)}
                  aria-label="اختر القسم"
                >
                  {offerCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </label>

              {offerCategory === "systems" ? (
                <>
                  <div className="zt-offer-fields">
                    <label className="zt-offer-field">
                      <span>اسم النظام</span>
                      <select
                        value={selectedSystem}
                        onChange={(event) => handleSystemChange(event.target.value as SystemName)}
                        aria-label="اختر النظام"
                      >
                        {systemNames.map((system) => (
                          <option key={system} value={system}>
                            {system}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="zt-offer-field">
                      <span>نوع الباقة</span>
                      <select
                        value={activeSystemPlan.id}
                        onChange={(event) => setSelectedSystemPlan(event.target.value)}
                        aria-label="اختر باقة النظام"
                      >
                        {systemPlans.map((plan) => (
                          <option key={plan.id} value={plan.id}>
                            {plan.label}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <div className="zt-offer-price">
                    <strong>{formatPrice(activeSystemPlan.price)}</strong>
                    <span>{selectedSystem} · {activeSystemPlan.label}</span>
                  </div>

                  <div className="zt-offer-features" aria-label="تفاصيل النظام">
                    <span>اختيار النظام</span>
                    <span>اختيار مدة الاشتراك</span>
                    <span>السعر يتحدث تلقائيًا</span>
                  </div>

                  <a className="zt-offer-cta" href="#contact" aria-label={`اطلب ${selectedSystem}`}>
                    {activeSystemPlan.price === 0 ? "ابدأ التجربة المجانية" : "اطلب النظام"}
                  </a>
                </>
              ) : null}

              {offerCategory === "marketing" ? (
                <>
                  <div className="zt-offer-fields zt-offer-fields-single">
                    <label className="zt-offer-field">
                      <span>الباقة</span>
                      <select
                        value={activeMarketingPackage.id}
                        onChange={(event) =>
                          setSelectedMarketingPackage(
                            event.target.value as (typeof marketingPackages)[number]["id"]
                          )
                        }
                        aria-label="اختر باقة التسويق"
                      >
                        {marketingPackages.map((pkg) => (
                          <option key={pkg.id} value={pkg.id}>
                            {pkg.name} — {pkg.duration}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <div className="zt-offer-price">
                    <div className="zt-offer-price-main">
                      <strong>{formatPrice(activeMarketingPackage.price)}</strong>
                      {activeMarketingPackage.originalPrice ? (
                        <del>{formatPrice(activeMarketingPackage.originalPrice)}</del>
                      ) : null}
                    </div>
                    <span>
                      {activeMarketingPackage.duration}
                      {activeMarketingPackage.monthlyLabel ? ` · ${activeMarketingPackage.monthlyLabel}` : ""}
                    </span>
                  </div>

                  <div className="zt-offer-features" aria-label="تفاصيل باقة التسويق">
                    {activeMarketingPackage.features.map((feature) => (
                      <span key={feature}>{feature}</span>
                    ))}
                  </div>

                  <a className="zt-offer-cta" href="#contact" aria-label={`اطلب ${activeMarketingPackage.name}`}>
                    اطلب الباقة
                  </a>
                </>
              ) : null}

              {offerCategory === "software" ? (
                <>
                  <div className="zt-offer-fields zt-offer-fields-single">
                    <label className="zt-offer-field">
                      <span>نوع الحل</span>
                      <select
                        value={selectedSoftwareSolution}
                        onChange={(event) =>
                          setSelectedSoftwareSolution(event.target.value as (typeof softwareSolutions)[number])
                        }
                        aria-label="اختر نوع البرمجية"
                      >
                        {softwareSolutions.map((solution) => (
                          <option key={solution} value={solution}>
                            {solution}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <div className="zt-offer-price">
                    <strong>عرض مخصص</strong>
                    <span>{selectedSoftwareSolution} · حسب نطاق المشروع</span>
                  </div>

                  <div className="zt-offer-features" aria-label="أنواع الحلول البرمجية">
                    {softwareSolutions.map((solution) => (
                      <span key={solution}>{solution}</span>
                    ))}
                  </div>

                  <a className="zt-offer-cta" href="#contact" aria-label={`اطلب عرضًا لـ ${selectedSoftwareSolution}`}>
                    اطلب عرضًا
                  </a>
                </>
              ) : null}

            </div>
          </div>
        </div>
      </section>

      <section className="zt-tech-infrastructure" aria-labelledby="zt-tech-infrastructure-title">
        <div className="zt-container zt-tech-infrastructure-head">
          <div className="zt-tech-title-row">
            <span className="zt-tech-title-arrow zt-tech-title-arrow-right" aria-hidden="true">
              <ArrowLeft size={34} strokeWidth={1.4} />
            </span>
            <h2 id="zt-tech-infrastructure-title">تقنيات عالمية تدعم بنيتنا الرقمية</h2>
            <span className="zt-tech-title-arrow zt-tech-title-arrow-left" aria-hidden="true">
              <ArrowRight size={34} strokeWidth={1.4} />
            </span>
          </div>
        </div>

        <div className="zt-tech-marquee" aria-label="التقنيات والمنصات المستخدمة">
          <div className="zt-tech-marquee-track">
            {[0, 1].map((setIndex) => (
              <div className="zt-tech-marquee-set" key={setIndex} aria-hidden={setIndex === 1}>
                {[...infrastructureTechnologies, ...infrastructureTechnologies].map((technology, itemIndex) => (
                  <div
                    className="zt-tech-logo-item"
                    key={`${setIndex}-${itemIndex}-${technology.name}`}
                    aria-hidden={setIndex === 1 || itemIndex >= infrastructureTechnologies.length}
                  >
                    <img
                      src={technology.logo}
                      alt={setIndex === 0 && itemIndex < infrastructureTechnologies.length ? `${technology.name} logo` : ""}
                      loading="lazy"
                      decoding="async"
                    />
                    <span>{technology.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="zain-digital-services" className="zt-service-paths" aria-labelledby="zt-service-paths-title">
        <div className="zt-container">
          <div className="zt-service-paths-head">
            <div className="zt-service-title-row">
              <span className="zt-service-title-arrow zt-service-title-arrow-right" aria-hidden="true">
                <ArrowLeft size={34} strokeWidth={1.4} />
              </span>
              <h2 id="zt-service-paths-title">اختر الحل الذي يناسب طريقة عملك</h2>
              <span className="zt-service-title-arrow zt-service-title-arrow-left" aria-hidden="true">
                <ArrowRight size={34} strokeWidth={1.4} />
              </span>
            </div>
            <p>
              من الأدوات الجاهزة إلى التنفيذ التسويقي والبرمجيات المخصصة — ابدأ من احتياجك، ونحن نوصلك للمسار المناسب.
            </p>
          </div>

          <div className="zt-service-paths-grid">
            {servicePathCards.map(({ id, label, title, description, tags, cta, href, Icon, featured }) => (
              <article
                key={id}
                className={`zt-service-path-card ${featured ? "is-featured" : ""}`}
              >
                <div className="zt-service-path-card-top">
                  <span className="zt-service-path-icon" aria-hidden="true">
                    <Icon size={25} strokeWidth={1.65} />
                  </span>
                  <span className="zt-service-path-label">{label}</span>
                </div>

                <div className="zt-service-path-content">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>

                <div className="zt-service-path-tags" aria-label={`مزايا ${label}`}>
                  {tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <a className="zt-service-path-link" href={href}>
                  <span>{cta}</span>
                  <ArrowLeft size={18} strokeWidth={1.7} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={socialShowcaseRef}
        className={`zt-social-network-showcase ${socialShowcaseVisible ? "is-visible" : ""}`}
        aria-label="حلول النشر والإرسال"
      >
        <div className="zt-container zt-social-network-grid">
          <div className="zt-social-network-content">
            <div className="zt-social-copy-block zt-social-copy-block-primary">
              <span className="zt-social-copy-label">Social Media</span>
              <h2>انشر محتواك بشكل أذكى وأسرع</h2>
              <p>أدر حضورك الرقمي من مكان واحد، وجدول محتواك مسبقًا لتستمر منصاتك بالنشر حتى وأنت مشغول.</p>
              <ul>
                <li>جدولة ونشر تلقائي</li>
                <li>إدارة متعددة للمنصات</li>
                <li>ربط الذكاء الاصطناعي لكتابة المحتوى تلقائيًا</li>
                <li>متابعة وسجل للنشر</li>
              </ul>
              <a className="zt-social-discover" href="#contact" aria-label="اكتشف حلول Social Media">
                <span>اكتشف</span>
                <ArrowLeft size={17} strokeWidth={1.8} aria-hidden="true" />
              </a>
            </div>

            <div className="zt-social-copy-block zt-social-copy-block-secondary">
              <span className="zt-social-copy-label">Zain Sender</span>
              <h3>حوّل رسائلك إلى حملات منظمة</h3>
              <p>جهّز حملاتك، أنشئ قوالب الرسائل وأرسلها لقوائمك مع جدولة ومتابعة واضحة لكل عملية إرسال.</p>
              <ul>
                <li>حملات إرسال منظمة</li>
                <li>جدولة ومتابعة تلقائية</li>
                <li>إدارة القوائم وسجل الإرسال</li>
                <li>إنشاء القوالب وإرسالها</li>
              </ul>
              <a className="zt-social-discover" href="#contact" aria-label="اكتشف Zain Sender">
                <span>اكتشف</span>
                <ArrowLeft size={17} strokeWidth={1.8} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="zt-social-network-visual">
            <SocialMediaNetworkGraphic isVisible={socialShowcaseVisible} />
          </div>
        </div>
      </section>

    </main>
  );
}

