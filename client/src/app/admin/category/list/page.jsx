import CatList from "@/components/CatList/CatList";
import React from "react";

async function getData() {
  const res = await fetch(`${process.env.API_BASE_URL}/category`, {
    cache: "no-store",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const page = async () => {
  const data = await getData();
  console.log(data);
  return <CatList data={data} />;
};

export default page;
