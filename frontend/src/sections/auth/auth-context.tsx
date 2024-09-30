import { ReactNode } from "react"

type Props = {
    children: ReactNode;
}

export default function Context({ children }: Props){
    return (
        <>
            {children}
        </>
    )
}