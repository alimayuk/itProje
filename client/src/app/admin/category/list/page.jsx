import CatList from "@/components/CatList/CatList";
import { CategoryService } from "@/services/category.service";
import React from "react";

const page = async () => {
  const data = await CategoryService.getCategoryList();
  return <CatList data={data} />;
};

export default page;
