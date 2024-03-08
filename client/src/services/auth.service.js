import {setCookie } from "cookies-next";

export const AuthService = {
  register: async (name, email, password, passwordConfirmation) => {
    try {
      const res = await fetch(`${process.env.API_BASE_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          password_confirmation: passwordConfirmation,
        }),
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return res.json();
    } catch (error) {
      console.log("Error", error);
    }
  },
  login: async (email, password) => {
    try {
      const res = await fetch(`${process.env.API_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const response = await res.json();
      setCookie("access_token", response.access_token);
      return response;
    } catch (error) {
      console.log("Error", error);
    }
  }
};
