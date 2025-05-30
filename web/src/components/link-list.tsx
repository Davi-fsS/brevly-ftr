import { LinkItem } from "./ui/link-item"
import { useLinks } from "../providers/link-provider";
import { LinkIcon } from "@phosphor-icons/react";

export function LinkList(){
    const { links } = useLinks();

    if(links?.length === 0){
        return <div>
            <hr className="border-0.5 border-gray-200" />
            <div className="flex flex-col justify-center items-center gap-2 py-8">
                <LinkIcon color="#74798B" fontSize={30}/>
                <p className="text-gray-500 text-[10px]">AINDA NÃO EXISTEM LINKS CADASTRADOS</p>
            </div>
        </div>
    }
    
    return links?.map(item => {
        return <LinkItem id={item.id} originalLink={item.originalLink} shortLink={item.shortLink} accessCount={item.accessCount}/>
    })
}