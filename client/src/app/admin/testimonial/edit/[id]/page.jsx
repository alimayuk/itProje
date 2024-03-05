import TestimonialEdit from "@/components/TestimonialEdit/TestimonialEdit";
import { TestimonialService } from "@/services/testimonial.service";

const page = async ({ params }) => {
  const { id } = params;
  const data = await TestimonialService.getTestimonialDetail(id);
  return <TestimonialEdit data={data} />;
};

export default page;
