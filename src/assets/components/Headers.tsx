import { FC } from "react"

interface headersInterface {
    text: string,
    bg?: string
}

export const Headers:FC<headersInterface> = ({text, bg}) => {
    return(
        <div className="w-fit relative flex flex-col items-end">
            
        <div className="w-full relative flex flex-col">
            <p className={`h-2 ${bg == "primary" ? "bg-secondary" : "bg-primary 0"}  w-10 rounded-full mb-2`}></p>
        </div>
        <h2 className="text-4xl font-bold uppercase text-gray-900 tracking-wide">{text}</h2>
        <p className={`h-1 ${bg == "primary" ? "bg-secondary" : "bg-primary"}  w-20 rounded-full mt-2`}></p>
        </div>
    )
}