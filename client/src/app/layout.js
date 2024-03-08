import { Roboto } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';

const roboto = Roboto({ 
  weight: ["100", "300", "400" , "500",  "700", "900"],  
  subsets: ["latin"]
 });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning={true}>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
