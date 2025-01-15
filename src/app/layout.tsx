import type { Metadata } from "next";
import { Montserrat} from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const geistSans = Montserrat({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Assignment-09 ",
  description: "Assignment-09 Add Dyanamic Ruote with Next js 15...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} bg-[#f5f5f5] antialiased`}>
        <div className="flex flex-col justify-between min-h-screen w-full">
          <div>
            <Header/>
            <main>{children}</main>
          </div>
          <div>
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}
