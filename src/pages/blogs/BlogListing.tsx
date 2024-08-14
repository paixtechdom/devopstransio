import { FC } from "react"
// import { Link } from "react-router-dom"
import { Card } from "../../assets/components/Card"


export const BlogListing:FC<any> = ({blogs}) => {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-9 place-items-start w-full">
        {blogs.map((blog:any, i:number) => (
            <Card 
                key={i}
                blog={blog}
                
            />
        ))}
    </section>
  )
}
