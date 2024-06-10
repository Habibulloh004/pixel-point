import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/Navbar"));

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DevOptima",
  description: "DevOptima",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-bg-body text-white ${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
