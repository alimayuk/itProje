import ProjectList from "@/components/ProjectList/ProjectList";
import { ProjectService } from "@/services/project.service";

const page = async () => {
  const data = await ProjectService.getProjectsAll();
 return <ProjectList data={data}/>
};

export default page;
