import { CopyIcon, TrashIcon } from "@phosphor-icons/react";
import { ButtonIcon } from "./button-icon";

export function LinkItem(){
    return <div>
        <hr className="border-0.5 border-gray-200" />
        <div className="pt-3 flex flex-row">
            <div className="flex-2">
                <h1>brev.ly/Portfolio-Dev</h1>
                <h3>devsite.portfolio.com.br/devname-123456</h3>
            </div>
            <div className="flex-2">
                <span>30 acessos</span>
            </div>
            <div className="flex-2">
                <ButtonIcon>
                    <CopyIcon />
                </ButtonIcon>
                <ButtonIcon>
                    <TrashIcon />
                </ButtonIcon>
            </div>
        </div>
    </div>
}