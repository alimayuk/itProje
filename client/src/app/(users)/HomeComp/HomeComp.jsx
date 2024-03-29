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
import { ClientService } from "@/services/client.service";

const HomeComp = async () => {
    const data = await ClientService.getAllData();
  return (
    <>
      <Hero />
      <Solution />
      <LogoCarousel />
      <About />
      <Counter data={data.counter[0]}/>
      <Project data={data.projects} />
      <Videobanner />
      <Pricing />
      <Testimonials data={data.testimonials} />
      <Blogs data={data.blogs} />
    </>
  );
};

export default HomeComp;
