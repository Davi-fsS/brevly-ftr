import { useState } from "react"
import { Card } from "./card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function NewLinkCard(){
    const [originalLink, setOriginalLink] = useState("")
    const [shortedLink, setShortedLink] = useState("")

    return <Card>
        <h1 className="text-gray-tailwind-600 text-lg font-bold">Novo link</h1>

        <div className="flex flex-col gap-5 pt-5">
            <Input placeholder="www.exemplo.com" label="link original" onChange={setOriginalLink} value={originalLink}/>
            <Input placeholder="brevly/" label="link encurtado" onChange={setShortedLink} value={shortedLink}/>
            <Button onClick={() => {}}>Salvar link</Button>
        </div>
    </Card>
}