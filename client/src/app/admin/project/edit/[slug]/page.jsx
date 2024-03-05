import ProjectEdit from "@/components/ProjectEdit/ProjectEdit";
import { CategoryService } from "@/services/category.service";
import { ProjectService } from "@/services/project.service";


const page = async ({ params }) => {
  const { slug } = params;
  const cat = await CategoryService.getCategoryList();
  const data = await ProjectService.getProjectDetail(slug);

  return <ProjectEdit cat={cat} data={data} />;
};

export default page;
