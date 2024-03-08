import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

export const AdminCheck ={
    admincheck: async () => {
        try {
            const res = await fetch(`${process.env.API_BASE_URL}/valid`, {
                method: "GET",
                credentials: "include",
                headers: {
                  Accept: "application/json",
                  Authorization: `Bearer ${getCookie("access_token", { cookies })}`,
                },
                next: {
                  revalidate: 600,
                  credentials: "include",
                },
              });
              return await res.json();
          } catch (error) {
            console.log(error);
          }
    }
}