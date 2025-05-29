import type { ReactNode } from "react"

type ButtonProps = {
    onClick?: () => void
    children: ReactNode
}

export function Button({ onClick, children } : ButtonProps){
    return <button onClick={onClick} className="bg-amber-400">
        {children}
    </button>
}