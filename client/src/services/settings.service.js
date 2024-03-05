export const SettingsService = {
 getSettings: async (id) => {
    try {
        const res = await fetch(`${process.env.API_BASE_URL}/settings/${id}`,{
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
        console.log("Failed to fetch", error);
    }
 },
 updateSettings: async (id,inputs,image) => {
    try {
        var formdata = new FormData();
        for (const key in inputs) {
            formdata.append(key, inputs[key]);
        }
        formdata.append("logo_pathname", image);

        const res = await fetch(`${process.env.API_BASE_URL}/settings/${id}`,{
            method: "POST",
            headers: {
                Accept: "application/json",
             
            },
            body: formdata,
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
 }
}