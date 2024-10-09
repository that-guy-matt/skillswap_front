import { Inter } from "next/font/google";
import "./globals.css";

import { AuthProvider } from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SkillSwap",
  description: "Swap your skills",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>

        {children}
      </body>
    </html >
  );
};
