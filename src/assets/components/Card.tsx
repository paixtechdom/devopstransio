import { FC } from "react"
import { Link } from "react-router-dom"

interface cardInterface {
    img: string,
    title: string,
    desc: string,
    link: string
}


export const Card:FC<cardInterface> = ({img, title, desc, link}) => {
    return(
        <Link to={`/${link}`} className="flex bg-gradient-to-bl from-tertiary to-secondary bg-op acity-40 flex-col p-2 rounded-3xl">
            <img src={img} alt={title} className="md:h-[50vh] lg:h-[35vh] object-cover rounded-2xl shadow"/>
            
            <div className="flex flex-col gap-3 mt-9 mb-3 px-4">
                    <p className="size-3 rounded-full bg-tertiary"></p>
                <div className="flex items-start gap-2">
                    <h3 className="font-bold text-white text-xl">{title}</h3>
                </div>
                <p className="text-gray-300">{desc}</p>


                <button className="uppercase bg-secondary rounded-full py-3 text-white mt-4 shadow-md shadow-tertiary">Read more</button>
            </div>
        </Link>
    )
} 
