import { FC } from "react"
import { Link } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs"
import { Parallax } from "./Parallax"
import { TrimText } from "../Functions"

export interface blogInterface {
    img: string,
    title: string,
    excerpt: string,
    date: string,
    id: string
}
interface cardInterface {
    blog: blogInterface
}   


export const Card:FC<cardInterface> = ({blog}) => {
    

    return(
        <Link to={`/blogs/${blog.id}`} className="flex flex-col rounded-xl relative overflow-hidden cursor-pointer w-full gap-7">

            <div className="absolute top-5 right-5 rounded-full size-4 bg-primary border border-secondary z-10"></div>

            <Parallax id={TrimText(blog.title)+"image"} type="left" className="w-full">
                <img src={blog.img} alt={blog.title} className="min-h-[40vh] lg:h-[40vh] object-cover rounded-xl shadow w-full"/>
            </Parallax>
            
            <div className="flex flex-col justify-end p-1 w-full">

                <p className="text-sm italic">
                    {blog.date}
                </p>

                <Parallax id={TrimText(blog.title)} type="right">
                    <div className="flex items-start gap-2 text-primary">
                        <h3 className="font-bold text-xl capitalize">{blog.title}</h3>
                    </div>
                </Parallax>
                
                <Parallax id={TrimText(blog.title)+"excerpt"}>
                <p className="text-zinc-900  my-2">
                    {blog.excerpt.slice(0, 100)}... 
                    <span className="flex items-center gap-2 capitalize">
                        <b>read more</b> <BsArrowRight />
                    </span>
                </p>
                </Parallax>
{/* 
                <Button 
                    text={"read more"}
                    btnType="secondary"
                /> */}
            </div>

        </Link>
    )
} 
