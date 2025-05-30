import axios from "axios";
import type { Link } from "../components/domain/link";

export async function removeLink(id: string){
    const response = await axios.delete<Link>(`http://localhost:3333/link?id=${id}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })

    return response;
}