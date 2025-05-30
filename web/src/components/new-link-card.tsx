import { useState } from "react"
import { Card } from "./card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useNavigate } from "react-router"

export function NewLinkCard(){
    const [originalLink, setOriginalLink] = useState("")
    const [shortedLink, setShortedLink] = useState("")
    const navigate = useNavigate();

    const handleSave = () => {
        navigate("/redirecting")
    }

    return <Card>
        <h1 className="text-gray-tailwind-600 text-lg font-bold">Novo link</h1>

        <div className="flex flex-col gap-5 pt-5">
            <Input placeholder="www.exemplo.com" label="link original" onChange={setOriginalLink} value={originalLink} error={false}/>
            <Input placeholder="brevly/" label="link encurtado" onChange={setShortedLink} value={shortedLink} error={true} errorMessage="aa"/>
            <Button disabled={!(originalLink.length > 0 && shortedLink.length > 0)} onClick={handleSave}>Salvar link</Button>
        </div>
    </Card>
}