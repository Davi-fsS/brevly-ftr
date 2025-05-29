import type { ReactNode } from "react"

type ButtonProps = {
    onClick?: () => void
    children: ReactNode
    disabled?: boolean
}

export function Button({ onClick, children, disabled } : ButtonProps){
    return <button onClick={onClick} disabled={disabled} className="bg-blue-base text-white py-3 rounded-lg hover:bg-blue-dark disabled:opacity-50 disabled:pointer-events-none">
        {children}
    </button>
}