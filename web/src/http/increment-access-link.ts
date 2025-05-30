import axios from "axios";
import type { Link } from "../components/domain/link";

export async function incrementAccessLink(id: string){
    const response = await axios.put<Link>(`http://localhost:3333/increment-access?id=${id}`, {}, {
        headers: {
            "Content-Type": "application/json"
        }
    })

    return response;
}