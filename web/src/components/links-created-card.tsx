import { Card } from "./card"
import { ButtonIcon } from "./ui/button-icon"
import { DownloadIcon } from "@phosphor-icons/react";
import { LinkItem } from "./ui/link-item"

type LinksCreatedCardProps = {
    linksList: number[]
}

export function LinksCreatedCard({linksList}: LinksCreatedCardProps){
    return <Card>
        <div className="flex flex-col gap-5">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-gray-tailwind-600 text-lg font-bold">Meus links</h1>
                <ButtonIcon disabled={linksList.length === 0} onClick={() => {}}>
                    <DownloadIcon />
                    <span>Baixar CSV</span>
                </ButtonIcon>
            </div>

            <LinkItem />
            <LinkItem />
            <LinkItem />
            <LinkItem />
        </div>
    </Card>
}