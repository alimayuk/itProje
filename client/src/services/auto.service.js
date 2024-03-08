import { getCookie } from "cookies-next"

export const AutoService = {
    getCookieee: async () =>{
        return getCookie("access_token")
    }
}