import { useEffect } from "react";
import { useSearchParams } from "react-router";

export function LinkSite(){
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const url = searchParams.get("url");
        if(url){
            window.location.href = decodeURIComponent(url);
        }
    }, [searchParams]);    

    return <p>Redirecionando...</p>;
}