import { FC } from "react"
import { Parallax } from "./Parallax"
import { TrimText } from "../Functions"

interface headersInterface {
    text: string,
    bg?: string
}

export const Headers:FC<headersInterface> = ({text, bg}) => {
    return(
        <div className="w-fit relative flex flex-col items-end">
            <Parallax id={TrimText(text)+'top'} type="right" className="w-full">
                <div className="w-full relative flex flex-col">
                    <p className={`h-2 ${bg == "primary" ? "bg-primary" : "bg-secondary"}  w-10 rounded-full mb-2`}></p>
                </div>
            </Parallax>
            <Parallax id={TrimText(text)} type="left">
                <h2 className="text-4xl font-bold uppercase text-zinc-900 tracking-wide">{text}</h2>
            </Parallax>
            <Parallax id={TrimText(text)+"bottom"}>
            <p className={`h-1 ${bg == "primary" ? "bg-primary" : "bg-secondary"}  w-20 rounded-full mt-2`}></p>
            </Parallax>
        </div>
    )
}