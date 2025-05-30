import axios from "axios";

export async function createLink(originalLink: string, shortLink: string){
    try{
        const response = await axios.post<{message: string}>(`http://localhost:3333/link`, { originalLink, shortLink }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        
        return response;
    }
    catch (error){
        if (error instanceof Error){           
            return error
        }
    }
}