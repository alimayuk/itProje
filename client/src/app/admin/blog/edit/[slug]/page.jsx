import BlogEdit from "@/components/BlogEdit/BlogEdit";
import { BlogService } from "@/services/blog.service";
import { CategoryService } from "@/services/category.service";

const page = async ({ params }) => {
  const { slug } = params;
  const cat = await CategoryService.getCategoryList();
  const data = await BlogService.getBlogDetail(slug);
  return <BlogEdit data={data} cat={cat} />;
};

export default page;
