import type { ReactNode } from "react"

type CardProps = {
    children: ReactNode
}

export function Card({ children } : CardProps){
    return <div className="bg-white pt-8 pb-6 px-6 w-100 flex flex-col rounded-lg">
        {children}
    </div>
}