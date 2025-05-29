import { useState } from "react"
import { Card } from "./card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { ButtonIcon } from "./ui/button-icon"
import { HorseIcon, HeartIcon, CubeIcon, CopyIcon } from "@phosphor-icons/react";
import { LinkItem } from "./ui/link-item"

type LinksCreatedCardProps = {
    linksList: number[]
}

export function LinksCreatedCard({linksList}: LinksCreatedCardProps){
    const [originalLink, setOriginalLink] = useState("")
    const [shortedLink, setShortedLink] = useState("")

    return <Card>
        <div className="flex flex-col gap-5">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-gray-tailwind-600 text-lg font-bold">Meus links</h1>
                <ButtonIcon disabled={linksList.length === 0} onClick={() => {}}>
                    <CopyIcon />
                    <span>Baixar CSV</span>
                </ButtonIcon>
            </div>

            <LinkItem />
        </div>
    </Card>
}