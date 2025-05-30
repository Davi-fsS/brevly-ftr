import { Card } from "./card"
import { ButtonIcon } from "./ui/button-icon"
import { DownloadIcon } from "@phosphor-icons/react";
import { LinkItem } from "./ui/link-item"
import { useLinks } from "../providers/link-provider";

export function LinksCreatedCard(){
    const { links } = useLinks();
    
    return <Card>
        <div className="flex flex-col gap-5">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-gray-tailwind-600 text-lg font-bold">Meus links</h1>
                <ButtonIcon disabled={links.length === 0} onClick={() => {}}>
                    <DownloadIcon />
                    <span>Baixar CSV</span>
                </ButtonIcon>
            </div>

            {links?.map(item => {
                return <LinkItem id={item.id} originalLink={item.originalLink} shortLink={item.shortLink} accessCount={item.accessCount}/>
            })}
        </div>
    </Card>
}