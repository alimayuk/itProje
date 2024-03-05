import TestimonialList from "@/components/TestimonialList/TestimonialList";
import { TestimonialService } from "@/services/testimonial.service";

const page = async() => {
  const data = await TestimonialService.getTestimonialList();

 return <TestimonialList data={data}/>
};

export default page;
