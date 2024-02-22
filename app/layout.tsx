import { Inter, Nunito, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

import Modal from "./components/modals/Modal";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

interface Metadata {
  title: any;
  description: any;
}

export const metadata: Metadata = {
  title: "Havvn",
  description: "Havvn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Modal isOpen="true" title="Welcome to Havvn" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
