import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zain Tech",
  description: "واجهة Zain Tech الرئيسية — مشروع تصميم مستقل جاهز للدمج لاحقًا.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
