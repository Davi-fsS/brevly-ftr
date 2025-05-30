import { toast } from "react-toastify";

export function toastError(message: string){
    toast.error(message, {
        theme: "colored",
        position: "bottom-right"
    })
}