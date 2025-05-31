import type { ReactNode } from "react"

type CardProps = {
    children: ReactNode
    className?: string
}

export function Card({ children, className } : CardProps){
    return <div className={`bg-white pt-8 pb-6 px-6 flex flex-col rounded-lg ${className ?? ""}`}>
        {children}
    </div>
}