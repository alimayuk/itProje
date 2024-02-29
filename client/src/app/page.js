import Navbar from "@/layout/user/Navbar";
import Hero from "@/components/hero/Hero";
import Solution from "@/components/solution/Solution";
import LogoCarousel from "@/components/logocarousel/LogoCarousel";
import About from "@/components/about/About";
import Counter from "@/components/counter/Counter";
import Project from "@/components/project/Project";
import Videobanner from "@/components/videobanner/Videobanner";
import Pricing from "@/components/pricing/Pricing";
import Testimonials from "@/components/testimonials/Testimonials";
import Blogs from "@/components/blogs/Blogs";
import Footer from "@/layout/user/Footer";


export default function Home() {
  return (
    
    <main>
      <Navbar/>
      <Hero/>
      <Solution />
      <LogoCarousel/>
      <About />
      <Counter />
      <Project />
      <Videobanner />
      <Pricing />
      <Testimonials />
      <Blogs />
      <Footer />
    </main>
  );
}
