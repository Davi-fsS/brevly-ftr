import { Card } from "./card"
import logo from "../assets/Logo_Icon.svg";
import { Outlet, useLocation } from "react-router";
import { useEffect, useState } from "react";

export function Redirecting(){
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [location])

    return <div className="flex justify-center align-middle">
        {
            loading && <Card>
                <div className="flex flex-col justify-center align-middle gap-6">
                    <img src={logo} className="w-25 mx-auto"/>   
                    <h1>Redirecionando...</h1>
                    <p>O link será aberto automaticamente em alguns instantes.</p>
                    <p>Não foi redirecionado? <a>Acesse aqui</a></p>
                </div>
            </Card>
        }
        <Outlet/>
    </div> 
}