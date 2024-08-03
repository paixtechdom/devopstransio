import { FC } from "react"

interface headersInterface {
    text: string
}

export const Headers:FC<headersInterface> = ({text}) => {
    return(
        <div className="w-fit relative flex flex-col items-end">
            
        <div className="w-full relative flex flex-col">
            <p className="h-2 bg-primary opacity-50 w-10 rounded-full mb-2"></p>
        </div>
        <h2 className="text-4xl font-bold uppercase text-gray-300 tracking-wide">{text}</h2>
        <p className="h-1 bg-primary opacity-50 w-20 rounded-full mt-2"></p>
        </div>
    )
}