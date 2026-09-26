# Zain Tech Homepage

مستودع مستقل لتطوير واعتماد الصفحة الرئيسية الجديدة قبل دمجها في موقع Zain Tech الأساسي.

## Compatibility baseline

تمت مراجعة نسخة الموقع الحالية المرفوعة، وسيُبنى التصميم الجديد على نفس التقنية لتسهيل الدمج لاحقًا:

- Next.js 15.5.19 — App Router
- React 19.2.4
- TypeScript 5
- Tailwind CSS 4 + CSS مخصص
- Lucide React للأيقونات
- RTL / Arabic-first
- Node.js >= 20.9
- المشروع الأصلي يستخدم MySQL عبر mysql2، وJWT عبر jose، وbcryptjs للمصادقة
- المشروع الأصلي مهيأ لـ Hostinger ويحتوي SEO/Metadata وواجهات API داخل Next.js

## Development rule

هذا المستودع مخصص حاليًا للواجهة الرئيسية فقط. لا ننقل قاعدة البيانات أو المصادقة أو لوحة الإدارة إليه. الهدف هو بناء واجهة مستقلة ومتوافقة ثم دمج مكونات الصفحة وCSS والأصول المعتمدة في المشروع الأساسي لاحقًا.

## Working branch

`homepage-foundation`

