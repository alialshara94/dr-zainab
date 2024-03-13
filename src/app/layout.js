import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "الدكتورة زينب فتحي شربة",
  description: "عيادة الدكتورة زينب فتحي شربة ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
