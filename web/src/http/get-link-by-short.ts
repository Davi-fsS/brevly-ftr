import axios from "axios";
import type { Link } from "../components/domain/link";

export async function getLinkByShort(shortLink: string){
    const response = await axios.get<Link>(`http://localhost:3333/link-by-short?shortLink=${shortLink}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })

    return response;
}