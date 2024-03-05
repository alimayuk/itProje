import ProjectCreate from "@/components/ProjectCreate/ProjectCreate"
import { CategoryService } from "@/services/category.service"

const page = async () => {
  const cat = await CategoryService.getCategoryList();

  return <ProjectCreate cat={cat} />
}

export default page