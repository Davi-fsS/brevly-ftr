import { toast } from "react-toastify";

export function toastSuccess(message: string){
    toast.success(message, {
        theme: "colored",
        position: "bottom-right"
    })
}