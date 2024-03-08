export const BlogService = {
  getBlogDetail: async (slug) => {
    try {
      const res = await fetch(`${process.env.API_BASE_URL}/blog/${slug}`, {
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
  getBlogsAll: async () => {
    const res = await fetch(`${process.env.API_BASE_URL}/blog`, {
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
  },
  createBlog: async (inputs, image, edit) => {
    try {
      var formdata = new FormData();
      for (const key in inputs) {
        formdata.append(key, inputs[key]);
      }
      formdata.append("image", image)
      formdata.append("body", edit);
      const res = await fetch(`${process.env.API_BASE_URL}/blog`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formdata,
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return res.json();
    } catch (error) {
      console.log(error);
    }
  },
  updateBlog: async (blogId, images, inputs, edit) => {
    try {
      var formdata = new FormData();
      for (const key in inputs) {
        formdata.append(key, inputs[key]);
      }

      images.forEach((image) => {
        formdata.append("images[]", image);
      });

      formdata.append("body", edit);

      const res = await fetch(`${process.env.API_BASE_URL}/blog/${blogId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "X-Custom-Header": "header value",
        },
        body: formdata,
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return res.json();
    } catch (error) {
      console.log(error);
    }
  },
  deleteBlog: async (blogId) => {
    try {
      const res = await fetch(`${process.env.API_BASE_URL}/blog/${blogId}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "X-Custom-Header": "header value",
        },
      });
      const response = await res.json();
      if (response.status !== 201) {
        throw new Error("Failed to fetch data");
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
