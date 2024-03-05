export const CategoryService = {
  getCategoryList: async () => {
    try {
      const res = await fetch(`${process.env.API_BASE_URL}/category`, {
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
    } catch (error) {
      console.log(error);
    }
  },
};
