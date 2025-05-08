// app/layout.tsx

// app/layout.tsx
import "./globals.css";
import "./styles/fonts.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Demo Gym System",
    template: "%s | Demo Gym System",
  },
  description:
    "This is a demo gym system built for Gym Owners to manage their members and attendance. Anything here could be improved and be changed according to your interests.",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // const messages = await getMessages();
  return (
    <html lang="en">
      <head>
        {/* Add your favicon here */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`font-jost ${inter.className}`}>{children}</body>
    </html>
  );
}
