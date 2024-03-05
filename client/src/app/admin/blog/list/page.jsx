import BlogList from "@/components/BlogList/BlogList";
import { BlogService } from "@/services/blog.service";


const page = async () => {
  const data = await BlogService.getBlogsAll();
  return <BlogList data={data}/>
};

export default page;
