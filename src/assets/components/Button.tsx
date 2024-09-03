import { FC } from "react"

interface buttonInterface{
    text: string | JSX.Element,
    btnType: string,
    baseTextColor?: string
}

export const Button:FC<buttonInterface> = ({text, btnType, baseTextColor}) => {

    return(
        <div className={`center flex-col relative group min-w-[150px] w-fit cursor-pointer py-3 uppercase 
        ${baseTextColor ? baseTextColor : "text-gray-900"}`}>

            <p className={`z-10 transition-all duration-500 ease-in-out font-bold flex items-center 
                ${btnType !== "primary" ? "group-hover:text-black group-active:text-black" : 
                "group-hover:text-white group-active:text-white"}
                `}>
                {text}
            </p>

            <div className={`rounded-2xl h-1 group-hover:h-full group-active:h-full transition-all duration-500 ease-in-out absolute z-1 bottom-0 1 this w-full ${btnType !== "primary" ? "bg-secondary" : "bg-zinc-900  backdrop-blur-xl border-opacity-30 border border-tertiary"}`}></div>
        </div>
    )
}


// group-hover