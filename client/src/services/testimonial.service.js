export const TestimonialService = {
  getTestimonialDetail: async (id) =>{
    try {
      const res = await fetch(`${process.env.API_BASE_URL}/testimonial/${id}`,{
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
  getTestimonialList: async () => {
    try {
      const res = await fetch(`${process.env.API_BASE_URL}/testimonial`,{
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
  createTestimonial: async (inputs, image) => {
    try {
      var formdata = new FormData();
      for (const key in inputs) {
        formdata.append(key, inputs[key]);
      }
      formdata.append("image", image);
      const res = await fetch(`${process.env.API_BASE_URL}/testimonial`, {
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
  updateTestimonial: async (id,inputs,image) => {
    try {
      var formdata = new FormData();
      for (const key in inputs) {
        formdata.append(key, inputs[key]);
      }
      if(image !== ""){
          formdata.append("image", image);
      }
      const res = await fetch(`${process.env.API_BASE_URL}/testimonial/${id}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          
        },
        body: formdata,
        cache: "no-store"
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return res.json();
    } catch (error) {
      console.log(error);
    }
  },
  deleteTestimonial: async (id) =>{
    try {
      const res = await fetch(`${process.env.API_BASE_URL}/testimonial/${id}`, {
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
