import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Film Fusion",
  description: "This is a Movie info website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="mv-icon.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <Providers>
          <Header/>
          <Navbar/>
          <SearchBox/>
          {children}
        </Providers>
      </body>
      
    </html>
  );
}
