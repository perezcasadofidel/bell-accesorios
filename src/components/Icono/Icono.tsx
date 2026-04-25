import type { ReactNode } from "react"

interface Props {
    link:string,
    children: ReactNode
}


export const Icono = (prop:Props) =>{
    return(
        <a href={prop.link} target='_blank'>
            {prop.children}
        </a>
    )
}