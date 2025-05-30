import axios from "axios";

export async function downloadCsvFile(){
    try{
        const response = await axios.get<{url: string, name: string}>("http://localhost:3333/csv-file", {
            headers: {
                "Content-Type": "application/json"
            }
        })
        
        return response
    }
    catch (error){
        if (error instanceof Error){           
            return error
        }
    }
}