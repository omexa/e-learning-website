import type { Metadata } from "next";
import {
  Space_Grotesk,
  Bree_Serif,
  Josefin_Sans,
  Roboto_Condensed,
} from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const font = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
// const font2 = Bree_Serif({
//   weight: ["400"],
//   subsets: ["latin"],
// });
const font3 = Josefin_Sans({
  weight: ["100", "400"],
  subsets: ["vietnamese"],
});
const font4 = Roboto_Condensed({
  weight: ["100", "200", "400"],
  subsets: ["cyrillic"],
});
export const metadata: Metadata = {
  title: "Learn with Omexa",
  description: "E-learning app developed by oumer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font4.className}>
        <div className="h-screen overflow-y-auto scroll-smooth">
          <ResponsiveNav />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
