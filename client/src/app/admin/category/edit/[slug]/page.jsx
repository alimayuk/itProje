import CatEdit from "@/components/CatEdit/CatEdit";
import React from "react";

const getData = async (slug) => {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/category/${slug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const page = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);
  return <CatEdit slug={data} />;
};

export default page;
