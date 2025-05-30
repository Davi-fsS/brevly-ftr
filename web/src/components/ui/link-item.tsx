import { CopyIcon, TrashIcon } from "@phosphor-icons/react";
import { ButtonIcon } from "./button-icon";
import type { Link } from "../domain/link";
import { useLinks } from "../../providers/link-provider";

export function LinkItem({ id, originalLink, shortLink, accessCount } : Link){
    const { handleDeleteLink } = useLinks();
    
    const handleAccessLabel = () => {
        return `${accessCount} ${accessCount > 1 ? " acessos" : " acesso"}`
    };

    return <div id={id}>
        <hr className="border-0.5 border-gray-200" />
        <div className="pt-3 flex flex-row items-center justify-between">
            <div className="max-w-[180px]">
                <h1 className="text-md text-blue-base font-semibold">brev.ly/{shortLink}</h1>
                <h3 className="text-gray-500 text-sm whitespace-nowrap overflow-hidden text-ellipsis font-normal">
                    {originalLink}
                </h3>
            </div>

            <div className="flex flex-row items-center gap-3">
                <div>
                    <span className="text-gray-500 text-sm font-light">{handleAccessLabel()}</span>
                </div>
                <div className="flex flex-row gap-1">
                    <ButtonIcon>
                        <CopyIcon color="#1F2025"/>
                    </ButtonIcon>
                    <ButtonIcon onClick={() => handleDeleteLink(id, shortLink)}>
                        <TrashIcon color="#1F2025"/>
                    </ButtonIcon>
                </div>
            </div>
        </div>
    </div>
}