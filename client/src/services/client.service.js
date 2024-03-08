export const ClientService = {
    getAllData: async () => {
            try {
                const res = await fetch(`${process.env.API_BASE_URL}/client`,{
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    cache: 'no-store',
                });
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                return res.json();
            } catch (error) {
                console.log(error)
            }
    },
    getBlogData: async (slug) =>{
        try {
            const res = await fetch(`${process.env.API_BASE_URL}/client/blog/${slug}`,{
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                },
                cache: 'no-store',
            });
            if (!res.ok) {
                throw new Error("Failed to fetch data");
            }
            return res.json();
        } catch (error) {
            console.log(error)
        }
    },
    getProjectData: async (slug) =>{
        try {
            const res = await fetch(`${process.env.API_BASE_URL}/client/project/${slug}`,{
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                },
                cache: 'no-store',
            });
            if (!res.ok) {
                throw new Error("Failed to fetch data");
            }
            return res.json();
        } catch (error) {
            console.log(error)
        }
    },
    getSettingsData: async () =>{
        try {
            const res = await fetch(`${process.env.API_BASE_URL}/client/settings`,{
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                },
                cache: 'no-store',
            });
            if (!res.ok) {
                throw new Error("Failed to fetch data");
            }
            return res.json();
        } catch (error) {
            console.log(error)
        }
    }
}