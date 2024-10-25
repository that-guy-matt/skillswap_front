import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import BootstrapClient from "./components/BootstrapClient";

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
        <BootstrapClient />
      </body>
    </html >
  );
};
