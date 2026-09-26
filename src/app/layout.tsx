import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["500"],
  display: "swap",
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "Zain Tech",
  description: "واجهة Zain Tech الرئيسية — مشروع تصميم مستقل جاهز للدمج لاحقًا.",
};

export default function RootLayout({ children }: Readonly) {
  return (
    {children}
  );
}
