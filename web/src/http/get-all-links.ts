import axios from "axios";
import type { Link } from "../components/domain/link";

export async function getAllLinks(){
    const response = await axios.get<Link[]>("http://localhost:3333/all", {
        headers: {
            "Content-Type": "application/json"
        }
    })

    return response.data;
}