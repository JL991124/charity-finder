import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const getCharities = async (take:number, cause:string) => {
    const url = `${apiUrl}/search/${cause}?${apiKey}&take=${take}`;
    const response = await axios.get(url);
    return response.data.nonprofits;
}

export default getCharities;