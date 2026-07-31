import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { LocaleProvider } from "@/lib/locale";
import { content } from "@/lib/content";
import { ThemeApplier } from "@/components/ThemeApplier";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

const { profile } = content.vi;
const title = `${profile.name} — ${profile.role}`;

export const metadata: Metadata = {
  title,
  description: profile.pitch,
  keywords: [
    profile.name,
    profile.role,
    "frontend engineer",
    "portfolio",
    profile.location,
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title,
    description: profile.pitch,
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary",
    title,
    description: profile.pitch,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`dark ${beVietnamPro.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeApplier />
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
