import Footer from "@/layout/user/Footer";
import Navbar from "@/layout/user/Navbar";

export default function BlogLayout({ children }) {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
