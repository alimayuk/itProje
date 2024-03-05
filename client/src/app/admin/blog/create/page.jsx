import BlogCreate from "@/components/BlogCreate/BlogCreate"
import { CategoryService } from "@/services/category.service";

const page = async () => {
  const data = await CategoryService.getCategoryList();
  
 return <BlogCreate cat={data} />
}

export default page