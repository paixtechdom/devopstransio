import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Blogs } from "../../assets/Constants"
import { Headers } from "../../assets/components/Headers"
import { BlogListing } from "./BlogListing"
import { Button } from "../../assets/components/Button"


const BlogPage = () => {

  const id = useParams()

  const [ blog, setBlog ] = useState<any>({})

  useEffect(() => {

    setBlog((Blogs.filter(a => a.id == id.id && a)[0]))

  }, [])

  const body = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quidem delectus sequi, minima pariatur commodi consequuntur tempore laborum similique in dolore distinctio omnis dolorum alias repellat, iure sunt nesciunt illum voluptate error exercitationem laudantium veniam possimus! Molestiae accusamus repellendus pariatur accusantium rerum facere assumenda temporibus illum beatae non. Eos repellendus quisquam hic rem unde, voluptates harum esse dolorem nobis animi commodi, sit nisi ea, optio inventore voluptate cum deserunt enim corrupti? Qui sequi unde molestias sed eos a cumque quidem soluta odit impedit, culpa, omnis iure delectus adipisci accusamus alias maiores facilis dicta autem. Beatae dolor ipsum modi laboriosam itaque.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quidem delectus sequi, minima pariatur commodi consequuntur tempore laborum similique in dolore distinctio omnis dolorum alias repellat, iure sunt nesciunt illum voluptate error exercitationem laudantium veniam possimus! Molestiae accusamus repellendus pariatur accusantium rerum facere assumenda temporibus illum beatae non. Eos repellendus quisquam hic rem unde, voluptates harum esse dolorem nobis animi commodi, sit nisi ea, optio inventore voluptate cum deserunt enim corrupti? Qui sequi unde molestias sed eos a cumque quidem soluta odit impedit, culpa, omnis iure delectus adipisci accusamus alias maiores facilis dicta autem. Beatae dolor ipsum modi laboriosam itaque.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quidem delectus sequi, minima pariatur commodi consequuntur tempore laborum similique in dolore distinctio omnis dolorum alias repellat, iure sunt nesciunt illum voluptate error exercitationem laudantium veniam possimus! Molestiae accusamus repellendus pariatur accusantium rerum facere assumenda temporibus illum beatae non. Eos repellendus quisquam hic rem unde, voluptates harum esse dolorem nobis animi commodi, sit nisi ea, optio inventore voluptate cum deserunt enim corrupti? Qui sequi unde molestias sed eos a cumque quidem soluta odit impedit, culpa, omnis iure delectus adipisci accusamus alias maiores facilis dicta autem. Beatae dolor ipsum modi laboriosam itaque.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quidem delectus sequi, minima pariatur commodi consequuntur tempore laborum similique in dolore distinctio omnis dolorum alias repellat, iure sunt nesciunt illum voluptate error exercitationem laudantium veniam possimus! Molestiae accusamus repellendus pariatur accusantium rerum facere assumenda temporibus illum beatae non. Eos repellendus quisquam hic rem unde, voluptates harum esse dolorem nobis animi commodi, sit nisi ea, optio inventore voluptate cum deserunt enim corrupti? Qui sequi unde molestias sed eos a cumque quidem soluta odit impedit, culpa, omnis iure delectus adipisci accusamus alias maiores facilis dicta autem. Beatae dolor ipsum modi laboriosam itaque.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quidem delectus sequi, minima pariatur commodi consequuntur tempore laborum similique in dolore distinctio omnis dolorum alias repellat, iure sunt nesciunt illum voluptate error exercitationem laudantium veniam possimus! Molestiae accusamus repellendus pariatur accusantium rerum facere assumenda temporibus illum beatae non. Eos repellendus quisquam hic rem unde, voluptates harum esse dolorem nobis animi commodi, sit nisi ea, optio inventore voluptate cum deserunt enim corrupti? Qui sequi unde molestias sed eos a cumque quidem soluta odit impedit, culpa, omnis iure delectus adipisci accusamus alias maiores facilis dicta autem. Beatae dolor ipsum modi laboriosam itaque.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quidem delectus sequi, minima pariatur commodi consequuntur tempore laborum similique in dolore distinctio omnis dolorum alias repellat, iure sunt nesciunt illum voluptate error exercitationem laudantium veniam possimus! Molestiae accusamus repellendus pariatur accusantium rerum facere assumenda temporibus illum beatae non. Eos repellendus quisquam hic rem unde, voluptates harum esse dolorem nobis animi commodi, sit nisi ea, optio inventore voluptate cum deserunt enim corrupti? Qui sequi unde molestias sed eos a cumque quidem soluta odit impedit, culpa, omnis iure delectus adipisci accusamus alias maiores facilis dicta autem. Beatae dolor ipsum modi laboriosam itaque.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quidem delectus sequi, minima pariatur commodi consequuntur tempore laborum similique in dolore distinctio omnis dolorum alias repellat, iure sunt nesciunt illum voluptate error exercitationem laudantium veniam possimus! Molestiae accusamus repellendus pariatur accusantium rerum facere assumenda temporibus illum beatae non. Eos repellendus quisquam hic rem unde, voluptates harum esse dolorem nobis animi commodi, sit nisi ea, optio inventore voluptate cum deserunt enim corrupti? Qui sequi unde molestias sed eos a cumque quidem soluta odit impedit, culpa, omnis iure delectus adipisci accusamus alias maiores facilis dicta autem. Beatae dolor ipsum modi laboriosam itaque.",
  ]


  return (
    <main className="center py-[15vh]">
      <div className="flex flex-col w-11/12 lg:w-10/12">

        <div className="flex flex-col lg:flex-row items-center gap-[50px] w-full">
          <div className="flex flex-col">

            <p className="text-sm ">{blog?.date}</p>
            <h1 className="text-4xl font-bold capitalize text-zinc-800">{blog?.title}</h1>
            <p className="mt-7">{blog?.excerpt}</p>

          </div>


          <img src={blog?.img} alt={blog.title} className="object-cover lg:h-[50vh] w-full rounded-xl"/>
        </div>


        <section className="flex flex-col gap-9 mt-[15vh]">
          {body.map((b, i) => (
            <p key={i}>{b}</p>
          ))}
        </section>


        <section className="justify-between w-full center flex-col mt-[20vh] gap-[10vh] gap-y-12 items-center">
        
                
            <div className="w-full">
                <Headers 
                    text="Related Articles"
                />
            </div>       

            <BlogListing 
                blogs={Blogs.filter((a, i) => i < 3 && a)}
            />
            <Link to="/blogs" className="w-full">
                <Button
                    text={"view all"}
                    btnType="primary"
                />
            </Link>

        </section>
        
      </div>
    </main>
  )
}

export default BlogPage