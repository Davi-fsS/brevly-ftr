import { CopyIcon, TrashIcon } from "@phosphor-icons/react";
import { ButtonIcon } from "./button-icon";

export function LinkItem(){
    return <div>
        <hr className="border-0.5 border-gray-200" />
        <div className="pt-3 flex flex-row items-center justify-between">
            <div className="max-w-[180px]">
                <h1 className="text-md text-blue-base font-semibold">brev.ly/Portfolio-Dev</h1>
                <h3 className="text-gray-500 text-sm whitespace-nowrap overflow-hidden text-ellipsis font-normal">devsite.portfolio.com.br/devname-123456</h3>
            </div>

            <div className="flex flex-row items-center gap-3">
                <div>
                    <span className="text-gray-500 text-sm font-light">30 acessos</span>
                </div>
                <div className="flex flex-row gap-1">
                    <ButtonIcon>
                        <CopyIcon color="#1F2025"/>
                    </ButtonIcon>
                    <ButtonIcon>
                        <TrashIcon color="#1F2025"/>
                    </ButtonIcon>
                </div>
            </div>
        </div>
    </div>
}