import { Card } from "./card"
import { ButtonIcon } from "./ui/button-icon"
import { DownloadIcon } from "@phosphor-icons/react";
import { useLinks } from "../providers/link-provider";
import { LinkList } from "./link-list";

export function LinksCreatedCard(){
    const { links, handleDownloadCsvFile } = useLinks();
    
    return <Card>
        <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-gray-tailwind-600 text-lg font-bold">Meus links</h1>
                <ButtonIcon disabled={links.length === 0} onClick={handleDownloadCsvFile}>
                    <DownloadIcon />
                    <span>Baixar CSV</span>
                </ButtonIcon>
            </div>

            <LinkList/>
        </div>
    </Card>
}