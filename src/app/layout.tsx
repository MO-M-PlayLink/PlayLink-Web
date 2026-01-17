import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const pretendard = localFont({
  src: [
    {
      path: "../../public/fonts/Pretendard-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://playlink.app"
  ),
  title: {
    default: "PlayLink - 운동을 함께, 경기를 함께",
    template: "%s | PlayLink",
  },
  description:
    "스포츠를 통해 사람들을 연결하고, 건강한 라이프스타일을 촉진합니다. 운동 파트너를 찾거나 경기를 함께 관람할 멤버를 만나보세요!",
  keywords: [
    "운동",
    "스포츠",
    "운동 파트너",
    "경기 관람",
    "PlayLink",
    "피트니스",
    "건강한 라이프스타일",
  ],
  authors: [{ name: "PlayLink" }],
  creator: "PlayLink",
  publisher: "PlayLink",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: "PlayLink",
    title: "PlayLink - 운동을 함께, 경기를 함께",
    description:
      "스포츠를 통해 사람들을 연결하고, 건강한 라이프스타일을 촉진합니다.",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "PlayLink Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PlayLink - 운동을 함께, 경기를 함께",
    description:
      "스포츠를 통해 사람들을 연결하고, 건강한 라이프스타일을 촉진합니다.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google7d71e8d03d842a1b",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
