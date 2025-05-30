import { Card } from "./card"
import logo from "../assets/Logo_Icon.svg";
import { useEffect, useState } from "react";

export function Redirecting(){
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            window.location.href = "https://www.google.com"
        }, 1000);
        
        return () => clearTimeout(timeout);
      }, [trigger]);

    const handleTrigger = () => {
        setTrigger(!trigger);
    }
      
    return <div className="flex justify-center items-center mt-52">
        <Card>
            <div className="flex flex-col justify-center items-center gap-6 my-4">
                <img src={logo} className="w-12 mx-auto"/>   
                <h1 className="text-xl text-gray-tailwind-600 font-bold">Redirecionando...</h1>
                <div>
                    <center className="text-sm text-gray-500 font-medium">O link será aberto automaticamente em alguns instantes.</center>
                    <center className="text-sm text-gray-500 font-medium">
                        <span>Não foi redirecionado?</span> 
                        <a onClick={handleTrigger} className="ml-1 text-sm text-blue-base underline font-medium cursor-pointer">Acesse aqui</a>
                    </center>
                </div>
            </div>
        </Card>
    </div> 
}
