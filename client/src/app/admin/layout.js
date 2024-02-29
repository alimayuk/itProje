import Navbar from "@/layout/admin/Navbar";


export default function BlogLayout({ children }) {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
}
