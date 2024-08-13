import { FC } from "react"
import { Link } from "react-router-dom"


export const BlogListing:FC<any> = ({blogs}) => {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-9 gap-x-6 place-items-start w-full">
        {blogs.map((blog:any, i:number) => (
            <Link to={`/blogs/${blog.id}`} key={i} className="flex flex-col gap-7 shadow-xl rounded-2xl bg-white bg-opacity-40 relative">
                <div className="absolute top-5 right-5 rounded-full size-4 bg-primary border border-secondary"></div>


                <div className="lg:h-[35vh] overflow-hidden rounded-t-2xl">
                    <img src={blog.img} alt={blog.title} 
                        className="h-full object-cover w-full"    
                    />
                </div>

                <div className="flex flex-col gap-3 px-5 pb-9">
                    <h3 className="text-primary font-bold text-xl capitalize ">{blog.title}</h3>

                    <p>{blog?.excerpt?.slice(0, 100)}... <b>read more</b></p>

                </div>
            </Link>
        ))}
    </section>
  )
}


