import axios from "axios";

export const getApiResource = async (URL) => {
    try {
        const res = await axios(URL);

        if (res.status !== 200) {
            console.error("Could not fetch.", res.status);
        }

        return await res.data;
    }
    catch (error) {
        console.error("Could not fetch.", error.message);

        return false;
    }
};