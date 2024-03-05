export const ProjectService = {
  getProjectDetail: async (slug) => {
    try {
      const res = await fetch(`${process.env.API_BASE_URL}/project/${slug}`, {
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
  getProjectsAll: async () => {
    try {
      const res = await fetch(`${process.env.API_BASE_URL}/project`, {
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
    } catch (error) {
      console.log(error);
    }
  },
  createProject: async (inputs, images, edit) => {
    try {
      var formdata = new FormData();
      for (const key in inputs) {
        formdata.append(key, inputs[key]);
      }

      images.forEach((image) => {
        formdata.append("images[]", image);
      });

      formdata.append("body", edit);
      const res = await fetch(`${process.env.API_BASE_URL}/project`, {
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
  updateProject: async (projectId, images, inputs, edit) => {
    try {
      var formdata = new FormData();
      for (const key in inputs) {
        formdata.append(key, inputs[key]);
      }

      images.forEach((image) => {
        formdata.append("images[]", image);
      });

      formdata.append("body", edit);

      const res = await fetch(
        `${process.env.API_BASE_URL}/project/${projectId}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "X-Custom-Header": "header value",
          },
          body: formdata,
        }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return res.json();
    } catch (error) {
      console.log(error);
    }
  },
  deleteProject: async (projectId) => {
    try {
      const res = await fetch(
        `${process.env.API_BASE_URL}/project/${projectId}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "X-Custom-Header": "header value",
          },
        }
      );
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
