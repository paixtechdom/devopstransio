import { FC } from "react"
import { Button } from "./Button"
import { useDispatch } from "react-redux"
import { setCurrentService } from "../store/navigation/navigationSlice"

export interface cardInterface {
    img: string,
    title: string,
    desc: string,
    index: number
}


export const Card:FC<cardInterface> = ({img, title, desc, index}) => {
    const dispatch = useDispatch()

    return(
        <div className="flex border border-primary border-opacity-20 to-secondary flex-col rounded-3xl relative overflow-hidden group cursor-pointer" onClick={() => dispatch(setCurrentService(index))}>

            <div className="absolute top-5 right-5 rounded-full size-4 bg-secondary border border-primary"></div>

            <img src={img} alt={title} className="min-h-[45vh] lg:h-[45vh] object-cover rounded-2xl shadow m-2"/>
            
            <div className="flex flex-col justify-end  mt-9 pb-5 px-6 absolute bottom-0 w-full bg-gradient-to-b h-5/6 from-transparent via-[rgb(0,0,0,0.9)] to-black transition-all duration-500 ease-in-out group group-hover:to-black group-hover:via-transparent">
                {/* <p className="size-3 rounded-full bg-primary"></p> */}
                <div className="flex items-start gap-2 text-primary">
                    <h3 className="font-bold text-xl">{title}</h3>
                </div>
                
                <p className="text-zinc-300  mb-3 transition-all duration-500 ease-in-out h-14 group-hover:h-0 group-hover:opacity-0">{desc}</p>

                <Button
                    text="Read more"
                    btnType="secondary"
                />
            </div>
        </div>
    )
} 
