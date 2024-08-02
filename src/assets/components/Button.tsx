import { FC } from "react"

interface buttonInterface{
    text: string,
    btnType: string
}

export const Button:FC<buttonInterface> = ({text, btnType}) => {

    return(
        <div className={`center flex-col relative group w-[150px] cursor-pointer py-3 uppercase text-gray-300`}>

            <p className={`z-10 transition-all duration-500 ease-in-out font-bold ${btnType == "primary" ? "group-hover:text-secondary group-active:text-secondary" : ""}`}>
                {text}
            </p>

            <div className={`rounded-2xl h-1 group-hover:h-full group-active:h-full transition-all duration-500 ease-in-out absolute z-1 bottom-0 1 this w-full ${btnType == "primary" ? "bg-primary text-secondary" : "bg-black bg-opacity-30 backdrop-blur-xl border-opacity-30 border border-tertiary"}`}></div>
        </div>
    )
}


// group-hover