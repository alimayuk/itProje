import BlogCreate from "@/components/BlogCreate/BlogCreate"

  const getCategory = async () =>{
      const res = await fetch(`${process.env.API_BASE_URL}/category`,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return res.json();
  }
const page = async () => {
  const data = await getCategory();
  
 return <BlogCreate cat={data} />
}

export default page