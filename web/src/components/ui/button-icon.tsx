import type { ReactNode } from "react"

type ButtonIconProps = {
    onClick?: () => void
    children: ReactNode
    disabled?: boolean
}

export function ButtonIcon({ onClick, children, disabled } : ButtonIconProps){
    return <button onClick={onClick} disabled={disabled} className="bg-gray-200 text-gray-500 text-xs p-2 rounded-sm hover:border hover:border-blue-base disabled:opacity-50 disabled:pointer-events-none flex flex-row justify-center gap-1 items-center font-900">
        {children}
    </button>
}