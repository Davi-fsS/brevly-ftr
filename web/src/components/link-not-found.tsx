import { Card } from "./card"
import logo from "../assets/404.svg";
import { useNavigate } from "react-router";

export function LinkNotFound(){
    const navigate = useNavigate();

    const handleNavigateToMain = () => {
        navigate("/")
    };

    return <div className="flex justify-center items-center mt-52">
        <Card>
            <div className="flex flex-col justify-center items-center gap-6 my-4">
                <img src={logo} className="w-50 mx-auto"/>   
                <h1 className="text-xl text-gray-tailwind-600 font-bold">Link não encontrado</h1>
                <div>
                    <center className="text-sm text-gray-500 font-medium">
                        <span>O link que você está tentando acessar não existe, foi removido ou é uma URL inválida. Saiba mais em</span> 
                        <a onClick={handleNavigateToMain} className="ml-1 text-sm text-blue-base underline font-medium cursor-pointer">brev.ly.</a>
                    </center>
                </div>
            </div>
        </Card>
    </div> 
}
